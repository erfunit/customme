import React from 'react';
import TopBanner from './top-banner';
import Navbar from './navbar';
import Navigations from './navigations';
import { Footer } from './footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between">
      <div>
        <TopBanner />
        <Navbar />
        <hr className="h-[1px] w-full bg-gray-4" />
        <Navigations />
        <main className="container">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
