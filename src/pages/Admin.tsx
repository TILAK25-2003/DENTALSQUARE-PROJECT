import React, { useState } from 'react';
import { useAppointments, Appointment } from '../context/AppointmentContext';
import { Navigate } from 'react-router-dom';
import { Calendar, CheckCircle, XCircle, Clock, MapPin, Phone, MessageSquare } from 'lucide-react';
import { CLINICS, SERVICES } from '../data/constants';
import clsx from 'clsx';

const Admin = () => {
  const { appointments, isAdmin, updateStatus } = useAppointments();
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Confirmed' | 'Cancelled'>('All');

  if (!isAdmin) return <Navigate to="/login" />;

  const filteredAppointments = appointments.filter(appt => 
    filter === 'All' ? true : appt.status === filter
  );

  const getClinicName = (id: string) => CLINICS.find(c => c.id === id)?.name || id;
  const getServiceName = (id: string) => SERVICES.find(s => s.id === id)?.title || id;

  const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
      Pending: 'bg-yellow-100 text-yellow-800',
      Confirmed: 'bg-green-100 text-green-800',
      Cancelled: 'bg-red-100 text-red-800',
    };
    return (
      <span className={clsx("px-2 py-1 rounded-full text-xs font-medium", styles[status as keyof typeof styles])}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl font-bold text-navy">Appointment Dashboard</h1>
          <div className="flex bg-white rounded-lg p-1 shadow-sm">
            {['All', 'Pending', 'Confirmed', 'Cancelled'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={clsx(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  filter === f ? "bg-navy text-white" : "text-gray-600 hover:bg-gray-50"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm">
              <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500">No appointments found.</p>
            </div>
          ) : (
            filteredAppointments.map((appt) => (
              <div key={appt.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-6">
                <div className="flex-grow space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-navy">{appt.patientName}</h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <Phone size={14} />
                        <a href={`tel:${appt.phone}`} className="hover:text-teal">{appt.phone}</a>
                        {appt.email && <span className="text-gray-300">|</span>}
                        {appt.email && <span className="text-gray-500">{appt.email}</span>}
                      </div>
                    </div>
                    <StatusBadge status={appt.status} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} className="text-teal" />
                      {getClinicName(appt.clinicId)}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle size={16} className="text-teal" />
                      {getServiceName(appt.serviceId)}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} className="text-teal" />
                      {appt.date} at {appt.time}
                    </div>
                    {appt.message && (
                      <div className="flex items-start gap-2 text-gray-600 col-span-full bg-gray-50 p-3 rounded-lg">
                        <MessageSquare size={16} className="text-teal mt-1 shrink-0" />
                        <p className="italic">"{appt.message}"</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex lg:flex-col gap-2 justify-center border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6">
                  {appt.status === 'Pending' && (
                    <>
                      <button 
                        onClick={() => updateStatus(appt.id, 'Confirmed')}
                        className="flex-1 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center gap-2"
                      >
                        <CheckCircle size={16} /> Confirm
                      </button>
                      <button 
                        onClick={() => updateStatus(appt.id, 'Cancelled')}
                        className="flex-1 bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
                      >
                        <XCircle size={16} /> Cancel
                      </button>
                    </>
                  )}
                  <a 
                    href={`https://wa.me/91${appt.phone}?text=Hello ${appt.patientName}, regarding your appointment at Dental Square...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-teal/10 text-teal-dark px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
