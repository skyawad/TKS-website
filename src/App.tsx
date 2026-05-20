import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteLoader } from "./components/SiteLoader";
import { LanguageProvider } from "./i18n/LanguageContext";
import { AboutCareers } from "./pages/AboutCareers";
import { AboutCompany } from "./pages/AboutCompany";
import { AboutCustomerStories } from "./pages/AboutCustomerStories";
import { AboutFAQs } from "./pages/AboutFAQs";
import { AboutPartnerships } from "./pages/AboutPartnerships";
import { Contact } from "./pages/Contact";
import { EnterpriseAIDetailRoute } from "./pages/EnterpriseAIDetail";
import { EnterpriseAIIndex } from "./pages/EnterpriseAIIndex";
import { Home } from "./pages/Home";
import { IndustriesIndex } from "./pages/IndustriesIndex";
import { IndustryDetailRoute } from "./pages/IndustryDetail";
import { NotFound } from "./pages/NotFound";
import { PlatformDetailRoute } from "./pages/PlatformDetail";
import { PlatformsIndex } from "./pages/PlatformsIndex";
import { ServiceDetailRoute } from "./pages/ServiceDetail";
import { ServicesIndex } from "./pages/ServicesIndex";

function SiteRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/:slug" element={<ServiceDetailRoute />} />

        <Route path="/enterprise-ai" element={<EnterpriseAIIndex />} />
        <Route path="/enterprise-ai/:slug" element={<EnterpriseAIDetailRoute />} />

        <Route path="/platforms" element={<PlatformsIndex />} />
        <Route path="/platforms/:slug" element={<PlatformDetailRoute />} />

        <Route path="/industries" element={<IndustriesIndex />} />
        <Route path="/industries/:slug" element={<IndustryDetailRoute />} />

        <Route path="/about" element={<AboutCompany />} />
        <Route path="/about/partnerships" element={<AboutPartnerships />} />
        <Route path="/about/careers" element={<AboutCareers />} />
        <Route path="/about/faqs" element={<AboutFAQs />} />
        <Route path="/about/customer-stories" element={<AboutCustomerStories />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLoader />
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          {/* Arabic mirror — same page tree under /ar */}
          <Route path="/ar" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="services" element={<ServicesIndex />} />
            <Route path="services/:slug" element={<ServiceDetailRoute />} />

            <Route path="enterprise-ai" element={<EnterpriseAIIndex />} />
            <Route path="enterprise-ai/:slug" element={<EnterpriseAIDetailRoute />} />

            <Route path="platforms" element={<PlatformsIndex />} />
            <Route path="platforms/:slug" element={<PlatformDetailRoute />} />

            <Route path="industries" element={<IndustriesIndex />} />
            <Route path="industries/:slug" element={<IndustryDetailRoute />} />

            <Route path="about" element={<AboutCompany />} />
            <Route path="about/partnerships" element={<AboutPartnerships />} />
            <Route path="about/careers" element={<AboutCareers />} />
            <Route path="about/faqs" element={<AboutFAQs />} />
            <Route path="about/customer-stories" element={<AboutCustomerStories />} />

            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* English (default) */}
          <Route path="/*" element={<SiteRoutes />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
