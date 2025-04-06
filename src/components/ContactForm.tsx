
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, User, MapPin, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Consultation Request Received",
      description: "One of our investment specialists will contact you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      budget: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-rich-blue rounded-xl shadow-lg p-6 md:p-8 text-white">
      <h3 className="text-2xl font-poppins font-semibold text-white mb-6">Request Free Consultation</h3>
      
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-teal text-gray-800"
          />
        </div>
        
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-teal text-gray-800"
          />
        </div>
        
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-teal text-gray-800"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="location"
              placeholder="Your City in Australia"
              value={formData.location}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-teal text-gray-800"
            />
          </div>
          
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-teal appearance-none text-gray-800"
            >
              <option value="">Investment Budget</option>
              <option value="$100k-$200k">$100k - $200k</option>
              <option value="$200k-$350k">$200k - $350k</option>
              <option value="$350k-$500k">$350k - $500k</option>
              <option value="$500k+">$500k+</option>
            </select>
          </div>
        </div>
        
        <textarea
          name="message"
          placeholder="Tell us about your investment goals..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-teal text-gray-800"
        />
        
        <Button 
          type="submit" 
          className="w-full bg-[#f59e0b] hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Get My Free Consultation
        </Button>
        
        <p className="text-xs text-gray-300 text-center mt-3">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
