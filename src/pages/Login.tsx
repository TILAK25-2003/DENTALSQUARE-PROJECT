import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppointments } from '../context/AppointmentContext';
import { Lock, AlertCircle, ShieldCheck } from 'lucide-react';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAppointments();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = (data: any) => {
    const success = login(data.password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Invalid Password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <ShieldCheck className="text-teal" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-navy">Doctor Portal</h2>
          <p className="text-gray-500 text-sm mt-2">Secure access for authorized personnel only</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="password"
                {...register('password', { required: true })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all"
                placeholder="Enter your secure password"
                onChange={() => setError('')}
              />
            </div>
          </div>
          
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100 animate-pulse">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-navy hover:bg-navy-light text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-navy/20 hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Access Dashboard
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            Unauthorized access is prohibited. <br/>
            Contact administration if you have trouble logging in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
