
import PropertyCard from '../PropertyCard';
import { Button } from '@/components/ui/button';

const PropertiesSection = () => {
  return (
    <section id="properties" className="bg-gray-50 py-12 md:py-16">
      <div className="section-container">
        <div className="text-center mb-12 animated-element">
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
  );
};

export default PropertiesSection;
