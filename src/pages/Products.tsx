
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, ChevronDown, Search, 
  Gauge, Factory, Building, Shield, Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Sample product data
  const products = [
    {
      id: '1',
      name: 'SmartFlow Pro 5000',
      description: 'High-precision electric gas regulator for industrial processes requiring exact flow control.',
      image: 'https://assets.unsplash.com/photo-1581092921461-7d65ca45ec1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Pressure range: 0-100 bar',
        'Digital flow monitoring',
        'Remote control via app',
        'Auto calibration system'
      ],
      category: 'Industrial',
      isNew: true,
      slug: 'smartflow-pro-5000'
    },
    {
      id: '2',
      name: 'PressGuard X400',
      description: 'Advanced safety regulator with multiple redundant systems for critical applications.',
      image: 'https://assets.unsplash.com/photo-1581092580838-a0d040d0c2a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Triple redundant safety',
        'Automatic emergency shutdown',
        'Status reporting system',
        'Corrosion resistant housing'
      ],
      category: 'Safety',
      isBestseller: true,
      slug: 'pressguard-x400'
    },
    {
      id: '3',
      name: 'MicroFlow E-Series',
      description: 'Compact electric regulator for commercial and light industrial applications.',
      image: 'https://assets.unsplash.com/photo-1581093196277-9f608bb3fdd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Space-saving design',
        'Low power consumption',
        'Easy installation system',
        'Compatible with all gas types'
      ],
      category: 'Commercial',
      slug: 'microflow-e-series'
    },
    {
      id: '4',
      name: 'IndustrialMax G2',
      description: 'Heavy-duty gas regulator designed for continuous operation in demanding industrial environments.',
      image: 'https://assets.unsplash.com/photo-1581093458791-2aa7b4df31b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'High flow capacity',
        'Vibration resistant',
        'Operating temp: -40°C to 80°C',
        'Stainless steel construction'
      ],
      category: 'Industrial',
      slug: 'industrialmax-g2'
    },
    {
      id: '5',
      name: 'PreciTech Mini',
      description: 'Miniaturized pressure regulator for laboratory and medical equipment applications.',
      image: 'https://assets.unsplash.com/photo-1581094487519-8174d49432b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Ultra-compact design',
        'High precision control',
        'Low flow applications',
        'Medical-grade materials'
      ],
      category: 'Laboratory',
      slug: 'precitech-mini'
    },
    {
      id: '6',
      name: 'SafeFlow Monitor',
      description: 'Intelligent gas regulation system with integrated leak detection and automatic shutdown.',
      image: 'https://assets.unsplash.com/photo-1581093804175-0f39bf0d4eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Continuous leak monitoring',
        'Emergency shut-off valve',
        'SMS/email alerts',
        'Data logging capabilities'
      ],
      category: 'Safety',
      isNew: true,
      slug: 'safeflow-monitor'
    },
    {
      id: '7',
      name: 'CommercialPro C750',
      description: 'Reliable gas pressure regulation for commercial cooking and heating applications.',
      image: 'https://assets.unsplash.com/photo-1581093805715-1012ca81e456?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'CSA certified',
        'Easy service access',
        'Tamper-resistant design',
        'Consistent outlet pressure'
      ],
      category: 'Commercial',
      slug: 'commercialpro-c750'
    },
    {
      id: '8',
      name: 'LabMaster V2',
      description: 'Ultra-precise regulator for scientific research and calibration environments.',
      image: 'https://assets.unsplash.com/photo-1581093577421-f561a654a353?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        '0.01% accuracy',
        'Digital calibration',
        'USB data interface',
        'Multi-gas compatibility'
      ],
      category: 'Laboratory',
      isBestseller: true,
      slug: 'labmaster-v2'
    },
    {
      id: '9',
      name: 'RubiconX Heavy Duty',
      description: 'Extreme environment gas regulator for oil & gas, mining, and chemical processing applications.',
      image: 'https://assets.unsplash.com/photo-1581093579830-9a6689cd159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Explosion-proof certification',
        'Corrosion-resistant alloys',
        'High pressure capability',
        'Field serviceable design'
      ],
      category: 'Industrial',
      slug: 'rubiconx-heavy-duty'
    },
  ];

  // Categories with icons
  const categories = [
    { id: 'all', name: 'All Products', icon: Settings },
    { id: 'Industrial', name: 'Industrial', icon: Factory },
    { id: 'Commercial', name: 'Commercial', icon: Building },
    { id: 'Safety', name: 'Safety', icon: Shield },
    { id: 'Laboratory', name: 'Laboratory', icon: Gauge },
  ];

  // Filter products based on category and search query
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.features.some((feature: string) => feature.toLowerCase().includes(query))
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-satruc-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-satruc-900 mb-6">
              Our Product Range
            </h1>
            <p className="text-xl text-satruc-700 mb-8">
              Explore our comprehensive range of precision-engineered electric gas regulators designed for various applications.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-satruc-400" />
              </div>
              <input
                type="text"
                className="block w-full p-4 pl-10 text-sm text-satruc-900 border border-satruc-200 rounded-lg bg-white focus:ring-satruc-accent-600 focus:border-satruc-accent-600"
                placeholder="Search for products, features or specifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between p-3 bg-satruc-50 border border-satruc-100 rounded-md"
            >
              <span className="flex items-center text-satruc-900 font-medium">
                <Filter className="h-5 w-5 mr-2" />
                Filter Products
              </span>
              <ChevronDown className={`h-5 w-5 text-satruc-600 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Category Filter */}
            <div className={`lg:w-64 lg:pr-8 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-satruc-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                          "w-full flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors",
                          activeCategory === category.id
                            ? "bg-satruc-accent-50 text-satruc-accent-600 border-l-2 border-satruc-accent-600"
                            : "text-satruc-700 hover:bg-satruc-50 hover:text-satruc-900"
                        )}
                      >
                        <category.icon className="h-5 w-5 mr-3" />
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-satruc-100">
                  <h3 className="text-lg font-semibold text-satruc-900 mb-4">
                    Need Help?
                  </h3>
                  <p className="text-sm text-satruc-600 mb-4">
                    Our product specialists can help you find the perfect solution for your requirements.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-satruc-accent-600 hover:text-satruc-accent-700 text-sm font-medium"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1 lg:pl-8 lg:border-l border-satruc-100">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-satruc-900">
                      {activeCategory === 'all' ? 'All Products' : activeCategory + ' Products'}
                      <span className="ml-2 text-satruc-500 text-sm font-normal">
                        ({filteredProducts.length} items)
                      </span>
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-satruc-100 mb-4">
                    <Search className="h-8 w-8 text-satruc-400" />
                  </div>
                  <h3 className="text-xl font-medium text-satruc-900 mb-2">No products found</h3>
                  <p className="text-satruc-600 mb-6">
                    We couldn't find any products matching your criteria. Try adjusting your filters or search term.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 border border-satruc-200 rounded-md text-sm font-medium text-satruc-700 bg-white hover:bg-satruc-50"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Support Section */}
      <section className="py-16 bg-satruc-accent-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-satruc-900 mb-6">
              Complete Support for Your Gas Regulation Needs
            </h2>
            <p className="text-lg text-satruc-700 mb-8">
              Beyond our products, we provide comprehensive services to ensure optimal performance throughout the lifecycle of your regulators.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Technical Consultation',
                  description: 'Our engineers work with you to identify the perfect solution for your specific requirements.'
                },
                {
                  title: 'Installation & Calibration',
                  description: 'Professional installation and precision calibration services to ensure optimal performance.'
                },
                {
                  title: 'Maintenance & Support',
                  description: '24/7 technical support and preventative maintenance programs to maximize uptime.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-satruc-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-satruc-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-12 px-6 py-3 bg-satruc-accent-600 text-white hover:bg-satruc-accent-700 active:scale-[0.98]"
              >
                Request Support
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
