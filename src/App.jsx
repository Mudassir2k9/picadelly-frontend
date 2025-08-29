import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudy from "./pages/CaseStudy";
import TalentOnDemand from "./pages/TalentOnDemand";
import TalentExecutive from "./pages/TalentExecutive";
import BlogDetail from "./pages/BlogDetail";
import Buzz from "./pages/Buzz";
import ContactUs from "./pages/ContactUs";
import NewsItem from "./pages/NewsItem";
import NewsLanding from "./pages/NewsLanding";
import Work from "./pages/Work";
import Legal from "./pages/Legal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieConsent from "./components/CookieConsent";


function App() {
  return (
    <Router>
      <Header />
      <CookieConsent /* policyHtml={policyFromStrapi} */ />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/talent-on-demand" element={<TalentOnDemand />} />
        <Route path="/talent-exective" element={<TalentExecutive />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/buzz" element={<Buzz />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/news-item/:id" element={<NewsItem />} />
        <Route path="/news-landing" element={<NewsLanding />} />
        <Route path="/work" element={<Work />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
