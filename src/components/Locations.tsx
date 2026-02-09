import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { CLINICS, CONTACT_INFO } from '../data/constants';
import { Link } from 'react-router-dom';

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Locations</h2>
          <p className="text-gray-600 text-lg">Visit us at one of our two convenient branches in Kolkata.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {CLINICS.map((clinic) => (
            <div key={clinic.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
              <div className="relative group">
                <img 
                  src={clinic.image} 
                  alt={clinic.name} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-navy/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-md border border-white/20">
                  {clinic.name.split('-')[1].trim()} Branch
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-navy mb-6">{clinic.name}</h3>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-4 text-gray-600">
                    <MapPin className="w-6 h-6 text-sky-blue shrink-0 mt-0.5" />
                    <p className="text-base leading-relaxed">{clinic.address}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <Phone className="w-6 h-6 text-sky-blue shrink-0" />
                    <p className="text-base">{CONTACT_INFO.phone}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <Clock className="w-6 h-6 text-sky-blue shrink-0" />
                    <p className="text-base">{CONTACT_INFO.timings}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a 
                    href={clinic.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-navy hover:bg-navy-light text-white py-4 rounded-xl font-medium text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <MapPin size={20} className="group-hover:animate-bounce" />
                    Open in Google Maps
                  </a>
                  <Link 
                    to={`/book?location=${clinic.id}`}
                    className="flex-1 bg-sky-blue hover:bg-sky-blue-dark text-navy py-4 rounded-xl font-bold text-center transition-all shadow-md hover:shadow-lg shadow-sky-blue/20"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
