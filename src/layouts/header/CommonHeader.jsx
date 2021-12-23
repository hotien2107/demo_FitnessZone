import React from 'react';

const CommonHeader = ({ children, className }) => {
  return <header className={'h-32 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl px-12 py-4 ' + className}>{children}</header>;
};

export default CommonHeader;
