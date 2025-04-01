import React from 'react';
import './Button.css';

const Button2 = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button className={`Button-container ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button2;
