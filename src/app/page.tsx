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
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Bem-vindo, {user.name}!</h1>
          <p className="text-gray-600 mb-6">Email: {user.email}</p>
          <Button onClick={logout} variant="secondary">
            Sair
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {showRegister ? <RegisterForm /> : <LoginForm />}
        <div className="text-center mt-4">
          <button
            onClick={() => setShowRegister(!showRegister)}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {showRegister ? 'Já tem conta? Faça login' : 'Não tem conta? Registre-se'}
          </button>
        </div>
      </div>
    </div>
  );
}