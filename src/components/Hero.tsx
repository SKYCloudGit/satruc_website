import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import './Hero.css';


const imageList = [
  '../../public/Images/test.jpg',
  '../../public/Images/view1.jpg',
  '../../public/Images/view2.jpg',
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Background slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      const items = heroRef.current.querySelectorAll('.parallax-item');
      items.forEach((item) => {
        const speed = parseFloat((item as HTMLElement).dataset.speed || '0');
        const offsetX = (x - 0.5) * speed;
        const offsetY = (y - 0.5) * speed;
        (item as HTMLElement).style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black text-white"
    >
      {/* Sliding Background */}
   {/* Background Rendering */}
<div className="absolute inset-0 z-0">
  {imageList.map((src, index) => (
    currentImage === index ? (
      <div
        key={index}
        className={cn(
          'absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out',
          currentImage === 0
            ? 'bg-gradient-radial from-black/80 via-black/90 to-black backdrop-blur-md'
            : ''
        )}
        style={currentImage === 0 ? {} : { backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
    ) : null
  ))}
</div>


      {/* Parallax Bubbles */}
      <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
        <div
          className="parallax-item absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-satruc-accent-200 blur-3xl opacity-30"
          data-speed="15"
        ></div>
        <div
          className="parallax-item absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full bg-satruc-accent-100 blur-3xl opacity-30"
          data-speed="20"
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-4xl text-center px-6">
        <span className="inline-block mb-4 bg-white px-4 py-1 rounded-full text-sm font-semibold text-satruc-accent-600 backdrop-blur-md">
          • Precision Engineering
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Your Trusted Partner in
          <span className="block text-satruc-accent-400">Precision Electronics Manufacturing</span>
          for Industrial & Consumer Applications
        </h1>
        <p className="text-lg mt-6 text-white/90 max-w-2xl mx-auto">
          Satruc Appliances delivers precision, quality, and custom solutions from prototype to production. Partner with us—where your vision becomes a manufactured reality.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-lg transition-all duration-300"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
