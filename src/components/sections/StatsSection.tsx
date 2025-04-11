
import AnimatedCounter from '../AnimatedCounter';

const StatsSection = () => {
  return (
    <section id="stats" className="bg-[#264653] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center animated-element">
            <h3 className="text-4xl font-bold text-bali-deep mb-2">
              📈 <AnimatedCounter end={12.8} decimal={1} suffix="%" />
            </h3>
            <p className="text-gray-600">Average Annual ROI</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center animated-element">
            <h3 className="text-4xl font-bold text-bali-deep mb-2">
              🏠 <AnimatedCounter end={80} suffix="%" />
            </h3>
            <p className="text-gray-600">Average Occupancy Rate</p>
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
  );
};

export default StatsSection;
