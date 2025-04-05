
import { FC } from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  location,
  quote,
  rating,
  image
}) => {
  return (
    <div className="bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-2">
        <img 
          src={image} 
          alt={name} 
          className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-bali-teal"
        />
        <div>
          <h4 className="font-poppins font-medium text-bali-deep">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      <div className="flex mb-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={12} 
            className={`${i < rating ? 'text-bali-gold fill-bali-gold' : 'text-gray-300'} mr-1`}
          />
        ))}
      </div>
      <blockquote className="text-gray-600 italic text-sm">{quote}</blockquote>
    </div>
  );
};

export default TestimonialCard;
