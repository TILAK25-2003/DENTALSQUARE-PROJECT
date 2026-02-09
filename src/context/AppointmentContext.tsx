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
  smsLogs: string[];
  addAppointment: (data: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => void;
  updateStatus: (id: string, status: Appointment['status']) => void;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  changePassword: (newPassword: string) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // --- Appointments State ---
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('appointments');
    return saved ? JSON.parse(saved) : [];
  });

  // --- Auth State ---
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  // Initialize password from Environment Variable or secure default
  // Note: In a production app with a real backend, this would be validated on the server.
  const [adminPassword, setAdminPassword] = useState(() => {
    const stored = localStorage.getItem('adminPassword');
    // Use the env variable if available, otherwise fallback (fallback should be avoided in prod)
    return stored || import.meta.env.VITE_ADMIN_PASSWORD || 'puja1995';
  });

  // --- Logs State (For SMS Simulation) ---
  const [smsLogs, setSmsLogs] = useState<string[]>(() => {
    const saved = localStorage.getItem('smsLogs');
    return saved ? JSON.parse(saved) : [];
  });

  // --- Effects ---
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('smsLogs', JSON.stringify(smsLogs));
  }, [smsLogs]);

  // --- Actions ---
  const addAppointment = (data: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => {
    const newAppointment: Appointment = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    setAppointments((prev) => [newAppointment, ...prev]);
    
    toast.success('Appointment Request Sent Successfully!');
  };

  const updateStatus = (id: string, status: Appointment['status']) => {
    const appointment = appointments.find(a => a.id === id);
    let toastMessage = `Appointment marked as ${status}`;
    let icon;

    // Simulate SMS Trigger when Confirmed
    if (appointment && status === 'Confirmed' && appointment.status !== 'Confirmed') {
      const timestamp = new Date().toLocaleTimeString();
      const smsMessage = `[${timestamp}] To: ${appointment.phone} | Msg: "Dear ${appointment.patientName}, your appointment is CONFIRMED for ${appointment.date} at ${appointment.time}."`;
      
      // Add to logs
      setSmsLogs(prev => [smsMessage, ...prev]);
      
      // Log to console
      console.log(`%c[SMS GATEWAY SIMULATION]`, 'color: #39cccc; font-weight: bold;', smsMessage);
      
      toastMessage = `Confirmed & SMS Logged`;
      icon = '📱';
    }

    setAppointments((prev) =>
      prev.map((appt) => (appt.id === id ? { ...appt, status } : appt))
    );
    
    toast.success(toastMessage, { icon });
  };

  const login = (password: string) => {
    if (password === adminPassword) {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      toast.success('Welcome back, Doctor!');
      return true;
    } else {
      toast.error('Invalid Credentials');
      return false;
    }
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
    toast.success('Logged out successfully');
  };

  const changePassword = (newPassword: string) => {
    setAdminPassword(newPassword);
    localStorage.setItem('adminPassword', newPassword);
    toast.success('Password updated successfully');
  };

  return (
    <AppointmentContext.Provider value={{ 
      appointments, 
      smsLogs, 
      addAppointment, 
      updateStatus, 
      isAdmin, 
      login, 
      logout, 
      changePassword 
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) throw new Error('useAppointments must be used within an AppointmentProvider');
  return context;
};
