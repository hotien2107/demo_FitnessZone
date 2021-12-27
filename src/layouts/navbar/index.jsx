import React from "react";

const Navbar = ({ children }) => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-32 bg-white rounded-2xl">
      {children}
    </div>
  );
};

export default Navbar;
