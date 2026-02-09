import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppointmentProvider } from './context/AppointmentContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <AppointmentProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/booking-success" element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md mx-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-2">Booking Request Sent!</h2>
                  <p className="text-gray-600 mb-6">We have received your appointment request. Our team will contact you shortly to confirm the slot.</p>
                  <a href="/" className="text-teal font-medium hover:underline">Return Home</a>
                </div>
              </div>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </AppointmentProvider>
  );
}

export default App;
