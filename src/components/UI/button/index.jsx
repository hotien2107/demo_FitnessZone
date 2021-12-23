import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='h-20 w-full bg-gradient-to-br from-green-500 to-green-400 text-white text-4xl font-bold rounded-2xl'>
      {children}
    </button>
  );
};

export default Button;
