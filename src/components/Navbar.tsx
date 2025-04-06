
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className={`text-2xl font-bold font-poppins ${isScrolled ? 'text-bali-deep' : 'text-white'}`}>
              Bali<span className="text-bali-gold">Properties</span>.co
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#benefits" className={`font-medium hover:text-bali-teal transition-colors ${isScrolled ? 'text-bali-deep' : 'text-white'}`}>
            Benefits
          </a>
          <a href="#properties" className={`font-medium hover:text-bali-teal transition-colors ${isScrolled ? 'text-bali-deep' : 'text-white'}`}>
            Properties
          </a>
          <a href="#guide" className={`font-medium hover:text-bali-teal transition-colors ${isScrolled ? 'text-bali-deep' : 'text-white'}`}>
            Investment Guide
          </a>
          <a href="#testimonials" className={`font-medium hover:text-bali-teal transition-colors ${isScrolled ? 'text-bali-deep' : 'text-white'}`}>
            Testimonials
          </a>
          <Button className="bg-[#0d9488] hover:bg-teal-700 text-white rounded-md">
            Get Free Consultation
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-bali-deep' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-bali-deep' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#benefits" 
              className="font-medium text-bali-deep hover:text-bali-teal"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#properties" 
              className="font-medium text-bali-deep hover:text-bali-teal"
              onClick={() => setMobileMenuOpen(false)}
            >
              Properties
            </a>
            <a 
              href="#guide" 
              className="font-medium text-bali-deep hover:text-bali-teal"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investment Guide
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-bali-deep hover:text-bali-teal"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="bg-[#0d9488] hover:bg-teal-700 text-white w-full">
              Get Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
