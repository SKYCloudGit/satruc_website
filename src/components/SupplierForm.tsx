
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { User, AtSign, Phone, Building, MessageSquare, Send } from 'lucide-react';

const SupplierForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: 'Not specified'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
  
    const emailBody = `Hi Team Satruc,\n\n`
      + `I am ${formData.name}, representing ${formData.company}.\n\n`
      + `Contact Details:\n`
      + `- Email: ${formData.email}\n`
      + `- Phone: ${formData.phone}\n\n`
      + `Product Interest: ${formData.product}\n\n`
      + `Message:\n${formData.message}\n\n`
      + `Looking forward to your response.\nBest regards,\n${formData.name}`;
  
    const mailtoLink = `mailto:fayaz@skylarksmartmeters.com?subject=Inquiry&body=${encodeURIComponent(emailBody)}`;
  
    window.location.href = mailtoLink;
    setTimeout(() => setIsSubmitting(false), 2000);
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name Field */}
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="text-sm font-medium text-satruc-900 flex items-center"
          >
            <User size={16} className="mr-2 text-satruc-500" />
            Full Name
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className={cn(
                "w-full px-4 py-2.5 rounded-md border-satruc-200 focus:border-satruc-accent-600",
                "focus:ring-1 focus:ring-satruc-accent-600 focus:outline-none transition-all",
                "placeholder:text-satruc-400"
              )}
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="text-sm font-medium text-satruc-900 flex items-center"
          >
            <AtSign size={16} className="mr-2 text-satruc-500" />
            Email Address
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className={cn(
                "w-full px-4 py-2.5 rounded-md border-satruc-200 focus:border-satruc-accent-600",
                "focus:ring-1 focus:ring-satruc-accent-600 focus:outline-none transition-all",
                "placeholder:text-satruc-400"
              )}
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label 
            htmlFor="phone" 
            className="text-sm font-medium text-satruc-900 flex items-center"
          >
            <Phone size={16} className="mr-2 text-satruc-500" />
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={cn(
                "w-full px-4 py-2.5 rounded-md border-satruc-200 focus:border-satruc-accent-600",
                "focus:ring-1 focus:ring-satruc-accent-600 focus:outline-none transition-all",
                "placeholder:text-satruc-400"
              )}
            />
          </div>
        </div>

        {/* Company Field */}
        <div className="space-y-2">
          <label 
            htmlFor="company" 
            className="text-sm font-medium text-satruc-900 flex items-center"
          >
            <Building size={16} className="mr-2 text-satruc-500" />
            Company Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className={cn(
                "w-full px-4 py-2.5 rounded-md border-satruc-200 focus:border-satruc-accent-600",
                "focus:ring-1 focus:ring-satruc-accent-600 focus:outline-none transition-all",
                "placeholder:text-satruc-400"
              )}
            />
          </div>
        </div>
      </div>

      {/* Product Interest */}
      <div className="space-y-2">
        <label 
          htmlFor="product" 
          className="text-sm font-medium text-satruc-900"
        >
          Select the product you own or supply
        </label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-2.5 rounded-md border-satruc-200 focus:border-satruc-accent-600",
            "focus:ring-1 focus:ring-satruc-accent-600 focus:outline-none transition-all",
            "placeholder:text-satruc-400"
          )}
        >
          <option value="Not specified">Select a product of your category</option>
          <option value="Industrial Gas Regulators">Industrial Gas Regulators</option>
          <option value="Commercial Regulators">Commercial Regulators</option>
          <option value="Pressure Control Valves">Pressure Control Valves</option>
          <option value="Flow Control Systems">Flow Control Systems</option>
          <option value="Electric Actuators">Electric Actuators</option>
          <option value="Custom Solutions">Custom Solutions</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label 
          htmlFor="message" 
          className="text-sm font-medium text-satruc-900 flex items-center"
        >
          <MessageSquare size={16} className="mr-2 text-satruc-500" />
          Message
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Please provide details about your requirements..."
          className={cn(
            "w-full px-4 py-3 rounded-md border-satruc-200 focus:border-satruc-accent-600",
            "focus:ring-1 focus:ring-satruc-accent-600 focus:outline-none transition-all",
            "placeholder:text-satruc-400 resize-none"
          )}
        />
      </div>

      {/* Privacy Policy Consent */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacy"
          required
          className="mt-1 h-4 w-4 rounded border-satruc-300 text-satruc-accent-600 focus:ring-satruc-accent-600"
        />
        <label htmlFor="privacy" className="ml-2 text-sm text-satruc-600">
          I agree to the processing of my personal data according to the 
          <a href="/privacy" className="text-satruc-accent-600 ml-1 hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "flex items-center justify-center rounded-md text-sm font-medium transition-colors",
            "h-12 px-6 py-3 bg-satruc-accent-600 text-white",
            "hover:bg-satruc-accent-700 active:scale-[0.98] shadow-sm w-full md:w-auto",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default SupplierForm;
