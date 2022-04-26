import React, { ReactNode, useState } from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import { LayoutWidget } from './element';

const Layout = ({ children }: { children: ReactNode }) => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);

  const handleToggleSideBar = () => {
    setIsShowSideBar((prevState) => !prevState);
  };

  return (
    <LayoutWidget isShowSideBar={isShowSideBar}>
      <div style={{ width: '100%' }}>
        <Navbar handleToggleSideBar={handleToggleSideBar} />
        {children}
      </div>
      <Sidebar
        isShowSideBar={isShowSideBar}
        handleToggleSideBar={handleToggleSideBar}
      />
    </LayoutWidget>
  );
};

export default Layout;
