
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      
      const progressRatio = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressRatio * end);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }
      
      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      startTimeRef.current = null;
    };
  }, [inView, end, duration]);
  
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export default AnimatedCounter;
