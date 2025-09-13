
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const OurFacility = () => {
  return (
    <section className="py-20 fade-in-section opacity-0">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
            Applications
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-satruc-900">
            Trusted Across Industries
          </h2>
          <p className="mt-4 text-lg text-satruc-600">
            Our solutions power critical operations in diverse sectors around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <AspectRatio ratio={2/1}>
              <img 
                src="../assets/DandD.jpeg" 
                alt="Industrial manufacturing plant" 
                loading='lazy'
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-satruc-900">Design and Devlopment</h3>
              <p className="mt-2 text-sm text-satruc-600">Precise gas regulation for industrial manufacturing processes</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <AspectRatio ratio={2/1}>
              <img 
                src="../assets/CalibrationRoom.jpeg" 
                alt="Energy production facility" 
                loading='lazy'
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-satruc-900">Calibration</h3>
              <p className="mt-2 text-sm text-satruc-600">Reliable solutions for power generation and distribution</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <AspectRatio ratio={2/1}>
              <img 
                src="../assets/package.jpeg" 
                alt="Chemical processing facility" 
                loading='lazy'
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-satruc-900">Exports</h3>
              <p className="mt-2 text-sm text-satruc-600">Safety-focused gas regulation for chemical manufacturing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFacility;
