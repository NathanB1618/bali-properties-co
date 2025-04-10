
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface HeroSectionProps {
  onExploreProperties: () => void;
  onScrollToContent: () => void;
}

const HeroSection = ({ onExploreProperties, onScrollToContent }: HeroSectionProps) => {
  const { toast } = useToast();

  const handleDownloadGuide = () => {
    toast({
      title: "Investment Guide Download",
      description: "Your comprehensive Bali investment guide is being prepared. Check your email shortly.",
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/4150754f-a774-4138-9316-46c5c403f56e.png" 
          alt="Modern Bali Villa with Palm Trees" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
          Get Your Paradise in Bali<br />
          <span className="text-bali-gold">Earn While You're Away</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Exclusive investment opportunities for Australians seeking exceptional returns 
          and a luxury holiday home in Bali's most desirable locations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-bali-teal hover:bg-bali-orange text-white px-8 py-6 rounded-md text-lg"
            onClick={onExploreProperties}
          >
            Explore Properties
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 rounded-md text-lg"
            onClick={handleDownloadGuide}
          >
            <Download size={20} className="mr-2" />
            Get Investment Guide
          </Button>
        </div>
      </div>
      
      {/* Scroll down arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer" onClick={onScrollToContent}>
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 text-white/80">Scroll Down</span>
          <div className="w-12 h-12 rounded-full bg-bali-teal/80 flex items-center justify-center animate-bounce">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
