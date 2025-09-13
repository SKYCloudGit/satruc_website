
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import KeyFeatures from '@/components/KeyFeatures';
import FeaturedProducts from '@/components/FeaturedProducts';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import Applicationassets from '@/components/OurFacility';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  // Fade in sections as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.25
    });

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Image Gallery Section */}
      {/* <ImageGallery /> */}
      
      {/* Key Features Section */}
      <KeyFeatures />
      
      {/* Featured Products Section */}
      {/* <FeaturedProducts /> */}
      
      {/* Technology Showcase */}
      {/* <TechnologyShowcase /> */}
      
      {/* Application assets */}
      {/* <Applicationassets /> */}
      
      {/* CTA Section */}
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default Index;
