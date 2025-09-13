
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const TechnologyShowcase = () => {
  return (
    <section className="py-20 bg-satruc-950 text-white fade-in-section opacity-0">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block bg-satruc-accent-600/20 text-satruc-accent-400 text-xs font-medium px-3 py-1 rounded-full">
            Our Gallery
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-satruc-300">
            
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <AspectRatio ratio={16/9}>
              <img 
                src="photo1.jpg" 
                alt="Electric gas regulator internal components" 
                loading='lazy'
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <div className="mt-4">
              {/* <h3 className="text-xl font-semibold text-white">Precision Components</h3> */}
              {/* <p className="mt-2 text-satruc-300">High-tolerance machined parts ensure consistent performance even under extreme conditions</p> */}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <AspectRatio ratio={16/9}>
              <img 
                src="photo4.jpg" 
                alt="Control system interface"
                loading='lazy'
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <div className="mt-4">
              {/* <h3 className="text-xl font-semibold text-white">Smart Controls</h3> */}
              {/* <p className="mt-2 text-satruc-300">Advanced microprocessor systems with real-time monitoring and adaptive pressure regulation</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
