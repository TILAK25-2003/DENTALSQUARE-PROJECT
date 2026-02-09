import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  email?: string;
  clinicId: string;
  serviceId: string;
  date: string;
  time: string;
  message?: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  createdAt: string;
}

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (data: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => void;
  updateStatus: (id: string, status: Appointment['status']) => void;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('appointments');
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (data: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => {
    const newAppointment: Appointment = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    setAppointments((prev) => [newAppointment, ...prev]);
    
    // Simulate email notification
    console.log('📧 Email sent to Doctor: New Appointment Booked!', newAppointment);
    console.log('📧 Email sent to Patient: Appointment Received!', newAppointment);
    
    toast.success('Appointment Request Sent Successfully!');
  };

  const updateStatus = (id: string, status: Appointment['status']) => {
    setAppointments((prev) =>
      prev.map((appt) => (appt.id === id ? { ...appt, status } : appt))
    );
    toast.success(`Appointment marked as ${status}`);
  };

  const login = () => {
    setIsAdmin(true);
    localStorage.setItem('isAdmin', 'true');
    toast.success('Welcome back, Doctor!');
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
    toast.success('Logged out successfully');
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, updateStatus, isAdmin, login, logout }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) throw new Error('useAppointments must be used within an AppointmentProvider');
  return context;
};
