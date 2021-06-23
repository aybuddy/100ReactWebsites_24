import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='layout-container'>
      <div className='layout-wrapper'>{children}</div>
    </div>
  );
};

export default Layout;
