import React from 'react';
import './Button.css';

const Button1 = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button className={`Button-container2 ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button1;
