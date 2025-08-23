import React from 'react';
import { Settings, Shield, Zap, Gauge, Award, Factory } from 'lucide-react';

const KeyFeatures = () => {
  const features = [
    {
      icon: Settings,
      title: 'Precision Manufacturing',
      description:
        'We specialize in ultra-precise, repeatable production processes—ensuring consistent quality across a wide range of industrial and consumer-grade products.',
    },
    {
      icon: Shield,
      title: 'Built-In Safety Protocols',
      description:
        'Our systems exceed global safety standards, with multiple safeguards integrated into every process to ensure dependable and secure operations.',
    },
    {
      icon: Zap,
      title: 'Energy-Efficient Systems',
      description:
        'Automated energy optimization across our facilities enables lower power usage—supporting sustainability without compromising performance.',
    },
    {
      icon: Gauge,
      title: 'Smart Process Control',
      description:
        'Real-time monitoring and cloud-based controls enable dynamic adjustments across operations, enhancing responsiveness and process reliability.',
    },
    {
      icon: Factory,
      title: 'Rugged Industrial Reliability',
      description:
        'Built to endure demanding conditions, our infrastructure utilizes high-grade materials and advanced systems that run with uninterrupted performance.',
    },
    {
      icon: Award,
      title: 'Certified Quality Systems',
      description:
        'Satruc is ISO 9001:2015 certified, ensuring strict adherence to global quality standards, full traceability, and audit-ready documentation.',
    },
  ];

  return (
    <section className="py-20 fade-in-section opacity-0">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-satruc-accent-50 text-satruc-accent-600 text-xs font-medium px-3 py-1 rounded-full">
            Engineering Excellence
          </span>
         <h2 className="mt-4 text-3xl md:text-4xl font-bold text-satruc-900">
  Manufacturing You Can Rely On
</h2>
<p className="mt-4 text-lg text-satruc-600">
  From concept to production, Satruc delivers precision-built solutions that meet the highest standards of quality, efficiency, and reliability—every time.
</p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-6 border border-satruc-100 hover:border-satruc-200 transition-all hover:shadow-sm"
            >
<div className="w-12 h-12 rounded-full bg-satruc-accent-50 text-satruc-accent-600 flex items-center justify-center mb-5 group-hover:bg-satruc-accent-600 group-hover:text-white transition-colors">
                <feature.icon size={24}  />
              </div>
              <h3 className="text-lg font-semibold text-satruc-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-satruc-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
