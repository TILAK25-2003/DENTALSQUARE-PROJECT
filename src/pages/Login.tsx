import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppointments } from '../context/AppointmentContext';
import { Lock, AlertCircle } from 'lucide-react';

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
      setError('Invalid Password');
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-teal" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-navy">Doctor Login</h2>
          <p className="text-gray-500 text-sm">Access your appointment dashboard</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password"
              {...register('password', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal outline-none"
              placeholder="Enter password"
              onChange={() => setError('')}
            />
          </div>
          
          {error && (
            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-navy hover:bg-navy-light text-white font-bold py-3 rounded-lg transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">Default Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
