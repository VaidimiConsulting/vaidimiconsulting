import express from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Upload directory setup
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer File Upload Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${safeName}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.pdf', '.doc', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  const allowedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  if (allowedExtensions.includes(ext) || allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('INVALID_FILE_TYPE'));
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max
  fileFilter: fileFilter
});

// Helper: MySQL Pool initialization & Auto Table Setup
let dbPool = null;
const initDatabase = async () => {
  if (!process.env.DB_HOST || !process.env.DB_USER) {
    console.log('[DB] MySQL host/user not specified. Skipping DB persistence.');
    return;
  }
  try {
    dbPool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'vaidimi_db',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // Test connection & Create table if missing
    const connection = await dbPool.getConnection();
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        company VARCHAR(255),
        designation VARCHAR(255),
        enquiry_type VARCHAR(100) NOT NULL,
        service_required TEXT,
        project_requirement TEXT NOT NULL,
        preferred_contact_method VARCHAR(50),
        preferred_contact_time VARCHAR(100),
        lead_source VARCHAR(100),
        resume_path VARCHAR(550),
        status VARCHAR(50) DEFAULT 'New',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `;
    await connection.query(createTableQuery);
    connection.release();
    console.log('[DB] MySQL initialized and enquiries table is ready.');
  } catch (err) {
    console.warn('[DB] MySQL connection/init notice:', err.message);
    dbPool = null;
  }
};

initDatabase();

// Input Sanitization Helper
const sanitize = (str) => {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

// Rate limiting map (IP based simple protection)
const ipRequestMap = new Map();
const rateLimitMiddleware = (req, res, next) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || 'client-ip';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 10;

  const userRequests = ipRequestMap.get(ip) || [];
  const validRequests = userRequests.filter((timestamp) => now - timestamp < windowMs);

  if (validRequests.length >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please wait a minute before submitting again.'
    });
  }

  validRequests.push(now);
  ipRequestMap.set(ip, validRequests);
  next();
};

// Duplicate submission prevention cache (30-second window per email + message)
const recentSubmissions = new Map();
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > 60000) {
      recentSubmissions.delete(key);
    }
  }
}, 60000);

// ======================================================
// ENQUIRY API ENDPOINT
// ======================================================

app.post('/api/enquiries', rateLimitMiddleware, (req, res) => {
  upload.single('resume')(req, res, async (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          success: false,
          message: 'File size exceeds 5 MB limit. Please upload a smaller document.'
        });
      }
      if (err.message === 'INVALID_FILE_TYPE') {
        return res.status(400).json({
          success: false,
          message: 'Invalid file format. Only PDF, DOC, and DOCX files are allowed.'
        });
      }
      return res.status(400).json({
        success: false,
        message: err.message || 'Error uploading file.'
      });
    }

    try {
      const rawFullName = req.body.full_name || req.body.name;
      const rawEmail = req.body.email;
      const rawPhone = req.body.phone || req.body.contact_number;
      const rawCompany = req.body.company || req.body.organization || '';
      const rawDesignation = req.body.designation || '';
      const rawService = req.body.service_required || req.body.service || req.body.service_of_interest || '';
      const rawEnquiryType = req.body.enquiry_type || (rawService ? `Consultation: ${rawService}` : 'Executive Consultation');
      const rawMessage = req.body.project_requirement || req.body.message || req.body.brief_message;
      const rawContactMethod = req.body.preferred_contact_method || 'Email';
      const rawContactTime = req.body.preferred_contact_time || 'Anytime';
      const rawLeadSource = req.body.lead_source || 'Website Contact';
      const rawConsent = req.body.privacy_consent;
      const website_hp = req.body.website_hp; // Honeypot field

      // Anti-spam Honeypot Check
      if (website_hp) {
        console.warn('[SPAM DETECTED] Honeypot field filled. Returning fake success.');
        return res.status(200).json({ success: true, message: 'Enquiry submitted successfully.' });
      }

      // Mandatory Field Validation
      if (!rawFullName || !sanitize(rawFullName)) {
        return res.status(400).json({ success: false, message: 'Full name is required.' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!rawEmail || !emailRegex.test(String(rawEmail).trim())) {
        return res.status(400).json({ success: false, message: 'A valid corporate or work email address is required.' });
      }

      if (!rawPhone || sanitize(rawPhone).length < 7) {
        return res.status(400).json({ success: false, message: 'A valid contact phone number is required (min 7 digits).' });
      }

      if (!rawMessage || !sanitize(rawMessage)) {
        return res.status(400).json({ success: false, message: 'Please provide a brief message or project requirement.' });
      }

      if (rawConsent !== undefined && rawConsent !== 'true' && rawConsent !== true && rawConsent !== '1') {
        return res.status(400).json({ success: false, message: 'Privacy consent agreement is required.' });
      }

      // Format clean data
      const cleanData = {
        full_name: sanitize(rawFullName),
        email: String(rawEmail).trim().toLowerCase(),
        phone: sanitize(rawPhone),
        company: sanitize(rawCompany) || 'N/A',
        designation: sanitize(rawDesignation) || 'N/A',
        enquiry_type: sanitize(rawEnquiryType),
        service_required: Array.isArray(rawService)
          ? rawService.map(sanitize).join(', ')
          : sanitize(rawService) || 'N/A',
        project_requirement: sanitize(rawMessage),
        preferred_contact_method: sanitize(rawContactMethod) || 'Email',
        preferred_contact_time: sanitize(rawContactTime) || 'Anytime',
        lead_source: sanitize(rawLeadSource) || 'Website',
        resume_path: req.file ? req.file.path : null,
        resume_name: req.file ? req.file.originalname : null,
        submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      // Duplicate submission protection (prevents fast double clicks or spam burst)
      const submissionKey = `${cleanData.email}:${cleanData.project_requirement.slice(0, 40)}`;
      const lastSubmission = recentSubmissions.get(submissionKey);
      if (lastSubmission && Date.now() - lastSubmission < 30000) {
        return res.status(200).json({
          success: true,
          message: 'Your enquiry has already been received. Our leadership team will review and contact you shortly.'
        });
      }
      recentSubmissions.set(submissionKey, Date.now());

      // 1. MySQL DB Insertion (if available)
      if (dbPool) {
        try {
          const insertQuery = `
            INSERT INTO enquiries 
            (full_name, email, phone, company, designation, enquiry_type, service_required, project_requirement, preferred_contact_method, preferred_contact_time, lead_source, resume_path, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'New')
          `;
          await dbPool.query(insertQuery, [
            cleanData.full_name,
            cleanData.email,
            cleanData.phone,
            cleanData.company,
            cleanData.designation,
            cleanData.enquiry_type,
            cleanData.service_required,
            cleanData.project_requirement,
            cleanData.preferred_contact_method,
            cleanData.preferred_contact_time,
            cleanData.lead_source,
            cleanData.resume_path
          ]);
          console.log('[DB] Enquiry record saved successfully.');
        } catch (dbErr) {
          console.error('[DB] Failed to insert enquiry into MySQL:', dbErr.message);
        }
      }

      // 2. Email Sending
      const smtpHost = process.env.SMTP_HOST;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASSWORD;
      const mailTo = process.env.MAIL_TO || 'info@vaidimiconsulting.in';

      if (smtpHost && smtpUser && smtpPass) {
        try {
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
              user: smtpUser,
              pass: smtpPass
            }
          });

          // Email to Vaidimi
          const adminEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
              <div style="background-color: #173F69; color: #ffffff; padding: 24px; text-align: center;">
                <h1 style="margin: 0; font-size: 20px; letter-spacing: 1px;">VAIDIMI CONSULTING</h1>
                <p style="margin: 4px 0 0 0; font-size: 13px; color: #93c5fd;">NEW WEBSITE ENQUIRY</p>
              </div>
              
              <div style="padding: 24px;">
                <h2 style="font-size: 14px; text-transform: uppercase; color: #64748b; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 0;">
                  CONTACT DETAILS
                </h2>
                <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
                  <tr><td style="width: 35%; color: #475569; font-weight: bold; padding: 4px 0;">Full Name:</td><td>${cleanData.full_name}</td></tr>
                  <tr><td style="color: #475569; font-weight: bold; padding: 4px 0;">Email Address:</td><td><a href="mailto:${cleanData.email}" style="color: #173F69;">${cleanData.email}</a></td></tr>
                  <tr><td style="color: #475569; font-weight: bold; padding: 4px 0;">Phone Number:</td><td><a href="tel:${cleanData.phone}" style="color: #173F69;">${cleanData.phone}</a></td></tr>
                  <tr><td style="color: #475569; font-weight: bold; padding: 4px 0;">Company:</td><td>${cleanData.company}</td></tr>
                  <tr><td style="color: #475569; font-weight: bold; padding: 4px 0;">Designation:</td><td>${cleanData.designation}</td></tr>
                </table>

                <h2 style="font-size: 14px; text-transform: uppercase; color: #64748b; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                  ENQUIRY DETAILS
                </h2>
                <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
                  <tr><td style="width: 35%; color: #475569; font-weight: bold; padding: 4px 0;">Enquiry Type:</td><td style="font-weight: bold; color: #173F69;">${cleanData.enquiry_type}</td></tr>
                  <tr><td style="color: #475569; font-weight: bold; padding: 4px 0;">Services Required:</td><td>${cleanData.service_required}</td></tr>
                  <tr><td style="color: #475569; font-weight: bold; padding: 4px 0;">Preferred Contact:</td><td>${cleanData.preferred_contact_method}</td></tr>
                  <tr><td style="color: #475569; font-weight: bold; padding: 4px 0;">Preferred Time:</td><td>${cleanData.preferred_contact_time}</td></tr>
                  <tr><td style="color: #475569; font-weight: bold; padding: 4px 0;">Lead Source:</td><td>${cleanData.lead_source}</td></tr>
                </table>

                <h2 style="font-size: 14px; text-transform: uppercase; color: #64748b; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                  REQUIREMENT
                </h2>
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; font-size: 14px; white-space: pre-wrap; margin-bottom: 20px;">${cleanData.project_requirement}</div>

                <h2 style="font-size: 14px; text-transform: uppercase; color: #64748b; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                  SUBMISSION DETAILS
                </h2>
                <p style="font-size: 13px; color: #64748b; margin: 0;">
                  Submitted From: Vaidimi Consulting Website<br>
                  Submission Date: ${cleanData.submitted_at}
                </p>
              </div>
            </div>
          `;

          const adminMailOptions = {
            from: `"Vaidimi Website" <${process.env.MAIL_FROM || smtpUser}>`,
            to: mailTo,
            replyTo: cleanData.email,
            subject: `New Website Enquiry – ${cleanData.full_name} – ${cleanData.enquiry_type}`,
            html: adminEmailHtml
          };

          // Customer Auto-reply
          const customerEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
              <div style="background-color: #173F69; color: #ffffff; padding: 24px; text-align: center;">
                <h1 style="margin: 0; font-size: 20px; letter-spacing: 1px;">VAIDIMI CONSULTING</h1>
                <p style="margin: 4px 0 0 0; font-size: 13px; color: #93c5fd;">Business & IT Consulting</p>
              </div>
              
              <div style="padding: 28px;">
                <p style="font-size: 15px; margin-top: 0;">Dear <strong>${cleanData.full_name}</strong>,</p>
                
                <p style="font-size: 14px;">Thank you for contacting Vaidimi Consulting.</p>
                
                <p style="font-size: 14px;">We have successfully received your enquiry regarding <strong>${cleanData.enquiry_type}</strong>.</p>
                
                <p style="font-size: 14px;">Our team will review your requirement and get back to you shortly.</p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #475569;">
                  <p style="margin: 0; font-weight: bold; color: #173F69;">Regards,</p>
                  <p style="margin: 4px 0 0 0; font-weight: bold; color: #0f172a;">Vaidimi Consulting</p>
                  <p style="margin: 2px 0 0 0;">Business & IT Consulting</p>
                  <p style="margin: 2px 0 0 0;"><a href="mailto:info@vaidimiconsulting.in" style="color: #173F69;">info@vaidimiconsulting.in</a></p>
                  <p style="margin: 2px 0 0 0;">Airport Road, Varanasi, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          `;

          const customerMailOptions = {
            from: `"Vaidimi Consulting" <${process.env.MAIL_FROM || smtpUser}>`,
            to: cleanData.email,
            subject: 'Thank You for Contacting Vaidimi Consulting',
            html: customerEmailHtml
          };

          await transporter.sendMail(adminMailOptions);
          await transporter.sendMail(customerMailOptions);
          console.log(`[EMAIL] Enquiry email & auto-reply sent successfully for ${cleanData.email}`);
        } catch (mailErr) {
          console.error('[EMAIL ERROR] Failed to send email via SMTP:', mailErr.message);
          return res.status(500).json({
            success: false,
            message: "We were unable to deliver your enquiry email at this moment. Please try again or reach out directly to info@vaidimiconsulting.in."
          });
        }
      } else {
        console.log('[EMAIL] SMTP credentials not fully configured in .env. Submission logged to console.');
        console.log('Submitted Payload:', cleanData);
      }

      return res.status(200).json({
        success: true,
        message: 'Thank you! Your enquiry has been successfully submitted.'
      });
    } catch (serverErr) {
      console.error('[SERVER ERROR]', serverErr);
      return res.status(500).json({
        success: false,
        message: "We couldn't submit your enquiry right now. Please try again or contact us directly at info@vaidimiconsulting.in."
      });
    }
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Vaidimi Backend API' });
});

app.listen(PORT, () => {
  console.log(`[SERVER] Vaidimi Consulting API server running on port ${PORT}`);
});
