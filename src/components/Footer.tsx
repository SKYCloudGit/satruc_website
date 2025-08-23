
  import React from 'react';
  import { Link } from 'react-router-dom';
  import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
  import { cn } from '@/lib/utils';

  const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-satruc-950 pt-16 pb-6 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Information */}
            <div className="space-y-6">
              <div className="mb-6">
                <Link to="/" className="text-2xl font-bold tracking-tighter">SATRUC</Link>
                <p className="text-satruc-300 mt-2 text-sm">
                </p>
              </div>
              
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-satruc-accent-500 mt-0.5 flex-shrink-0" />
                  <span className="text-satruc-200">PLOT NO.S-4/B,E-CITY,RAVIRYALA VILLAGE, Telangana 501510</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-satruc-accent-500 flex-shrink-0" />
                  <span className="text-satruc-200">+91 11 2345 6789</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-satruc-accent-500 flex-shrink-0" />
                  <a href="mailto:info@satrucappliances.com" className="text-satruc-200 hover:text-white transition-colors">
                    info@satrucappliances.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Clock size={18} className="mr-3 text-satruc-accent-500 flex-shrink-0" />
                  <span className="text-satruc-200">Mon - Sat: 9:00 AM - 5:30 PM</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-6 pb-2 border-b border-satruc-800">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  // { name: 'Products', path: '/products' },
                  { name: 'About Us', path: '/about' },
                  // { name: 'Services', path: '/services' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Privacy Policy', path: '/privacy-policy' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-satruc-300 hover:text-white transition-colors inline-flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={14} />
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            {/* <div>
              <h4 className="text-lg font-medium mb-6 pb-2 border-b border-satruc-800">Our Products</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Industrial Gas Regulators', path: '/products/industrial' },
                  { name: 'Commercial Regulators', path: '/products/commercial' },
                  { name: 'Pressure Control Valves', path: '/products/pressure-control' },
                  { name: 'Flow Control Systems', path: '/products/flow-control' },
                  { name: 'Electric Actuators', path: '/products/actuators' },
                  { name: 'Custom Solutions', path: '/products/custom' },
                ].map((product, idx) => (
                  <li key={idx}>
                    <Link 
                      to={product.path}
                      className="text-satruc-300 hover:text-white transition-colors inline-flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={14} />
                      </span>
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium mb-6 pb-2 border-b border-satruc-800">Stay Updated</h4>
              {/* <p className="text-satruc-300 mb-4 text-sm">
                Subscribe to our newsletter for the latest product updates, industry news and exclusive offers.
              </p>
              
              <form className="mb-6">
                <div className="flex flex-col space-y-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-satruc-900 border border-satruc-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-satruc-accent-600 focus:ring-1 focus:ring-satruc-accent-600 transition-all"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-satruc-accent-600 hover:bg-satruc-accent-700 text-white font-medium py-2 px-4 rounded transition-colors active:scale-[0.98]"
                  >
                    Subscribe
                  </button>
                </div>
              </form> */}

              {/* Social Media */}
              <div>
                <h5 className="text-sm font-medium mb-3">Follow Us</h5>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Linkedin, href: "https://in.linkedin.com/company/satruc-appliances-pvt-ltd" },
                    { icon: Instagram, href: "#" },
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.href} 
                      className={cn(
                        "h-9 w-9 flex items-center justify-center rounded-full",
                        "bg-satruc-800 text-satruc-200 hover:bg-satruc-accent-600 hover:text-white",
                        "transition-all duration-300 ease-in-out"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-satruc-800 my-8"></div>

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-satruc-400 text-sm">
            <div className="mb-4 md:mb-0">
              © {currentYear} Satruc Appliances Pvt Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
