
import { Button } from '@/components/ui/button';

const FooterSection = () => {
  return (
    <footer className="bg-bali-deep text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2 font-poppins">Bali<span className="text-bali-gold">Properties</span>.co</h3>
            <p className="text-white/70 mb-2">
              Australian-owned company specializing in Bali real estate investments with exceptional returns.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">About Us</a></li>
              <li><a href="#properties" className="text-white/70 hover:text-bali-gold transition-colors">Properties</a></li>
              <li><a href="#guide" className="text-white/70 hover:text-bali-gold transition-colors">Investment Guide</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-bali-gold transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">Market Reports</a></li>
              <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">ROI Calculator</a></li>
              <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">Legal Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-bali-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <p className="text-white/70 mb-2">
              Stay updated with new properties and investment opportunities.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-l-md px-3 py-1 focus:outline-none flex-1"
              />
              <Button className="bg-bali-gold hover:bg-bali-orange text-bali-deep rounded-l-none py-1 px-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2023 BaliProperties.co. All rights reserved. ABN: 12 345 678 901
          </p>
          <div className="flex mt-2 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm mx-2">Privacy Policy</a>
            <span className="text-white/60 mx-2">|</span>
            <a href="#" className="text-white/60 hover:text-white text-sm mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
