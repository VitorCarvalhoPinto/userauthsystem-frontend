import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  loading = false, 
  className = '', 
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-xl font-semibold focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 btn-hover';
  
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-500 shadow-lg',
    secondary: 'bg-white/20 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-white/30 focus:ring-gray-500 shadow-md'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          Carregando...
        </div>
      ) : children}
    </button>
  );
}