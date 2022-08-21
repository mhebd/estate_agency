import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function UserLayout({ children }) {
  return (
    <div className="container-wrapper bg-white">
      <div id="top" />
      <Header />
      <div className="" style={{ height: '200px' }} />
      {children}
      <Footer />
    </div>
  );
}

export default UserLayout;
