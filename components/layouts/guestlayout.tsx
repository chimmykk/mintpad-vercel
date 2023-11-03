
import React from 'react';

const GuestLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className=" font-graphikSemibold antialiased bg-waves-dark bg-cover">
      {children}
    </div>
  );
};

export default GuestLayout;
