
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ImageGallery = () => {
  return (
    <section className="py-16 bg-satruc-50 overflow-hidden fade-in-section opacity-0">
      <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
            Superior Engineering Facility
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-satruc-900">
            Our Facility
          </h2>
          <p className="mt-4 text-lg text-satruc-600">
            Our electric gas regulators combine advanced technology for unmatched performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-md">
            <AspectRatio ratio={4/3}>
              <img 
                src="/calibration.jpeg" 
                alt="calibration room for testing" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
               <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 text-sm font-medium rounded">
      EOL
    </div>
            </AspectRatio>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <AspectRatio ratio={4/3}>
              <img 
                src="/calibration1.jpeg" 
                alt="calibaration room1" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
               <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 text-sm font-medium rounded">
      Calibration Testing
    </div>
            </AspectRatio>
           
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <AspectRatio ratio={4/3}>
              <img 
                src="/automachine.jpeg" 
                alt="automachine rig" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
               <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 text-sm font-medium rounded">
      Automation Rig
    </div>
            </AspectRatio>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <AspectRatio ratio={4/3}>
              <img 
                src="/printers.jpeg" 
                alt="Printers" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 text-sm font-medium rounded">
      3D Printer ,  Wash Machine
    </div>
            </AspectRatio>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <AspectRatio ratio={4/3}>
              <img 
                src="/regulators.jpeg" 
                alt="Gas regulators" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 text-sm font-medium rounded">
      Regulators
    </div>
            </AspectRatio>
            
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <AspectRatio ratio={4/3}>
              <img 
                src="/gasbody.jpeg" 
                alt="Gas body table" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 text-sm font-medium rounded">
      Gas Body Calibration Table
    </div>
            </AspectRatio>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
