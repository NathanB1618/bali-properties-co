
import TestimonialCard from '../TestimonialCard';

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
