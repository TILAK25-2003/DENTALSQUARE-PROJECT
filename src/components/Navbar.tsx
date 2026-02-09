import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, UserCog } from 'lucide-react';
import clsx from 'clsx';
import { useAppointments } from '../context/AppointmentContext';
import { CONTACT_INFO } from '../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAdmin, logout } = useAppointments();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Locations', path: '/#locations' },
    { name: 'About', path: '/#about' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-navy shadow-lg sticky top-0 z-50 border-b border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 bg-white p-1 rounded-lg">
              <img src={CONTACT_INFO.logo} alt="Dental Square Logo" className="h-12 w-auto object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-300 hover:text-sky-blue font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            {isAdmin ? (
              <div className="flex items-center gap-4">
                <Link to="/admin" className="text-white font-medium hover:text-sky-blue">Dashboard</Link>
                <button 
                  onClick={logout}
                  className="bg-red-500/20 text-red-300 border border-red-500/50 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-500/30 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-gray-400 hover:text-white" title="Doctor Login">
                  <UserCog size={20} />
                </Link>
                <Link
                  to="/book"
                  className="bg-sky-blue hover:bg-sky-blue-dark text-navy px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-sky-blue/20"
                >
                  <Calendar size={18} />
                  Book Appointment
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={clsx("md:hidden bg-navy border-t border-navy-light", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy-light"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4 px-3 space-y-3">
            {isAdmin ? (
              <>
                <Link to="/admin" onClick={handleLinkClick} className="block text-white font-medium">Dashboard</Link>
                <button onClick={() => { logout(); handleLinkClick(); }} className="block text-red-400 font-medium">Logout</button>
              </>
            ) : (
              <Link
                to="/book"
                onClick={handleLinkClick}
                className="w-full bg-sky-blue text-navy px-4 py-2 rounded-md font-bold flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
