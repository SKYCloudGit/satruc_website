
import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import SupplierForm from '@/components/SupplierForm';

const Suppliers = () => {
  // Contact information
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        '123 Industrial Area, Phase 2',
        'New Delhi, 110001, India'
      ],
      link: 'https://maps.google.com/',
      linkText: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 11 2345 6789',
        '+91 98765 43210'
      ],
      link: 'tel:+911123456789',
      linkText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@satrucappliances.com',
        'sales@satrucappliances.com'
      ],
      link: 'mailto:info@satrucappliances.com',
      linkText: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 2:00 PM'
      ],
      link: undefined,
      linkText: undefined
    }
  ];

  // Office locations
  const officeLocations = [
    {
      city: 'Hyderabad',
      address: '123 Industrial Area, Phase 2, New Delhi, 110001',
      phone: '+91 11 2345 6789'
    },
    // {
    //   city: 'Mumbai',
    //   address: '45 Andheri Industrial Estate, Mumbai, 400053',
    //   phone: '+91 22 3456 7890'
    // },
    // {
    //   city: 'Bengaluru',
    //   address: '78 Electronics City, Phase 1, Bengaluru, 560100',
    //   phone: '+91 80 4567 8901'
    // }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-satruc-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-satruc-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-satruc-700 mb-8">
              We value our suppliers, want to collaberate withus. Reach out to our team for personalized assistance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      {/* <section className="py-12 bg-white -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-satruc-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-satruc-accent-50 text-satruc-accent-600 flex items-center justify-center mb-5">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-satruc-900 mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-satruc-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {item.link && (
                  <a 
                    href={item.link} 
                    className="inline-flex items-center text-sm text-satruc-accent-600 hover:text-satruc-accent-700 font-medium transition-colors group"
                  >
                    {item.linkText}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Contact Form and Map */}
      <section className="py-16 bg-satruc-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Map and Location Info */}
            <div className="space-y-8">
              {/* Map (placeholder - in real implementation, integrate Google Maps) */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-64 md:h-72">
                <div className="w-full h-full bg-satruc-100 flex items-center justify-center">
                  
                    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6752.096118785251!2d78.49031850418652!3d17.197522660386035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba56a47fb1d2b%3A0x2b02c392c24ae393!2sSatruc%20appliances%20private%20limited!5e0!3m2!1sen!2sin!4v1742799278816!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          />
                    
                </div>
              </div>
              
              {/* Office Locations */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-satruc-900 mb-4">
                  Our Office
                </h3>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className={index > 0 ? "pt-4 border-t border-satruc-100" : ""}>
                      <h4 className="font-medium text-satruc-accent-600 mb-1">
                        {office.city}
                      </h4>
                      <p className="text-satruc-600 text-sm mb-1">
                        {office.address}
                      </p>
                      <p className="text-satruc-600 text-sm">
                        {office.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Map and Location Info */}
            <div className="space-y-8">
              {/* Map (placeholder - in real implementation, integrate Google Maps) */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-64 md:h-72">
                <div className="w-full h-full bg-satruc-100 flex items-center justify-center">
                  
                    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6752.096118785251!2d78.49031850418652!3d17.197522660386035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba56a47fb1d2b%3A0x2b02c392c24ae393!2sSatruc%20appliances%20private%20limited!5e0!3m2!1sen!2sin!4v1742799278816!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          />
                    
                </div>
              </div>
              
              {/* Office Locations */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-satruc-900 mb-4">
                  Our Office
                </h3>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className={index > 0 ? "pt-4 border-t border-satruc-100" : ""}>
                      <h4 className="font-medium text-satruc-accent-600 mb-1">
                        {office.city}
                      </h4>
                      <p className="text-satruc-600 text-sm mb-1">
                        {office.address}
                      </p>
                      <p className="text-satruc-600 text-sm">
                        {office.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <Footer />
    </div>
  );
};

export default Suppliers;
