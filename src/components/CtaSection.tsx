
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CtaSection = () => {
  return (
    <section className="py-20 bg-satruc-accent-600 fade-in-section opacity-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Products?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our engineers develop the perfect solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link 
              to="/contact" 
              className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                "h-12 px-8 py-3 bg-white text-satruc-accent-700 hover:bg-satruc-50",
                "active:scale-[0.98] shadow-sm"
              )}
            >
              Contact Sales
            </Link>
            {/* <Link 
              to="/products" 
              className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors",
                "h-12 px-8 py-3 border border-white text-white hover:bg-white/10",
                "group"
              )}
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
