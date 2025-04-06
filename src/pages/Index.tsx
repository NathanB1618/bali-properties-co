import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PropertyCard from '../components/PropertyCard';
import InvestmentStep from '../components/InvestmentStep';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ContactForm from '../components/ContactForm';
import ROICalculator from '../components/ROICalculator';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  Map, 
  FileText, 
  Key, 
  Calculator, 
  Handshake, 
  Search, 
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ArrowDown
} from 'lucide-react';

const Index = () => {
  const { toast } = useToast();

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

  const handleDownloadGuide = () => {
    toast({
      title: "Investment Guide Download",
      description: "Your comprehensive Bali investment guide is being prepared. Check your email shortly.",
    });
  };

  return (
    <>
      <Navbar />
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/4150754f-a774-4138-9316-46c5c403f56e.png" 
            alt="Modern Bali Villa with Palm Trees" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
            Get Your Paradise in Bali<br />
            <span className="text-bali-gold">Earn While You're Away</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Exclusive investment opportunities for Australians seeking exceptional returns 
            and a luxury holiday home in Bali's most desirable locations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bali-teal hover:bg-bali-orange text-white px-8 py-6 rounded-md text-lg"
            >
              Explore Properties
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 rounded-md text-lg"
              onClick={handleDownloadGuide}
            >
              <Download size={20} className="mr-2" />
              Get Investment Guide
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#264653] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center animated-element">
              <h3 className="text-4xl font-bold text-bali-deep mb-2">
                📈 <AnimatedCounter end={14} suffix="%" />
              </h3>
              <p className="text-gray-600">Average ROI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center animated-element">
              <h3 className="text-4xl font-bold text-bali-deep mb-2">
                🏠 <AnimatedCounter end={82} suffix="%" />
              </h3>
              <p className="text-gray-600">Annual Occupancy Rate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center animated-element">
              <h3 className="text-4xl font-bold text-bali-deep mb-2">
                💸 <AnimatedCounter end={3} suffix="k+" prefix="$" />
              </h3>
              <p className="text-gray-600">Average Monthly Rental Income</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center animated-element">
              <h3 className="text-4xl font-bold text-bali-deep mb-2">
                ⏱️ <AnimatedCounter end={6.5} decimal={1} />
              </h3>
              <p className="text-gray-600">Years Average ROI Payback</p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="section-container">
        <div className="text-center mb-16 animated-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bali-deep font-poppins">
            Why Invest in Bali Real Estate?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart Australian investors are securing their slice of paradise with exceptional returns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ECECEC] p-8 rounded-xl shadow-md flex flex-col items-center text-center animated-element">
            <div className="bg-bali-sand p-4 rounded-full mb-6">
              <DollarSign size={36} className="text-bali-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-bali-deep">Strong Rental Yields</h3>
            <p className="text-gray-600">
              Capitalize on Bali's booming tourism market with rental yields of 8-14% annually, 
              significantly outperforming Australian property investments.
            </p>
          </div>
          
          <div className="bg-[#ECECEC] p-8 rounded-xl shadow-md flex flex-col items-center text-center animated-element">
            <div className="bg-bali-sand p-4 rounded-full mb-6">
              <Map size={36} className="text-bali-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-bali-deep">Personal Holiday Home</h3>
            <p className="text-gray-600">
              Enjoy your own luxury villa for vacations while generating rental income when you're not there. 
              The perfect blend of lifestyle and investment.
            </p>
          </div>
          
          <div className="bg-[#ECECEC] p-8 rounded-xl shadow-md flex flex-col items-center text-center animated-element">
            <div className="bg-bali-sand p-4 rounded-full mb-6">
              <Calculator size={36} className="text-bali-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-bali-deep">Capital Growth</h3>
            <p className="text-gray-600">
              Bali property values have consistently appreciated 15-20% annually in prime areas, 
              creating excellent long-term wealth building opportunities.
            </p>
          </div>
        </div>
      </section>

      <section id="properties" className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-16 animated-element">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bali-deep font-poppins">
              Featured Investment Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our hand-picked selection of high-performing Bali villas with private pools and strong rental potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animated-element">
              <PropertyCard 
                image="/lovable-uploads/da58e1e9-7b2b-49ba-99b3-28867ee509d6.png"
                title="Modern Minimalist Villa"
                price="$375,000 AUD"
                location="Berawa, Bali"
                bedrooms={2}
                bathrooms={2}
                size={120}
                landSize={200}
                expectedRent="$4,200/month"
                annualROI={14.3}
                poolSize="4m x 7m Private Pool"
              />
            </div>
            
            <div className="animated-element">
              <PropertyCard 
                image="/lovable-uploads/f5dabefd-f084-48c6-a00a-559e2031b4fe.png"
                title="Luxury A-Frame Glass Villa"
                price="$295,000 AUD"
                location="Ubud, Bali"
                bedrooms={2}
                bathrooms={2}
                size={120}
                landSize={250}
                expectedRent="$3,350/month"
                annualROI={13.7}
                poolSize="4m x 6m Private Pool"
              />
            </div>
            
            <div className="animated-element">
              <PropertyCard 
                image="/lovable-uploads/b8768f8c-d2bb-48de-b6f5-1a7e3da609bc.png"
                title="Contemporary Two-Story Villa"
                price="$258,000 AUD"
                location="Seminyak, Bali"
                bedrooms={3}
                bathrooms={2}
                size={140}
                landSize={280}
                expectedRent="$2,900/month"
                annualROI={13.4}
                poolSize="3m x 5m Plunge Pool"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-bali-teal text-bali-teal hover:bg-bali-teal hover:text-white"
            >
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      <section id="guide" className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="animated-element">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bali-deep font-poppins">
                Your Simple Path to Bali Property Investment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We've simplified the process of investing in Bali real estate for Australian investors.
                Our team handles all the details so you can enjoy the benefits without the hassle.
              </p>
              <div className="space-y-6">
                <InvestmentStep 
                  number={1}
                  title="Free Consultation"
                  description="Schedule a call with our investment specialists to discuss your goals and requirements."
                  icon={<Search size={20} />}
                />
                
                <InvestmentStep 
                  number={2}
                  title="Property Selection"
                  description="Based on your criteria, we'll present you with high-performing investment options."
                  icon={<FileText size={20} />}
                />
                
                <InvestmentStep 
                  number={3}
                  title="Secure Purchase"
                  description="Our legal team ensures a smooth transaction with all necessary documentation handled for you."
                  icon={<Handshake size={20} />}
                />
                
                <InvestmentStep 
                  number={4}
                  title="Full Management"
                  description="We take care of everything from rental management to maintenance, maximizing your returns."
                  icon={<Key size={20} />}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8 animated-element">
            <div className="bg-[#1e3a8a] rounded-xl p-6 md:p-8 text-white guide-highlight">
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-2 font-poppins flex items-center">
                  <span className="mr-2">Free Investment Guide</span>
                </h3>
                <div className="absolute -top-2 -right-2">
                  <div className="bg-amber-500 rounded-full p-1 animate-bounce">
                    <ArrowDown className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <p className="mb-6">
                Download our comprehensive guide on investing in Bali real estate. Includes:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Legal aspects of foreign ownership in Bali</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Detailed ROI calculations and case studies</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Best locations for maximum rental yields</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Tax implications for Australian investors</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-bali-gold hover:bg-bali-orange text-bali-deep font-medium relative group"
                onClick={handleDownloadGuide}
              >
                <span className="absolute -right-1 -top-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full group-hover:scale-110 transition-transform">
                  Free!
                </span>
                <Download size={18} className="mr-2" />
                Download Investment Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-bali-sand testimonial-section">
        <div className="section-container">
          <div className="text-center mb-10 animated-element">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-bali-deep font-poppins">
              What Our Australian Investors Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from fellow Australians who have already taken the leap into Bali property investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animated-element">
              <TestimonialCard 
                name="Sarah Mitchell"
                location="Sydney, Australia"
                quote="Investing in our Seminyak villa was the best decision we've made. It pays for itself with rental income and gives us an amazing place to holiday. The team made the process seamless."
                rating={5}
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              />
            </div>
            
            <div className="animated-element">
              <TestimonialCard 
                name="James & Emma Wilson"
                location="Melbourne, Australia"
                quote="We were skeptical about investing abroad, but the returns have been incredible compared to our Australian properties. The rental management service handles everything while we're back home."
                rating={5}
                image="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              />
            </div>
            
            <div className="animated-element">
              <TestimonialCard 
                name="David Thompson"
                location="Perth, Australia"
                quote="The rental yields on my Canggu villa have consistently exceeded 12% annually. I'm now looking to purchase my second property through Bali Dream Investments."
                rating={5}
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      <ROICalculator />

      <section id="contact" className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animated-element">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bali-deep font-poppins">
              Ready to Start Your Bali Investment Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your free consultation with our investment specialists to discover the perfect Bali property opportunity.
            </p>
            <div className="bg-bali-sand rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-bali-deep">Why Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>10+ years experience in Bali real estate</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Australian-owned and operated company</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Comprehensive management services</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>Strong network of legal and property experts</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#ECECEC] rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-lg mb-4 text-bali-deep">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone size={18} className="text-bali-teal mr-3" />
                  <span>+61 419 861 399</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="text-bali-teal mr-3" />
                  <span>benbickford@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="text-bali-teal mr-3" />
                  <span>Melbourne, Victoria, Australia</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animated-element">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-bali-deep text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins">Bali<span className="text-bali-gold">Properties</span>.co</h3>
              <p className="text-white/70 mb-4">
                Australian-owned company specializing in Bali real estate investments with exceptional returns.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">About Us</a></li>
                <li><a href="#properties" className="text-white/70 hover:text-bali-gold transition-colors">Properties</a></li>
                <li><a href="#guide" className="text-white/70 hover:text-bali-gold transition-colors">Investment Guide</a></li>
                <li><a href="#testimonials" className="text-white/70 hover:text-bali-gold transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">Market Reports</a></li>
                <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">Legal Guide</a></li>
                <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-white/70 mb-4">
                Stay updated with new properties and investment opportunities.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 focus:outline-none flex-1"
                />
                <Button className="bg-bali-gold hover:bg-bali-orange text-bali-deep rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2023 BaliProperties.co. All rights reserved. ABN: 12 345 678 901
            </p>
            <div className="flex mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white mx-2">Privacy Policy</a>
              <span className="text-white/60 mx-2">|</span>
              <a href="#" className="text-white/60 hover:text-white mx-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
