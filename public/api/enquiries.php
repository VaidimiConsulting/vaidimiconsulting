<?php
// Prevent CORS issues & define response format
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

// Extract input from $_POST (FormData) or raw JSON
$input = $_POST;
if (empty($input)) {
    $rawJson = file_get_contents('php://input');
    if (!empty($rawJson)) {
        $decoded = json_decode($rawJson, true);
        if (is_array($decoded)) {
            $input = $decoded;
        }
    }
}

// Anti-spam Honeypot Check
$website_hp = isset($input['website_hp']) ? trim($input['website_hp']) : '';
if (!empty($website_hp)) {
    // Silently return success to confuse spambots
    echo json_encode(["success" => true, "message" => "Enquiry submitted successfully."]);
    exit();
}

// Sanitize Helper
function clean_input($data) {
    if (is_array($data)) {
        return implode(', ', array_map('clean_input', $data));
    }
    return htmlspecialchars(trim((string)$data), ENT_QUOTES, 'UTF-8');
}

// Extract fields
$name = isset($input['full_name']) ? clean_input($input['full_name']) : (isset($input['name']) ? clean_input($input['name']) : '');
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($input['phone']) ? clean_input($input['phone']) : (isset($input['contact_number']) ? clean_input($input['contact_number']) : '');
$company = isset($input['company']) ? clean_input($input['company']) : 'N/A';
$service = isset($input['service_required']) ? clean_input($input['service_required']) : (isset($input['service']) ? clean_input($input['service']) : 'General Consultation');
$enquiryType = isset($input['enquiry_type']) ? clean_input($input['enquiry_type']) : "Consultation: {$service}";
$message = isset($input['project_requirement']) ? clean_input($input['project_requirement']) : (isset($input['message']) ? clean_input($input['message']) : '');

// Validations
if (empty($name)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Full name is required."]);
    exit();
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "A valid email address is required."]);
    exit();
}

if (empty($phone) || strlen($phone) < 7) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "A valid contact phone number is required (min 7 digits)."]);
    exit();
}

if (empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please provide a brief message or project requirement."]);
    exit();
}

// Recipient Email Configuration
$to = "info@vaidimiconsulting.in";
$subject = "New Website Enquiry – {$name} – {$enquiryType}";

// Email HTML Body
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
    .header { background: #173F69; color: #ffffff; padding: 24px; text-align: center; }
    .content { padding: 24px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; }
    td { padding: 8px 4px; vertical-align: top; }
    .label { width: 35%; color: #475569; font-weight: bold; }
    .box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; font-size: 14px; white-space: pre-wrap; margin-bottom: 20px; }
    .footer { font-size: 12px; color: #64748b; padding-top: 12px; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h1 style='margin:0;font-size:20px;letter-spacing:1px;'>VAIDIMI CONSULTING</h1>
      <p style='margin:4px 0 0;font-size:13px;color:#93c5fd;'>NEW WEBSITE ENQUIRY</p>
    </div>
    <div class='content'>
      <h3 style='color:#173F69;font-size:14px;text-transform:uppercase;margin-top:0;'>Contact Information</h3>
      <table>
        <tr><td class='label'>Full Name:</td><td><strong>{$name}</strong></td></tr>
        <tr><td class='label'>Email:</td><td><a href='mailto:{$email}'>{$email}</a></td></tr>
        <tr><td class='label'>Phone:</td><td><a href='tel:{$phone}'>{$phone}</a></td></tr>
        <tr><td class='label'>Company:</td><td>{$company}</td></tr>
        <tr><td class='label'>Service:</td><td>{$service}</td></tr>
      </table>

      <h3 style='color:#173F69;font-size:14px;text-transform:uppercase;'>Message / Requirements</h3>
      <div class='box'>{$message}</div>

      <div class='footer'>
        Submitted from: Vaidimi Consulting Website<br>
        Date: " . date("d M Y, h:i A") . " IST
      </div>
    </div>
  </div>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Vaidimi Website <info@vaidimiconsulting.in>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email using PHP mail()
$mailSent = @mail($to, $subject, $htmlBody, $headers);

if ($mailSent) {
    // Send customer auto-acknowledgement
    $autoSubject = "Thank You for Contacting Vaidimi Consulting";
    $autoBody = "
    <!DOCTYPE html>
    <html>
    <head><meta charset='utf-8'></head>
    <body style='font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6;'>
      <div style='max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;'>
        <div style='background-color: #173F69; color: #ffffff; padding: 24px; text-align: center;'>
          <h1 style='margin: 0; font-size: 20px;'>VAIDIMI CONSULTING</h1>
          <p style='margin: 4px 0 0 0; font-size: 13px; color: #93c5fd;'>Strategic Practice Advisory</p>
        </div>
        <div style='padding: 24px;'>
          <p>Dear <strong>{$name}</strong>,</p>
          <p>Thank you for reaching out to Vaidimi Consulting. We have received your consultation enquiry regarding <strong>{$service}</strong>.</p>
          <p>A Lead Practice Director will review your requirements and connect with you within 4 business hours.</p>
          <br>
          <p style='margin:0;font-weight:bold;color:#173F69;'>Vaidimi Consulting</p>
          <p style='margin:2px 0 0;font-size:13px;color:#64748b;'>SH 9/132, Airport Road, Varanasi - 221002, UP, India</p>
        </div>
      </div>
    </body>
    </html>";

    $autoHeaders = "MIME-Version: 1.0\r\n";
    $autoHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $autoHeaders .= "From: Vaidimi Consulting <info@vaidimiconsulting.in>\r\n";
    $autoHeaders .= "Reply-To: info@vaidimiconsulting.in\r\n";

    @mail($email, $autoSubject, $autoBody, $autoHeaders);

    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your enquiry has been successfully delivered to info@vaidimiconsulting.in."
    ]);
} else {
    // Log failure on server
    error_log("Failed to send enquiry email from {$email} to {$to}");
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "We were unable to deliver your enquiry email at this moment. Please try again or reach out directly to info@vaidimiconsulting.in."
    ]);
}
