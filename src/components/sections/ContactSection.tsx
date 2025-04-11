
import ContactForm from '../ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animated-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bali-deep font-poppins">
            Ready to Start Your Bali Investment Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule your free consultation with our investment specialists to discover the perfect Bali property opportunity.
          </p>
          <div className="bg-bali-sand rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-bali-deep">Why Choose Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span>Professionally experienced in Bali real estate</span>
              </li>
              <li className="flex items-start">
                <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span>Australian-owned and operated company</span>
              </li>
              <li className="flex items-start">
                <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span>Comprehensive management services</span>
              </li>
              <li className="flex items-start">
                <span className="bg-bali-teal rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span>Strong network of legal and property experts</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#ECECEC] rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-lg mb-4 text-bali-deep">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="text-bali-teal mr-3" />
                <span className="font-bold">+61 419 861 399</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-bali-teal mr-3" />
                <span className="font-bold">benbickford@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="text-bali-teal mr-3" />
                <span className="font-bold">Melbourne, Victoria, Australia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animated-element">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
