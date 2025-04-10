import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ROICalculator from '../components/ROICalculator';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import PropertiesSection from '../components/sections/PropertiesSection';
import InvestmentGuideSection from '../components/sections/InvestmentGuideSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import FooterSection from '../components/sections/FooterSection';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Don't unobserve - this keeps the element visible even when scrolling away
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated-element').forEach(element => {
      element.classList.add('animate-initial');
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animated-element').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContent = () => {
    const statsSection = document.getElementById('stats');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection 
        onExploreProperties={scrollToProperties} 
        onScrollToContent={scrollToContent} 
      />
      <StatsSection />
      <BenefitsSection />
      <PropertiesSection />
      <InvestmentGuideSection />
      <TestimonialsSection />
      <ROICalculator />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Index;
