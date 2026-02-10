import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../data/constants';

const Hero = () => {
  return (
    <div className="relative bg-navy-light h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Dental Clinic" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal/20 text-teal-light text-sm font-medium mb-6 border border-teal/30">
              Welcome to Dental Square
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced Dental Care for <span className="text-teal">Confident Smiles</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Experience pain-free dentistry with our expert team. We combine modern technology with strict hygiene standards to give you the best dental care in Kolkata.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/book"
                className="bg-teal hover:bg-teal-dark text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-teal/20"
              >
                Book Appointment <ArrowRight size={20} />
              </Link>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
