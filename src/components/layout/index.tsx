import React, { ReactElement } from 'react';
import Navbar from '../navbar';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
