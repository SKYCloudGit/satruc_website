
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const FeaturedProducts = () => {
  // Sample products
  const featuredProducts = [
    {
      id: '1',
      name: 'Flow Monitoring and Control Device',
      description: 'High-precision electric gas regulator for industrial processes requiring exact flow control.',
      src: [
        { image: 'assembled_regulator.jpg', desc: 'Fully assembled regulator ready for operation.' },
        { image: 'top.jpg', desc: 'User-friendly digital control panel with real-time monitoring.' },
        { image: 'bottom.jpg', desc: 'Bottom enclosure' },
        { image: 'sideview.jpg', desc: 'Regulator side view.' },
      ],
      features: [
        'The FMCD is an IoT device that attaches to most LPG cylinders, and provides safe, high-precision metering of customer consumption.',
        ' Customers purchase gas in small amount using mobile money.',
        ' The FMCD communicates wirelessly with the cloud, enabling you to monitor the cylinder level, and deliver a new cylinder before the customer runs out of gas.',
       
      ],
      category: 'Industrial',
      isNew: true,
      slug: 'smartflow-pro-5000'
    }
  ];
  

  return (
    <section className="py-20 bg-gradient-to-b from-white to-satruc-50 fade-in-section opacity-0" >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
              Featured Products
            </span>
            <h2 className="mt-4 text-3xl font-bold text-satruc-900">
              Industrial Solutions
            </h2>
            <p className="mt-3 text-lg text-satruc-600 max-w-2xl">
              Explore our advanced gas regulation technology designed for precision, safety, and reliability.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            {/* <Link 
              to="/products" 
              className="inline-flex items-center text-satruc-accent-600 hover:text-satruc-accent-700 font-medium group"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link> */}
          </div>
        </div>
        
        <div className="container mx-auto px-4" >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
