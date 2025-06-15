import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 ${className}`}>
      {children}
    </div>
  );
}