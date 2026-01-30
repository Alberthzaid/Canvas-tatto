import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'px-6 py-2 text-xs font-black tracking-widest uppercase rounded-sm transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-primary text-black hover:bg-white gold-border-glow hover:scale-105',
    secondary: 'border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-black'
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
