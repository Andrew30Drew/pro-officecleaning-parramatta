import Herosection from './components/Herosection';
import About from './components/About';
import Ourservices from './components/Ourservices';
import Benefits from './components/Benifits';
import HowItWorks from './components/Howitwork';
import WhyChooseUs from './components/Whychooseus';
import { Perfect } from './components/Perfect';
import { Count } from './components/Count';
import { Exellence } from './components/Exellence';
import { Whywe } from './components/Whywe';
import { Whatwedo } from './components/Whatwedo';
import Contactform from './components/contactus/Contactform';
import Feedback from './components/Feedback';
import ServiceLocations from './components/ServiceLocations';
import StructuredData from './components/StructuredData';
import TrustBadges from './components/TrustBadges';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <StructuredData type="homepage" />

      {/* Hero Section */}
      <Herosection />

      {/* Trust Badges — Certifications & E-E-A-T signals */}
      <TrustBadges />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Ourservices bg_color="bg-slate-50" />

      {/* Value Propositions */}
      <Benefits />
      <WhyChooseUs />
      <Perfect />
      <Exellence />
      <Whywe />

      {/* Process & Stats */}
      <HowItWorks bg_color="bg-white" card_color="bg-slate-50" />
      <Count />
      <Whatwedo />

      {/* Contact & Testimonials */}
      <Contactform />
      <Feedback />

      {/* Location Services */}
      <ServiceLocations />
    </main>
  );
}
