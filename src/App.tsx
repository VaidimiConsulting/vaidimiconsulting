import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";

import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import BlogPostDetail from "@/pages/BlogPostDetail";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

// Services
import ServicesListing from "@/pages/services/ServicesListing";
import MarketingConsulting from "@/pages/services/MarketingConsulting";
import ITConsulting from "@/pages/services/ITConsulting";
import PromotionAdvertisement from "@/pages/services/PromotionAdvertisement";
import HRConsulting from "@/pages/services/HRConsulting";
import FinancialConsulting from "@/pages/services/FinancialConsulting";
import EventManagement from "@/pages/services/EventManagement";
import SubServiceDetail from "@/pages/services/SubServiceDetail";

// Marketing Consulting Sub-Services
import BrandCreation from "@/pages/marketing-consulting/BrandCreation";
import BrandDevelopment from "@/pages/marketing-consulting/BrandDevelopment";
import MarketingCommunication from "@/pages/marketing-consulting/MarketingCommunication";
import StrategicMarketing from "@/pages/marketing-consulting/StrategicMarketing";
import DigitalMarketing from "@/pages/marketing-consulting/DigitalMarketing";

// Sectors
import SectorListing from "@/pages/sector/SectorListing";
import Manufacturing from "@/pages/sector/Manufacturing";
import ServicesSector from "@/pages/sector/ServicesSector";
import Msme from "@/pages/sector/Msme";
import Sme from "@/pages/sector/Sme";
import Agribusiness from "@/pages/sector/Agribusiness";
import Logistics from "@/pages/sector/Logistics";
import FinancialServices from "@/pages/sector/FinancialServices";
import Retail from "@/pages/sector/Retail";

// Insights
import InsightsListing from "@/pages/insights/InsightsListing";
import LatestArticles from "@/pages/insights/LatestArticles";
import ResearchReports from "@/pages/insights/ResearchReports";
import Whitepapers from "@/pages/insights/Whitepapers";
import CaseStudies from "@/pages/insights/CaseStudies";
import WebinarsEvents from "@/pages/insights/WebinarsEvents";
import Podcasts from "@/pages/insights/Podcasts";

// Who We Are
import OurStory from "@/pages/who-we-are/OurStory";
import LeadershipTeam from "@/pages/who-we-are/LeadershipTeam";
import MissionValues from "@/pages/who-we-are/MissionValues";
import Newsroom from "@/pages/who-we-are/Newsroom";
import CorporateResponsibility from "@/pages/who-we-are/CorporateResponsibility";

// What We Do
import WhatWeDoListing from "@/pages/what-we-do/WhatWeDoListing";
import StrategyGrowth from "@/pages/what-we-do/StrategyGrowth";
import DigitalTransformation from "@/pages/what-we-do/DigitalTransformation";
import BusinessUnits from "@/pages/what-we-do/BusinessUnits";
import IndustrySolutions from "@/pages/what-we-do/IndustrySolutions";
import ConsultingPractices from "@/pages/what-we-do/ConsultingPractices";
import GlobalPresence from "@/pages/what-we-do/GlobalPresence";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* =========================================
              MAIN
          ========================================= */}

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />


          {/* =========================================
              SERVICES
          ========================================= */}

          <Route
            path="/services"
            element={<ServicesListing />}
          />

          <Route
            path="/services/marketing-consulting"
            element={<MarketingConsulting />}
          />

          <Route
            path="/services/it-consulting"
            element={<ITConsulting />}
          />

          <Route
            path="/services/promotion-advertisement"
            element={<PromotionAdvertisement />}
          />

          <Route
            path="/services/promotion-and-advertisement"
            element={<PromotionAdvertisement />}
          />

          <Route
            path="/services/hr-consulting"
            element={<HRConsulting />}
          />

          <Route
            path="/services/financial-consulting"
            element={<FinancialConsulting />}
          />

          <Route
            path="/services/event-management"
            element={<EventManagement />}
          />

          <Route
            path="/services/:serviceSlug/:subServiceSlug"
            element={<SubServiceDetail />}
          />

          {/* =========================================
              MARKETING CONSULTING SUB-SERVICES
          ========================================= */}

          <Route path="/marketing-consulting/brand-creation" element={<BrandCreation />} />
          <Route path="/marketing-consulting/brand-development" element={<BrandDevelopment />} />
          <Route path="/marketing-consulting/marketing-communication" element={<MarketingCommunication />} />
          <Route path="/marketing-consulting/strategic-marketing" element={<StrategicMarketing />} />
          <Route path="/marketing-consulting/digital-marketing" element={<DigitalMarketing />} />

          {/* Aliases for links from /services/marketing-consulting/... */}
          <Route path="/services/marketing-consulting/brand-creation" element={<BrandCreation />} />
          <Route path="/services/marketing-consulting/brand-development" element={<BrandDevelopment />} />
          <Route path="/services/marketing-consulting/marketing-communication-design-development" element={<MarketingCommunication />} />
          <Route path="/services/marketing-consulting/strategic-marketing" element={<StrategicMarketing />} />
          <Route path="/services/marketing-consulting/digital-marketing" element={<DigitalMarketing />} />


          {/* =========================================
              SECTORS
          ========================================= */}

          <Route
            path="/sector"
            element={<SectorListing />}
          />

          <Route
            path="/sectors"
            element={<SectorListing />}
          />

          <Route
            path="/sector/manufacturing"
            element={<Manufacturing />}
          />

          <Route
            path="/sectors/manufacturing"
            element={<Manufacturing />}
          />

          <Route
            path="/sector/services"
            element={<ServicesSector />}
          />

          <Route
            path="/sectors/services"
            element={<ServicesSector />}
          />

          <Route
            path="/sector/msme"
            element={<Msme />}
          />

          <Route
            path="/sector/sme"
            element={<Sme />}
          />

          <Route
            path="/sector/agribusiness"
            element={<Agribusiness />}
          />

          <Route
            path="/sector/logistics"
            element={<Logistics />}
          />

          <Route
            path="/sector/financial-services"
            element={<FinancialServices />}
          />

          <Route
            path="/sector/retail"
            element={<Retail />}
          />


          {/* =========================================
              INSIGHTS
          ========================================= */}

          <Route
            path="/insights"
            element={<InsightsListing />}
          />

          <Route
            path="/insights/latest-articles"
            element={<LatestArticles />}
          />

          <Route
            path="/insights/research-reports"
            element={<ResearchReports />}
          />

          <Route
            path="/insights/whitepapers"
            element={<Whitepapers />}
          />

          <Route
            path="/insights/case-studies"
            element={<CaseStudies />}
          />

          <Route
            path="/insights/webinars-events"
            element={<WebinarsEvents />}
          />

          <Route
            path="/insights/podcasts"
            element={<Podcasts />}
          />


          {/* =========================================
              WHO WE ARE
          ========================================= */}

          <Route
            path="/who-we-are"
            element={<OurStory />}
          />

          <Route
            path="/who-we-are/leadership-team"
            element={<LeadershipTeam />}
          />

          {/* IMPORTANT:
              Mission & Values
              URL = /who-we-are/mission-values
          */}

          <Route
            path="/who-we-are/mission-values"
            element={<MissionValues />}
          />

          <Route
            path="/who-we-are/newsroom"
            element={<Newsroom />}
          />

          <Route
            path="/who-we-are/corporate-responsibility"
            element={<CorporateResponsibility />}
          />


          {/* =========================================
              WHAT WE DO
          ========================================= */}

          <Route
            path="/what-we-do"
            element={<WhatWeDoListing />}
          />

          <Route
            path="/what-we-do/strategy-growth"
            element={<StrategyGrowth />}
          />

          <Route
            path="/what-we-do/digital-transformation"
            element={<DigitalTransformation />}
          />

          <Route
            path="/what-we-do/business-units"
            element={<BusinessUnits />}
          />

          <Route
            path="/what-we-do/industry-solutions"
            element={<IndustrySolutions />}
          />

          <Route
            path="/what-we-do/consulting-practices"
            element={<ConsultingPractices />}
          />

          <Route
            path="/what-we-do/global-presence"
            element={<GlobalPresence />}
          />


          {/* =========================================
              404
          ========================================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}