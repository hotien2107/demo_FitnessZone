import React from 'react';

const Navbar = ({ children }) => {
  return <div className='fixed bottom-0 left-0 h-32 w-full bg-white rounded-2xl'>{children}</div>;
};

export default Navbar;
