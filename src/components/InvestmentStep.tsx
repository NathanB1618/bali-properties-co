
import { FC, ReactNode } from 'react';

interface InvestmentStepProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const InvestmentStep: FC<InvestmentStepProps> = ({
  number,
  title,
  description,
  icon
}) => {
  return (
    <div className="flex items-start bg-[#808080] text-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="bg-bali-gold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-5">
        <span className="text-bali-deep text-xl font-bold">{number}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <span className="mr-2 text-white">{icon}</span>
          <h3 className="font-poppins font-medium text-lg text-white">{title}</h3>
        </div>
        <p className="text-white/90">{description}</p>
      </div>
    </div>
  );
};

export default InvestmentStep;
