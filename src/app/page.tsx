'use client';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { LoginForm } from '../components/auth/LoginForm';
import { RegisterForm } from '../components/auth/RegisterForm';
import { Button } from '@/components/Button';

export default function Home() {
  const { user, logout } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center max-w-md w-full border border-white/20 fade-in">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{user.name.charAt(0).toUpperCase()}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Bem-vindo!</h1>
            <h2 className="text-xl text-indigo-600 font-semibold">{user.name}</h2>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="text-gray-600 text-sm font-medium">Email:</p>
            <p className="text-gray-800 font-semibold">{user.email}</p>
          </div>
          
          <Button 
            onClick={logout} 
            variant="secondary" 
            className="w-full btn-hover"
          >
            Sair da Conta
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 fade-in">
          <h1 className="text-4xl font-bold text-white mb-2">Bem-vindo</h1>
          <p className="text-white/80 text-lg">Faça login ou crie sua conta</p>
        </div>
        
        <div className="fade-in">
          {showRegister ? <RegisterForm /> : <LoginForm />}
        </div>
        
        <div className="text-center mt-6">
          <button
            onClick={() => setShowRegister(!showRegister)}
            className="text-white/90 hover:text-white transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-white/10"
          >
            {showRegister ? 'Já tem conta? Faça login' : 'Não tem conta? Registre-se'}
          </button>
        </div>
      </div>
    </div>
  );
}