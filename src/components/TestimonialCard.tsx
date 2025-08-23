
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar?: string;
  companyLogo?: string;
  testimonial: string;
  rating: number;
  featured?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  avatar,
  companyLogo,
  testimonial,
  rating,
  featured = false,
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden transition-all duration-300 rounded-lg",
        featured 
          ? "bg-satruc-accent-600 text-white p-6 shadow-lg" 
          : "bg-white border border-satruc-100 hover:border-satruc-200 p-6 hover:shadow-sm"
      )}
    >
      {/* Quote Icon */}
      <div className={cn(
        "absolute -right-2 -top-2 opacity-10",
        featured ? "text-white" : "text-satruc-900"
      )}>
        <Quote size={60} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Rating */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={cn(
                i < rating 
                  ? featured ? "text-white" : "text-amber-400" 
                  : featured ? "text-white/30" : "text-satruc-200",
                "fill-current"
              )} 
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className={cn(
          "mb-6 text-sm",
          featured ? "text-white/90" : "text-satruc-700"
        )}>
          "{testimonial}"
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center">
          {avatar && (
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img 
                  src={avatar} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          <div>
            <div className={cn(
              "font-medium",
              featured ? "text-white" : "text-satruc-900"
            )}>
              {name}
            </div>
            <div className={cn(
              "text-xs",
              featured ? "text-white/80" : "text-satruc-600"
            )}>
              {role}, {company}
            </div>
          </div>
          
          {companyLogo && (
            <div className="ml-auto">
              <img 
                src={companyLogo} 
                alt={company} 
                className="h-8 w-auto object-contain" 
              />
            </div>
          )}
        </div>
      </div>

      {/* Background decoration for featured cards */}
      {featured && (
        <>
          <div className="absolute top-0 right-0 w-40 h-40 bg-satruc-accent-500/30 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-satruc-accent-500/30 rounded-full -ml-10 -mb-10"></div>
        </>
      )}
    </div>
  );
};

export default TestimonialCard;
