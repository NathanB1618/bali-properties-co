
import { Button } from '@/components/ui/button';
import { Download, Search, FileText, Handshake, Key, ArrowDown } from 'lucide-react';
import InvestmentStep from '../InvestmentStep';
import { useToast } from '@/components/ui/use-toast';

const InvestmentGuideSection = () => {
  const { toast } = useToast();

  const handleDownloadGuide = () => {
    toast({
      title: "Investment Guide Download",
      description: "Your comprehensive Bali investment guide is being prepared. Check your email shortly.",
    });
  };

  return (
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
          <div className="bg-bali-deep rounded-xl p-6 md:p-8 text-white guide-highlight">
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
              className="w-full bg-bali-gold hover:bg-bali-orange text-bali-deep font-medium relative group py-6 text-lg"
              onClick={handleDownloadGuide}
            >
              <span className="absolute -right-1 -top-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full group-hover:scale-110 transition-transform">
                Free!
              </span>
              <Download size={24} className="mr-2" />
              Download Investment Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentGuideSection;
