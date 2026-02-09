import React from 'react';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  {
    url: 'https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/Screenshot_2026-02-10_011541-236ca1e8-7072-484d-8553-acf99014256e.webp',
    caption: 'Happy Smiles'
  },
  {
    url: 'https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/WhatsApp_Image_2026-01-30_at_9.40.02_PM_1-d93db75b-9da5-461f-b0ab-729399e10a35.webp',
    caption: 'Expert Care'
  },
  {
    url: 'https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/WhatsApp_Image_2026-01-30_at_9.40.02_PM-0a463379-19dc-455d-a4b5-2ed0c40f5cfa.webp',
    caption: 'Patient Comfort'
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Moments at Dental Square</h2>
          <p className="text-gray-600 text-lg">Building confident smiles, one patient at a time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-white border border-gray-100"
            >
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
