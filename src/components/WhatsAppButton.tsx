import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/constants';

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Dr.%20Puja,%20I%20would%20like%20to%20book%20an%20appointment.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="fill-white text-[#25D366]" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
