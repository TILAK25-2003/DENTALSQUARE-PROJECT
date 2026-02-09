import React from 'react';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background with Overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/WhatsApp_Image_2026-01-30_at_2.59.45_PM-31470b61-edfe-4386-a0c1-16a723c0aa89.webp')" 
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppButton />
        <Toaster position="top-center" />
      </div>
    </div>
  );
};

export default Layout;
