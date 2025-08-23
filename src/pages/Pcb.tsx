import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, Users, ShieldCheck, Lightbulb, Award, 
  BarChart, Factory, Briefcase, GraduationCap, ChevronRight,
  Microscope, CheckCircle, Shield, ArrowRight
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import bgImage from "../../public/pcb.jpg";
import { useInView } from 'react-intersection-observer';
import Image1 from "../../public/pcb1.jpg";
import Image2 from "../../public/pcb2.jpg";
import FeatureGrid from '@/components/FeaturesGrid';




export default function Pcb() {
  // ✅ Define the 2 images you want to swap on scroll
  const images = [
    Image1,
    Image2
  ];

  // ✅ Default active image
  const [activeImage, setActiveImage] = useState(images[0]);

  // ✅ Set up intersection observers for text sections
  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });

  // ✅ Change the image when sections come into view
  useEffect(() => {
    if (inView2) {
      setActiveImage(images[1]);
    } else if (inView1) {
      setActiveImage(images[0]);
    }
  }, [inView1, inView2]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white py-40 px-6">
          <div className="md:w-1/2 max-w-xl z-10 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-satruc-950">
              Pcb Design And Devlopment
              <span className="block text-satruc-accent-600">
                in manufacturing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
    At Satruc, we specialize in end-to-end PCB design and manufacturing, backed by robust quality systems and strict adherence to international standards. From prototyping to high-volume production, our integrated approach ensures every board is engineered for precision, reliability, and performance in the most demanding applications.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-0 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              GET IN TOUCH
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img 
              src={bgImage} 
              alt="Quality Management" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Scroll-triggered Image Section */}
    {/* Scroll-triggered Image & Content Section */}
<section className="relative flex flex-col md:flex-row items-start justify-between bg-white px-6 py-0">
  <div className="flex w-full">
    
    {/* Left Side: Sticky, Full Screen Image */}
    <div className="hidden md:block md:w-1/2 h-screen sticky top-0">
      <img
        src={activeImage}
        alt="Scroll-triggered"
        className="w-full h-screen object-cover"
      />
    </div>

    {/* Right Side: Scrollable Text Sections */}
<div className="w-full md:w-1/2 flex flex-col">
     <div ref={ref1} className="p-8 text-center md:text-left min-h-screen flex flex-col justify-center">
  <h2 className="text-3xl font-bold mb-4">
    Quality Management in PCB Manufacturing
  </h2>
  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
    At Satruc, quality is at the core of our PCB manufacturing operations. 
    Every stage—from material selection to final inspection—is governed by strict 
    process controls and global standards like IPC-6012 and ISO 9001. We utilize 
    advanced inspection systems including AOI (Automated Optical Inspection), flying probe,
     and in-circuit testing to detect any defects before delivery. Our commitment to continuous
      improvement ensures that every PCB we produce is
     consistent, reliable, and built to perform in critical applications.
  </p>
</div>


      <div ref={ref2} className="p-8 text-center md:text-left min-h-screen flex flex-col justify-center">
  <h2 className="text-3xl font-bold mb-4">
    PCB Manufacturing Excellence
  </h2>
  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
    At Satruc, we combine cutting-edge PCB fabrication technology with deep industry experience to deliver boards that are precise, durable, and production-ready. 
    From multilayer HDI boards to flexible circuits, our manufacturing process emphasizes accuracy, reliability, and compliance with international standards.
    Whether you're scaling prototypes or fulfilling large production runs, we ensure each PCB meets rigorous electrical, mechanical, and thermal requirements for high-performance applications.
  </p>
</div>

    </div>
  </div>
</section>



        {/* Features Section */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-26">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
  Ready to Build Your Next PCB With Confidence?
</h2>
<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
  Get in touch with our experts for precision-engineered PCB solutions that meet your technical and timeline requirements—delivered with unmatched quality and service.
</p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {
             [
  {
  icon: Factory,
  title: "Robust Manufacturing Infrastructure",
  description: "Advanced fabrication lines and cleanroom environments ensure consistent quality across every production batch—from prototypes to mass volumes."
},
{
  icon: Microscope,
  title: "Rigorous Testing & Inspection",
  description: "Every board undergoes AOI, flying probe, and functional testing to eliminate defects and guarantee electrical performance."
},
{
  icon: BarChart,
  title: "Scalable Production Capabilities",
  description: "Whether it’s a single-layer prototype or a 32-layer HDI board, our facilities are optimized for fast, scalable, and repeatable production."
},
{
  icon: ShieldCheck,
  title: "Reliability in Harsh Environments",
  description: "We specialize in producing PCBs for high-reliability applications—automotive, aerospace, defense—ensuring durability under extreme conditions."
}

].map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                  <CardContent className="p-8 text-center">
 <div className=" w-12 h-12 bg-satruc-accent-600 text-white 
 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section 
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-6xl mx-auto px-6">
            <FeatureGrid/>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "99.9%", label: "Quality Rate", suffix: "" },
                { number: "25", label: "Years Experience", suffix: "+" },
                { number: "500", label: "Projects Completed", suffix: "+" }
              ].map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-xl text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div> 
          </div>
        </section> */ }
        <section className="py-16 bg-gradient-radial from-black/80 via-black/90 to-black backdrop-blur-md text-white opacity-100">
                                <div className="container mx-auto px-4">
                                  <div className="max-w-3xl mx-auto text-center">
                                   
                                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                                      <FeatureGrid />
                                    
                                    </div> 
                                  </div>
                                </div>
                              </section>

        {/* Call to Action Section 
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Ensure Quality Excellence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with us for manufacturing solutions that prioritize quality, reliability, and precision at every step.
            </p>
          </div>
        </section> */}
      </div>

      <Footer />
    </div>
  );
}
