import React from 'react';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const Booking = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
