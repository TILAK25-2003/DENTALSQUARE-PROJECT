import React from 'react';
import { SERVICES } from '../data/constants';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive dental solutions tailored to your needs. From routine checkups to advanced surgeries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center h-full"
            >
              <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-sky-blue transition-colors duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
