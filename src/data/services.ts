import {
  BadgeCheck,
  Banknote,
  Bot,
  BriefcaseBusiness,
  Building2,
  BarChart3,
  Cloud,
  Database,
  Handshake,
  Landmark,
  Megaphone,
  MessageSquareText,
  Monitor,
  Network,
  Palette,
  Presentation,
  Rocket,
  SearchCheck,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';
import marketingImage from '@/assets/services/marketing-consulting.jpg';
import itImage from '@/assets/services/it-consulting.jpg';
import promotionImage from '@/assets/services/promotion-advertisement.jpg';
import hrImage from '@/assets/services/hr-consulting.jpg';
import financialImage from '@/assets/services/finance.jpg';
import eventImage from '@/assets/services/managment1.webp';
import eventProcessImage from '@/assets/services/manaement2.webp';

export interface SubService {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  includes: string[];
  whyUs: string;
  image: string;
  icon: LucideIcon;
  children?: Omit<SubService, 'image' | 'children'>[];
}

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface ServiceImpact {
  metric: string;
  metricLabel: string;
  caseSnippet: string;
  clientType: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  icon: LucideIcon;
  accent: 'accent' | 'accent-blue' | 'accent-gold' | 'accent-sage' | 'accent-green';
  heroTagline: string;
  intro: string;
  subServices: SubService[];
  cta: string;
  whoItsFor: string[];
  keyBenefits: ServiceBenefit[];
  impactSnapshot: ServiceImpact;
}

const subService = (
  slug: string,
  title: string,
  shortDescription: string,
  overview: string,
  includes: string[],
  whyUs: string,
  image: string,
  icon: LucideIcon,
  children?: Omit<SubService, 'image' | 'children'>[],
): SubService => ({ slug, title, shortDescription, overview, includes, whyUs, image, icon, children });

export const services: Service[] = [
  {
    slug: 'marketing-consulting',
    title: 'Marketing Consulting',
    shortDescription: 'Brand strategy, communication, and digital marketing built to drive measurable growth.',
    longDescription:
      'We shape brand systems, messaging, and campaign plans that help businesses stand out in competitive markets and convert attention into demand. Our work connects positioning, creative direction, and execution planning so your marketing activity has a clear commercial purpose.',
    image: marketingImage,
    icon: Megaphone,
    accent: 'accent',
    heroTagline: 'Building Brands That Stand Out and Strategies That Deliver',
    intro:
      'We help businesses build strong, recognizable brands and marketing strategies that actually drive growth. From brand identity to digital campaigns, our team combines creative thinking with data-backed strategy to make sure every marketing rupee works harder for you.',
    subServices: [
      subService('brand-development', 'Brand Development', "Define your brand's identity, positioning, and voice across every touchpoint.", "Brand development gives your business a clear identity, market position, and voice before you spend heavily on campaigns. It is built for companies that need stronger recognition, sharper differentiation, or a more consistent customer experience. We translate business goals, audience insight, and competitive context into a brand direction your teams can use every day.", ['Brand positioning and differentiation', 'Audience and competitor review', 'Voice, tone, and messaging direction', 'Brand consistency guidelines'], 'We combine strategic clarity with practical brand systems, so the work can move from workshops into real customer-facing communication quickly.', marketingImage, BadgeCheck),
      subService('brand-creation', 'Brand Creation', 'Create a new brand from naming through identity and guidelines.', 'Brand creation is for new businesses, product lines, and ventures that need to enter the market with a confident identity. We support the full journey from naming and visual identity through message architecture and launch-ready guidelines. The result is a brand foundation that feels distinctive, credible, and ready for consistent use.', ['Naming and brand concept development', 'Logo and visual identity direction', 'Core messaging and tagline options', 'Launch-ready brand guidelines'], 'Our approach balances creativity with business fit, helping you avoid a brand that looks good but cannot scale across real channels.', marketingImage, Sparkles),
      subService('marketing-communication-design-development', 'Marketing Communication Design & Development', 'Develop campaign, content, and collateral that carries your message clearly.', 'Marketing communication design turns your brand message into useful campaign assets, sales collateral, and content. It is ideal for teams that know what they offer but need a sharper way to explain it across channels. We develop communication that is clear, persuasive, and aligned with the way your audience actually decides.', ['Campaign messaging and creative concepts', 'Sales and marketing collateral', 'Presentation and brochure content', 'Channel-specific communication assets'], 'We keep communication tied to buyer behavior and business goals, so creative work supports conversion instead of becoming decoration.', marketingImage, MessageSquareText),
      subService('strategic-marketing', 'Strategic Marketing', 'Build data-driven marketing plans aligned with commercial goals.', 'Strategic marketing creates the plan behind your campaigns, budgets, and channel choices. It is designed for businesses that need to prioritize markets, refine positioning, and connect marketing activity to sales outcomes. We combine research, customer insight, and execution planning into a roadmap your team can follow.', ['Market and customer research', 'Positioning and go-to-market planning', 'Channel and budget prioritization', 'Campaign roadmap and success metrics'], 'We focus on decisions that make marketing spend more accountable, measurable, and easier for leadership teams to act on.', marketingImage, Target),
      subService('digital-marketing', 'Digital Marketing', 'Run full-funnel digital campaigns across SEO, paid, email, and content.', 'Digital marketing helps your business grow visibility, traffic, leads, and repeat engagement through coordinated online channels. It works best for teams that want campaigns built around a funnel instead of scattered posts or ads. We plan and optimize digital activity across discovery, consideration, conversion, and retention.', ['SEO and content planning', 'Paid search and social campaign strategy', 'Email and lead-nurture campaigns', 'Performance tracking and optimization'], 'Our digital work is grounded in measurable outcomes, so campaigns can be improved based on evidence rather than guesswork.', marketingImage, TrendingUp),
    ],
    cta: "Need a brand or marketing strategy that actually works? Let's talk.",
    whoItsFor: [
      'Mid-market enterprises needing differentiated market positioning',
      'Fast-growing consumer brands expanding across northern and central states',
      'B2B firms looking to build an accountable demand-generation funnel',
    ],
    keyBenefits: [
      { title: 'Sharpened Brand Differentiation', desc: 'Transform complex product features into clear commercial positioning that closes deals faster.' },
      { title: 'Full-Funnel Campaign Accountability', desc: 'Connect every advertising rupee to lead qualification and measurable customer pipeline.' },
      { title: 'Omnichannel Synergy', desc: 'Unify print, outdoor, digital ads, and field sales collateral into a consistent brand narrative.' },
      { title: 'Sustainable Organic Discovery', desc: 'Drive lower blended customer acquisition cost (CAC) through SEO, content velocity, and word-of-mouth.' },
    ],
    impactSnapshot: {
      metric: '+3.2x',
      metricLabel: 'Qualified Inbound Pipeline',
      caseSnippet: 'Repositioned a regional industrial equipment manufacturer, overhauling sales collateral and digital search funnels within 5 months.',
      clientType: 'Industrial B2B Manufacturing Client',
    },
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    shortDescription: 'Software, cloud, data, and AI solutions that modernize operations and scale with you.',
    longDescription:
      'We help teams build reliable digital systems, organize data, and adopt technology that makes day-to-day business faster, clearer, and easier to scale. Each engagement is scoped around practical business use, not technology for its own sake.',
    image: itImage,
    icon: Monitor,
    accent: 'accent-blue',
    heroTagline: 'Technology Solutions That Power Your Business Forward',
    intro:
      'From custom software to AI-driven solutions, our IT consulting team helps businesses modernize operations, harness data, and build scalable digital infrastructure that grows with them.',
    subServices: [
      subService('software-design-development', 'Software Design & Development', 'Build custom software tailored to your processes and goals.', 'Software design and development helps businesses replace manual workarounds, disconnected spreadsheets, and rigid tools with systems that fit how they operate. We define requirements, shape user flows, and build applications around measurable workflow improvements. This is useful for companies that need internal tools, customer-facing portals, or process-specific software.', ['Requirement discovery and workflow mapping', 'Application architecture and user experience design', 'Custom web or business application development', 'Testing, launch support, and iteration'], 'We keep software tied to business process, so every feature has a reason and every release moves operations forward.', itImage, Monitor),
      subService('social-media-marketing', 'Social Media Marketing', 'Grow reach and engagement with platform-specific social strategy.', 'Social media marketing helps businesses build consistent visibility and audience engagement across the platforms that matter to them. We develop content direction, campaign themes, and paid or organic execution plans based on audience behavior. It is especially useful for brands that need more consistent reach, stronger community signals, and better lead flow from social channels.', ['Platform and audience strategy', 'Content calendar and campaign planning', 'Paid social campaign setup', 'Engagement and performance review'], 'We connect social activity to brand and growth goals, keeping execution disciplined instead of reactive.', itImage, Share2),
      subService('cloud-based-services', 'Cloud Based Services', 'Migrate, set up, and manage secure cloud infrastructure.', 'Cloud based services help organizations move from fragile, expensive, or hard-to-scale infrastructure to more flexible digital operations. We support migration planning, environment setup, security basics, and ongoing management models. The goal is to give your team a reliable foundation that can scale without unnecessary complexity.', ['Cloud readiness assessment', 'Migration and infrastructure setup', 'Security, backup, and access controls', 'Cost and performance optimization'], 'We design cloud environments around real workload needs, helping you control cost while improving resilience.', itImage, Cloud),
      subService('data-digitization-management', 'Data Digitization & Management', 'Convert and organize business data into structured digital formats.', 'Data digitization and management helps businesses bring scattered paper records, files, and unstructured information into organized digital systems. It is valuable for teams that need searchable records, cleaner reporting, and better operational control. We focus on structure, security, and usability so data can support decisions rather than slow them down.', ['Document and record digitization planning', 'Data structure and taxonomy setup', 'Secure storage and access workflows', 'Data quality checks and reporting readiness'], 'We treat digitization as an operating improvement, not just file conversion, so the resulting data is easier to trust and use.', itImage, Database),
      subService('ai-model', 'AI Model', 'Develop AI/ML models for automation, insight, and decision support.', 'AI model development helps organizations automate repetitive work, identify patterns, and improve decision-making with data-driven systems. We assess use cases, prepare data, and shape models around practical business outcomes. This is suited for teams that want AI to solve a defined problem rather than experiment without a clear path to value.', ['Use-case discovery and feasibility review', 'Data preparation and model design', 'Prototype and validation support', 'Deployment planning and monitoring guidance'], 'We focus on usable AI outcomes, pairing technical build with business context so models can be adopted responsibly.', itImage, Bot),
    ],
    cta: 'Ready to modernize your technology stack? Get in touch.',
    whoItsFor: [
      'Organizations outgrowing disconnected spreadsheets, paper records, and legacy software',
      'Enterprises modernizing data architecture, cloud infrastructure, and cybersecurity',
      'Leadership teams wanting pragmatic AI and workflow automation without bloated licensing',
    ],
    keyBenefits: [
      { title: 'Tailored Software Architecture', desc: 'Custom software built precisely around your operational workflows, eliminating manual workarounds.' },
      { title: 'Pragmatic AI & Machine Learning', desc: 'Deploy targeted machine learning models for inventory forecasting, lead scoring, and automated decisioning.' },
      { title: 'Resilient Cloud Systems', desc: 'Migrate to modern AWS/Azure environments with enterprise security, automatic backups, and predictable cost.' },
      { title: 'Structured Data Intelligence', desc: 'Turn scattered operational data into centralized dashboards that give leadership instant daily visibility.' },
    ],
    impactSnapshot: {
      metric: '68%',
      metricLabel: 'Reduction in Manual Processing Time',
      caseSnippet: 'Architected a custom cloud dispatch portal for a multi-depot logistics operator, eliminating manual order entry delays.',
      clientType: 'Logistics & Supply Chain Enterprise',
    },
  },
  {
    slug: 'promotion-advertisement',
    title: 'Promotion & Advertisement',
    shortDescription: 'Digital, print, outdoor, indoor, and ground campaigns that put your brand in view.',
    longDescription:
      'We plan campaign visibility across physical and digital touchpoints so your audience sees the right message in the right place at the right time. Our focus is practical reach, consistent execution, and brand recall.',
    image: promotionImage,
    icon: Presentation,
    accent: 'accent-gold',
    heroTagline: 'Getting Your Brand Seen, Heard, and Remembered',
    intro:
      'We plan and execute promotional and advertising campaigns across digital and traditional channels, ensuring your brand reaches the right audience at the right time, both online and on the ground.',
    subServices: [
      subService('ground-promotion', 'Ground Promotion', 'Create direct real-world engagement through activations and promotional events.', 'Ground promotion brings your brand into direct contact with customers through activations, sampling, events, and field campaigns. It is built for businesses that need visibility, trial, and trust in specific local markets. We plan the activity, coordinate execution, and help teams capture useful feedback from the field.', ['Activation planning and location selection', 'Sampling and field engagement programs', 'Promoter briefing and coordination', 'Campaign reporting and market feedback'], 'We bring structure to on-ground execution, helping campaigns feel organized, consistent, and measurable.', promotionImage, Users),
      subService('digital-promotion', 'Digital Promotion', 'Run targeted promotional campaigns across online channels.', 'Digital promotion helps businesses reach focused audiences through online offers, launches, awareness campaigns, and conversion pushes. We plan campaigns across social, search, and display channels with clear messages and measurable goals. It is useful when you need fast visibility, targeted reach, and performance insight.', ['Audience and offer strategy', 'Social, search, and display campaign planning', 'Creative direction for digital placements', 'Performance monitoring and refinement'], 'We make digital promotion accountable by connecting targeting, messaging, and reporting from the start.', promotionImage, SearchCheck),
      subService('outdoor-indoor-advertisement', 'Outdoor & Indoor Advertisement', 'Plan physical advertising placements for high visibility.', 'Outdoor and indoor advertisement places your brand in high-traffic physical environments where visibility and recall matter. We support hoardings, banners, in-store displays, and local placement planning based on audience movement and campaign goals. This helps brands reinforce awareness in markets where physical presence still strongly influences trust.', ['Placement planning and visibility review', 'Hoarding, banner, and display coordination', 'In-store and indoor media planning', 'Vendor coordination and rollout support'], 'We help physical media work harder by choosing placements and messages with clear audience context.', promotionImage, Building2),
      subService('print-digital-media-promotion', 'Print & Digital Media Promotion', 'Build reach and credibility across print and digital media outlets.', 'Print and digital media promotion supports wider credibility through newspapers, magazines, online publications, and media placements. It is useful for launches, reputation building, market education, and campaign reinforcement. We help shape the message and placement plan so media spend supports a clear business purpose.', ['Print media placement planning', 'Digital media promotion strategy', 'Campaign messaging for media formats', 'Reach and response review'], 'We align media promotion with brand and sales objectives, keeping visibility connected to real campaign intent.', promotionImage, Palette),
    ],
    cta: "Want your brand to be seen everywhere it matters? Let's plan your campaign.",
    whoItsFor: [
      'Brands launching new products or entering regional and Tier-2 consumer markets',
      'Retailers requiring high-footfall on-ground activations, roadshows, and store visibility',
      'Enterprises needing integrated media planning across hoardings, transit, print, and digital',
    ],
    keyBenefits: [
      { title: 'High-Impact Ground Activations', desc: 'Direct experiential consumer touchpoints through pop-up kiosks, mall activations, and dealer meets.' },
      { title: 'Hyper-Targeted Digital Visibility', desc: 'Localized paid search, social campaigns, and display ads designed for immediate footfall or enquiry.' },
      { title: 'Strategic Physical Placements', desc: 'High-frequency outdoor hoardings and bus/metro transit media placed at critical commuter junctures.' },
      { title: 'Verified Mass Media Reach', desc: 'Curated print advertorials and publication features that reinforce market leadership and trust.' },
    ],
    impactSnapshot: {
      metric: '+45%',
      metricLabel: 'Surge in Regional Footfall & Trial',
      caseSnippet: 'Planned and executed a multi-city launch campaign across Varanasi, Lucknow, and Kanpur for an emerging consumer brand.',
      clientType: 'Consumer Goods Client',
    },
  },
  {
    slug: 'hr-consulting',
    title: 'HR Consulting',
    shortDescription: 'Recruitment, training, leadership, salesforce enablement, and HRMS support.',
    longDescription:
      'We help organizations hire better, develop stronger teams, and install people systems that support performance without slowing the business down. Our HR work is built for practical improvement in capability, accountability, and operations.',
    image: hrImage,
    icon: UserCheck,
    accent: 'accent-sage',
    heroTagline: 'Building Stronger Teams, One Strategy at a Time',
    intro:
      'Our HR consulting services help organizations attract the right talent, develop strong leaders, and put the right systems in place to manage and grow their workforce efficiently.',
    subServices: [
      subService('talent-recruitment', 'Talent Recruitment', 'Manage hiring support from sourcing through onboarding.', 'Talent recruitment helps organizations find the right people faster while improving the quality and consistency of hiring. We support role clarity, sourcing, screening, coordination, and onboarding readiness. It is designed for teams that need reliable hiring support without losing sight of culture and capability fit.', ['Role definition and candidate profile alignment', 'Sourcing and screening support', 'Interview coordination and evaluation structure', 'Offer and onboarding support'], 'We approach hiring as a business-critical workflow, helping you reduce delays and improve fit at each step.', hrImage, UserCheck),
      subService('training-development', 'Training & Development', 'Build customized programs that improve team skills and performance.', 'Training and development strengthens employee capability through programs designed around real performance needs. We identify gaps, build practical learning modules, and support delivery plans that can be adopted by managers and teams. It is useful for organizations that want skill growth tied to measurable workplace outcomes.', ['Skill gap assessment', 'Training module design', 'Workshop and learning-session planning', 'Post-training feedback and improvement actions'], 'We design training that is practical, role-aware, and focused on behavior change rather than one-time sessions.', hrImage, Presentation),
      subService('leadership-development', 'Leadership Development', 'Develop managers and future leaders through structured programs.', 'Leadership development helps organizations prepare managers and emerging leaders for greater responsibility. We design coaching, workshops, and development journeys around decision-making, communication, accountability, and team leadership. This is valuable for businesses that are scaling or strengthening succession depth.', ['Leadership competency mapping', 'Manager coaching and workshop design', 'Communication and decision-making development', 'Progress review and development planning'], 'We help leaders connect self-awareness with operating discipline, so development shows up in team performance.', hrImage, Trophy),
      subService('salesforce-training', 'Salesforce Training', 'Train sales teams to sharpen skills and hit targets consistently.', 'Salesforce training equips sales teams with the skills, routines, and confidence needed to improve conversion and target achievement. We focus on customer handling, pitch structure, objection management, follow-up discipline, and field execution. It is suited for teams that need practical improvement in day-to-day selling behavior.', ['Sales process and pitch training', 'Objection handling and negotiation practice', 'Field discipline and follow-up routines', 'Performance review and coaching inputs'], 'We make sales training hands-on and outcome-oriented, helping teams translate learning into measurable activity.', hrImage, TrendingUp),
      subService('hrms-human-resource-management-software-system', 'HRMS (Human Resource Management Software System)', 'Implement HR software to streamline operations, payroll, and employee data.', 'HRMS implementation helps organizations bring employee data, payroll processes, attendance, and HR workflows into a more organized system. We support requirement mapping, setup planning, process alignment, and adoption so the software fits the way your HR team works. This reduces manual effort and improves visibility across employee operations.', ['HR workflow and requirement mapping', 'System setup and data structure planning', 'Payroll, attendance, and employee data workflows', 'Adoption support and process documentation'], 'We focus on HRMS as an operating system for people processes, not just a software installation.', hrImage, Network),
    ],
    cta: "Looking to build a stronger, more capable team? Let's talk HR strategy.",
    whoItsFor: [
      'Companies expanding past 50+ staff without formalized HR governance or hiring routines',
      'Enterprises facing high frontline attrition, recruitment bottlenecks, or managerial skill gaps',
      'Leadership teams implementing modern HRMS software for attendance, payroll, and appraisals',
    ],
    keyBenefits: [
      { title: 'Competency-Based Hiring Rigor', desc: 'Structured candidate screening and scorecard evaluation that reduces bad hires and shortens hiring time.' },
      { title: 'Leadership Bench Strength', desc: 'Targeted coaching journeys that transform functional managers into proactive, accountable business leaders.' },
      { title: 'Salesforce Enablement Routines', desc: 'Practical field training that sharpens objection handling, negotiation confidence, and daily sales discipline.' },
      { title: 'Streamlined HRMS Adoption', desc: 'Seamless rollout of human resource management systems to automate payroll, compliance, and employee records.' },
    ],
    impactSnapshot: {
      metric: '40%',
      metricLabel: 'Decrease in 90-Day Early Attrition',
      caseSnippet: 'Installed structured role scorecards and leadership routines for an expanding agribusiness with 200+ employees.',
      clientType: 'Agribusiness Enterprise',
    },
  },
  {
    slug: 'financial-consulting',
    title: 'Financial Consulting',
    shortDescription: 'Capital, venture, personal finance, portfolio, and due diligence advisory.',
    longDescription:
      'We support financial planning and investment decisions with practical analysis, capital strategy, and disciplined due diligence. Our work helps clients see risk, opportunity, and financial trade-offs more clearly.',
    image: financialImage,
    icon: Landmark,
    accent: 'accent-green',
    heroTagline: 'Smarter Financial Decisions for Sustainable Growth',
    intro:
      'We provide financial consulting services that help businesses and individuals manage capital, plan investments, and make informed financial decisions backed by thorough analysis.',
    subServices: [
      subService('capital-management', 'Capital Management', 'Plan and manage business capital for growth and liquidity.', 'Capital management helps businesses understand how money moves through operations, growth plans, and funding decisions. We assess working capital needs, liquidity pressures, and capital allocation priorities. The goal is to help leadership make better choices about where to preserve, deploy, or raise capital.', ['Working capital and liquidity review', 'Capital allocation planning', 'Cash-flow visibility and control points', 'Growth funding readiness'], 'We bring financial discipline into practical operating decisions, helping capital support growth without creating avoidable strain.', financialImage, Banknote),
      subService('venture-capital', 'Venture Capital', 'Support startups and investors through funding and deal decisions.', 'Venture capital advisory supports founders and investors as they evaluate funding, valuation, investor readiness, and deal structure. We help prepare the financial and strategic material needed for clearer conversations. This is useful for startups seeking capital and investors reviewing opportunities.', ['Investor readiness and pitch support', 'Funding strategy and capital narrative', 'Basic valuation and deal input', 'Investor or startup diligence support'], 'We connect finance, strategy, and practical deal readiness so funding conversations are better prepared.', financialImage, Rocket),
      subService('personal-finance', 'Personal Finance', 'Plan wealth, savings, and investments around personal goals.', 'Personal finance consulting helps individuals organize financial goals, savings plans, investment choices, and risk considerations. We support clearer decision-making around short-term needs and long-term wealth-building. It is useful for clients who want structured guidance instead of scattered financial choices.', ['Financial goal mapping', 'Savings and investment planning', 'Risk and insurance review inputs', 'Periodic plan review structure'], 'We keep personal finance guidance clear, practical, and aligned to the client’s real priorities and risk comfort.', financialImage, BriefcaseBusiness),
      subService('portfolio-management', 'Portfolio Management', 'Manage investment portfolios around goals and risk appetite.', 'Portfolio management helps clients structure and review investments based on risk appetite, time horizon, and financial goals. We support allocation thinking, portfolio review, and performance visibility. The aim is to keep investment decisions disciplined rather than reactive to short-term noise.', ['Risk profile and goal alignment', 'Asset allocation review', 'Portfolio performance tracking', 'Rebalancing and review cadence'], 'We bring a disciplined review process that helps clients stay aligned to strategy while adapting to changing conditions.', financialImage, BarChart3),
      subService('financial-due-diligence', 'Financial Due Diligence', 'Assess financial health and risk before investment or acquisition decisions.', 'Financial due diligence helps buyers, investors, and leadership teams understand the financial reality behind a transaction or major decision. We review financial statements, earnings quality, risks, assumptions, and working capital considerations. This helps clients enter negotiations with clearer facts and fewer surprises.', ['Financial statement and trend review', 'Revenue, margin, and cost analysis', 'Risk and assumption validation', 'Deal findings and decision support'], 'We focus due diligence on decision-useful insight, translating financial analysis into clear implications for action.', financialImage, ShieldCheck),
    ],
    cta: 'Need expert guidance on your finances or investments? Reach out.',
    whoItsFor: [
      'Promoters preparing for institutional equity funding, venture rounds, or bank credit lines',
      'Business owners seeking disciplined capital allocation, working capital control, and tax readiness',
      'Buyers and investors requiring rigorous financial due diligence before M&A or equity infusion',
    ],
    keyBenefits: [
      { title: 'Working Capital Optimization', desc: 'Identify locked capital in debtor cycles and inventory to fund ongoing expansion without expensive credit.' },
      { title: 'Institutional Investor Readiness', desc: 'Stress-test unit economics, audited historical financials, and financial models to maximize deal valuation.' },
      { title: 'Disciplined Capital Allocation', desc: 'Balance CAPEX reinvestment, operating reserves, and cash dividends for long-term balance sheet stability.' },
      { title: 'Comprehensive Due Diligence', desc: 'Examine revenue quality, hidden liabilities, and asset integrity to protect commercial interests in deals.' },
    ],
    impactSnapshot: {
      metric: '₹28Cr+',
      metricLabel: 'Working Capital Unlocked',
      caseSnippet: 'Restructured cash-flow cycles and renegotiated vendor creditor terms for an industrial manufacturing group.',
      clientType: 'Manufacturing & Distribution Conglomerate',
    },
  },
  {
    slug: 'event-management',
    title: 'Event Management',
    shortDescription: 'Business events, sales programs, and distribution initiatives with measurable impact.',
    longDescription:
      'We manage events and field programs that combine disciplined planning with sales and distribution outcomes. Our event work is built to support visibility, engagement, and business follow-through.',
    image: eventImage,
    icon: Handshake,
    accent: 'accent-blue',
    heroTagline: 'Seamless Events, Strong Sales Impact',
    intro:
      'We manage business and promotional events with a focus on driving real sales outcomes, helping brands build distribution networks and train sales teams through impactful, well-organized events.',
    subServices: [
      subService(
        'sales-distribution-management',
        'Sales & Distribution Management',
        'Plan and manage sales and distribution-focused events and programs.',
        'Sales and distribution management brings event execution together with market expansion and sales capability. It is useful for brands that want events to generate stronger distributor relationships, better sales discipline, and clearer market reach. We plan programs around practical commercial outcomes, not attendance alone.',
        ['Sales and distribution program planning', 'Distributor engagement formats', 'Field team coordination', 'Sales outcome tracking and follow-up'],
        'We design events around business follow-through, helping every activity connect to market access, channel strength, or sales readiness.',
        eventProcessImage,
        Network,
        [
          {
            slug: 'distribution-channel-development',
            title: 'Distribution Channel Development',
            shortDescription: 'Strengthen distribution networks to expand market reach.',
            overview: 'Distribution channel development focuses on improving the quality, performance, and coverage of existing channel networks. It helps businesses identify gaps, strengthen partner relationships, and improve market reach. The work is especially valuable when growth is limited by weak coverage or inconsistent distributor performance.',
            includes: ['Channel performance review', 'Partner engagement planning', 'Coverage gap identification', 'Improvement roadmap'],
            whyUs: 'We combine field practicality with structured planning so channel improvement becomes executable.',
            icon: TrendingUp,
          },
          {
            slug: 'distribution-channel-creation',
            title: 'Distribution Channel Creation',
            shortDescription: 'Create new distribution channels from the ground up.',
            overview: 'Distribution channel creation helps businesses enter new markets or expand reach where no reliable channel currently exists. We support the structure, partner profile, onboarding approach, and rollout plan. This gives teams a clearer route to market before they commit resources.',
            includes: ['Channel model design', 'Partner profile definition', 'Onboarding and launch plan', 'Market entry coordination'],
            whyUs: 'We help channel creation stay grounded in commercial reality, reducing guesswork during expansion.',
            icon: Share2,
          },
          {
            slug: 'salesforce-training-development',
            title: 'Salesforce Training & Development',
            shortDescription: 'Upskill sales teams during events and campaigns.',
            overview: 'Salesforce training and development during events helps sales teams improve field execution while campaigns are active. We support practical coaching, pitch discipline, customer handling, and follow-up routines. This turns event energy into stronger selling behavior after the program ends.',
            includes: ['Field sales coaching', 'Pitch and objection handling practice', 'Campaign-specific training modules', 'Post-event follow-up discipline'],
            whyUs: 'We keep sales training close to real field situations, so teams can apply it immediately.',
            icon: Presentation,
          },
        ],
      ),
    ],
    cta: "Planning an event that needs to deliver real business results? Let's organize it together.",
    whoItsFor: [
      'Enterprises organizing annual dealer conferences, vendor summits, and distributor recognition meets',
      'Brands executing high-stakes multi-city product launches with media and trade attendees',
      'Organizations running regional salesforce rallies and commercial alignment bootcamps',
    ],
    keyBenefits: [
      { title: 'End-to-End Logistical Mastery', desc: 'Flawless venue scouting, stage production, AV technical management, and executive hospitality.' },
      { title: 'Commercial Trade Conversion', desc: 'Program design engineered to secure spot distributor bookings, sign channel partners, and boost orders.' },
      { title: 'Salesforce Momentum Rallies', desc: 'High-energy conventions that turn company strategy into motivated, measurable field execution.' },
      { title: 'Quantitative Event ROI Tracking', desc: 'Measure post-event order volume, attendee NPS, and distributor onboarding metrics rigorously.' },
    ],
    impactSnapshot: {
      metric: '100%',
      metricLabel: 'Dealer Turnout & ₹14Cr Spot Orders',
      caseSnippet: 'Organized a 2-day North India dealer conclave for a consumer durables manufacturer, exceeding booking targets.',
      clientType: 'Consumer Durables Manufacturer',
    },
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);

export const getSubServiceBySlug = (serviceSlug: string, subServiceSlug: string) => {
  const service = getServiceBySlug(serviceSlug);
  return service?.subServices.find((subService) => subService.slug === subServiceSlug);
};
