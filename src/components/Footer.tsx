import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { CONTACT_INFO, CLINICS } from '../data/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <img src={CONTACT_INFO.logo} alt="Dental Square" className="h-10 w-auto bg-white rounded-md p-1" />
               <span className="text-xl font-bold">DENTAL SQUARE</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Advanced dental care for confident smiles. We provide comprehensive dental services with a focus on hygiene, comfort, and modern technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-light">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Treatments</a></li>
              <li><Link to="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Doctor Login</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-light">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-teal" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-teal" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-1 text-teal" />
                <span>{CONTACT_INFO.timings}</span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-light">Our Clinics</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              {CLINICS.map((clinic) => (
                <div key={clinic.id}>
                  <p className="font-medium text-white">{clinic.name}</p>
                  <p className="opacity-80">{clinic.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Dental Square. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
