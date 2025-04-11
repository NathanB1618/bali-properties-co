
import { DollarSign, Map, Calculator } from 'lucide-react';

const BenefitsSection = () => {
  return (
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
            Bali property values have consistently appreciated 10-15% annually in prime areas, 
            creating excellent long-term wealth building opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
