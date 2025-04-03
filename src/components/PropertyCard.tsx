
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BedDouble, 
  Bath, 
  CalendarDays, 
  DollarSign, 
  BarChart3, 
  ArrowRight, 
  MapPin, 
  Maximize 
} from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  landSize: number;
  expectedRent: string;
  annualROI: number;
  currency?: string;
}

const PropertyCard: FC<PropertyCardProps> = ({
  image,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  size,
  landSize,
  expectedRent,
  annualROI,
  currency = "AUD"
}) => {
  return (
    <div className="property-card bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
      <div className="relative h-[240px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-bali-deep/80 text-white py-1 px-3 rounded-full text-sm font-medium">
          {price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold font-poppins mb-2 text-bali-deep">{title}</h3>
        <div className="flex items-center mb-3 text-sm text-gray-600">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <BedDouble size={16} className="mr-2 text-bali-teal" />
            <span className="text-sm">{bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-2 text-bali-teal" />
            <span className="text-sm">{bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center">
            <Maximize size={16} className="mr-2 text-bali-teal" />
            <span className="text-sm">{size} m² Living</span>
          </div>
          <div className="flex items-center">
            <Home size={16} className="mr-2 text-bali-teal" />
            <span className="text-sm">{landSize} m² Land</span>
          </div>
        </div>
        
        <div className="border-t border-b py-3 my-3 grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-gray-500 mb-1">Expected Monthly Rental</div>
            <div className="flex items-center font-semibold text-bali-deep">
              <DollarSign size={16} className="mr-1 text-bali-gold" />
              {expectedRent}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Annual ROI</div>
            <div className="flex items-center font-semibold text-bali-deep">
              <BarChart3 size={16} className="mr-1 text-bali-gold" />
              {annualROI}%
            </div>
          </div>
        </div>
        
        <Button variant="ghost" className="mt-2 w-full justify-between text-bali-teal hover:text-bali-deep hover:bg-bali-sand">
          View Details
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
