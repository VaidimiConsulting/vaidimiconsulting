import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Careers from '@/pages/Careers';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';

import ServicesListing from '@/pages/services/ServicesListing';
import MarketingConsulting from '@/pages/services/MarketingConsulting';
import ITConsulting from '@/pages/services/ITConsulting';
import PromotionAdvertisement from '@/pages/services/PromotionAdvertisement';
import HRConsulting from '@/pages/services/HRConsulting';
import FinancialConsulting from '@/pages/services/FinancialConsulting';
import EventManagement from '@/pages/services/EventManagement';
import SubServiceDetail from '@/pages/services/SubServiceDetail';

import SectorListing from '@/pages/sector/SectorListing';
import Msme from '@/pages/sector/Msme';
import Sme from '@/pages/sector/Sme';
import Agribusiness from '@/pages/sector/Agribusiness';
import Logistics from '@/pages/sector/Logistics';
import FinancialServices from '@/pages/sector/FinancialServices';
import Retail from '@/pages/sector/Retail';

import InsightsListing from '@/pages/insights/InsightsListing';
import LatestArticles from '@/pages/insights/LatestArticles';
import ResearchReports from '@/pages/insights/ResearchReports';
import Whitepapers from '@/pages/insights/Whitepapers';
import CaseStudies from '@/pages/insights/CaseStudies';
import WebinarsEvents from '@/pages/insights/WebinarsEvents';
import Podcasts from '@/pages/insights/Podcasts';

import OurStory from '@/pages/who-we-are/OurStory';
import LeadershipTeam from '@/pages/who-we-are/LeadershipTeam';
import MissionValues from '@/pages/who-we-are/MissionValues';
import Newsroom from '@/pages/who-we-are/Newsroom';
import CorporateResponsibility from '@/pages/who-we-are/CorporateResponsibility';

import WhatWeDoListing from '@/pages/what-we-do/WhatWeDoListing';
import StrategyGrowth from '@/pages/what-we-do/StrategyGrowth';
import DigitalTransformation from '@/pages/what-we-do/DigitalTransformation';
import BusinessUnits from '@/pages/what-we-do/BusinessUnits';
import IndustrySolutions from '@/pages/what-we-do/IndustrySolutions';
import ConsultingPractices from '@/pages/what-we-do/ConsultingPractices';
import GlobalPresence from '@/pages/what-we-do/GlobalPresence';

// Every route is wrapped in <Layout>, so Navbar + Footer are automatic on every page.
// To add a new page later: create the file in src/pages/..., import it here, add a <Route> below.

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Services */}
          <Route path="/services" element={<ServicesListing />} />
          <Route path="/services/marketing-consulting" element={<MarketingConsulting />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/promotion-advertisement" element={<PromotionAdvertisement />} />
          <Route path="/services/hr-consulting" element={<HRConsulting />} />
          <Route path="/services/financial-consulting" element={<FinancialConsulting />} />
          <Route path="/services/event-management" element={<EventManagement />} />
          <Route path="/services/:serviceSlug/:subServiceSlug" element={<SubServiceDetail />} />

          {/* Sector */}
          <Route path="/sector" element={<SectorListing />} />
          <Route path="/sector/msme" element={<Msme />} />
          <Route path="/sector/sme" element={<Sme />} />
          <Route path="/sector/agribusiness" element={<Agribusiness />} />
          <Route path="/sector/logistics" element={<Logistics />} />
          <Route path="/sector/financial-services" element={<FinancialServices />} />
          <Route path="/sector/retail" element={<Retail />} />

          {/* Insights */}
          <Route path="/insights" element={<InsightsListing />} />
          <Route path="/insights/latest-articles" element={<LatestArticles />} />
          <Route path="/insights/research-reports" element={<ResearchReports />} />
          <Route path="/insights/whitepapers" element={<Whitepapers />} />
          <Route path="/insights/case-studies" element={<CaseStudies />} />
          <Route path="/insights/webinars-events" element={<WebinarsEvents />} />
          <Route path="/insights/podcasts" element={<Podcasts />} />

          {/* Who We Are */}
          <Route path="/who-we-are" element={<OurStory />} />
          <Route path="/who-we-are/leadership-team" element={<LeadershipTeam />} />
          <Route path="/who-we-are/mission-values" element={<MissionValues />} />
          <Route path="/who-we-are/newsroom" element={<Newsroom />} />
          <Route path="/who-we-are/corporate-responsibility" element={<CorporateResponsibility />} />

          {/* What We Do */}
          <Route path="/what-we-do" element={<WhatWeDoListing />} />
          <Route path="/what-we-do/strategy-growth" element={<StrategyGrowth />} />
          <Route path="/what-we-do/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/what-we-do/business-units" element={<BusinessUnits />} />
          <Route path="/what-we-do/industry-solutions" element={<IndustrySolutions />} />
          <Route path="/what-we-do/consulting-practices" element={<ConsultingPractices />} />
          <Route path="/what-we-do/global-presence" element={<GlobalPresence />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
