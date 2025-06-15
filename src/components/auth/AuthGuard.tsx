'use client';
import { useAuth } from '@/context/AuthContext';
import { ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  if (!user) {
    return fallback || <div>Acesso negado. Faça login.</div>;
  }

  return <>{children}</>;
}