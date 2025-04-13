import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Sidebar për navigim */}
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default Layout;
