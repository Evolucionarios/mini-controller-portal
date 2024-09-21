import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHeader from '../components/base-layout/layout-header/nav-bar-header';

const BaseLayout = () => {
  return (
    <div>
      <NavbarHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
