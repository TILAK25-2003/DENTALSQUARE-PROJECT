import React from 'react';
import { SERVICES } from '../data/constants';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-navy mb-3 md:mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
            Comprehensive dental solutions tailored to your needs. From routine checkups to advanced surgeries.
          </p>
        </div>

        {/* 
          Grid Layout Update:
          - grid-cols-2: Default for mobile (2 columns)
          - lg:grid-cols-4: 4 columns for large screens
          - gap-3: Tighter gap for mobile
          - md:gap-8: Larger gap for desktop
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-4 md:p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center h-full"
            >
              {/* Icon Container: Smaller on mobile */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-sky-blue/10 rounded-full flex items-center justify-center text-navy mb-3 md:mb-6 group-hover:bg-navy group-hover:text-sky-blue transition-colors duration-300 shrink-0">
                {/* Icon: Responsive sizing via classes instead of fixed size prop */}
                <service.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              {/* Title: Smaller font on mobile */}
              <h3 className="text-sm md:text-xl font-bold text-navy mb-2 md:mb-3 leading-tight">
                {service.title}
              </h3>
              
              {/* Description: Smaller text on mobile to fit 2-col layout */}
              <p className="text-xs md:text-base text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
