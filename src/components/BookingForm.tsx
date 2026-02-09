import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CLINICS, SERVICES, CONTACT_INFO } from '../data/constants';
import { useAppointments } from '../context/AppointmentContext';
import { Calendar, MapPin, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

type BookingFormData = {
  patientName: string;
  phone: string;
  email: string;
  clinicId: string;
  serviceId: string;
  date: string;
  time: string;
  message: string;
};

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addAppointment } = useAppointments();
  const preSelectedClinic = searchParams.get('location');
  
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BookingFormData>({
    defaultValues: {
      clinicId: preSelectedClinic || '',
    }
  });

  useEffect(() => {
    if (preSelectedClinic) {
      setValue('clinicId', preSelectedClinic);
    }
  }, [preSelectedClinic, setValue]);

  const onSubmit = (data: BookingFormData) => {
    addAppointment(data);
    navigate('/booking-success');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-navy p-6 text-white text-center">
        <h2 className="text-2xl font-bold">Book Your Appointment</h2>
        <p className="text-teal-light text-sm mt-1">Fill in the details below and we will confirm your slot.</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
        {/* Personal Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-navy border-b pb-2">Patient Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  {...register('patientName', { required: 'Name is required' })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>
              {errors.patientName && <p className="text-red-500 text-xs mt-1">{errors.patientName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  {...register('phone', { required: 'Phone is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' } })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none"
                  placeholder="9876543210"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  {...register('email')}
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-semibold text-navy border-b pb-2">Appointment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Clinic *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                <select 
                  {...register('clinicId', { required: 'Please select a clinic' })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="">Select Location</option>
                  {CLINICS.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              {errors.clinicId && <p className="text-red-500 text-xs mt-1">{errors.clinicId.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Required *</label>
              <div className="relative">
                <CheckCircle className="absolute left-3 top-3 text-gray-400" size={18} />
                <select 
                  {...register('serviceId', { required: 'Please select a service' })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="">Select Service</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
              {errors.serviceId && <p className="text-red-500 text-xs mt-1">{errors.serviceId.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  {...register('date', { required: 'Date is required' })}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none"
                />
              </div>
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                <select 
                  {...register('time', { required: 'Time is required' })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="">Select Time Slot</option>
                  <optgroup label="Morning">
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                  </optgroup>
                  <optgroup label="Evening">
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                  </optgroup>
                </select>
              </div>
              {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                <textarea 
                  {...register('message')}
                  rows={3}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none"
                  placeholder="Any specific concerns?"
                />
              </div>
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-teal hover:bg-teal-dark text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-teal/20"
        >
          Confirm Booking
        </button>
        
        <p className="text-xs text-center text-gray-500">
          By booking, you agree to be contacted via Phone/WhatsApp for confirmation.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
