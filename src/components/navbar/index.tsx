import React, { useEffect, useState } from 'react';
import { NavWidget, NavList, List, BurgerWidget } from './element';
import images from '../../assets';
import { Link } from 'react-router-dom';

const Navbar = ({
  handleToggleSideBar,
}: {
  handleToggleSideBar: () => void;
}) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleCheckScroll = () => {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setIsScroll(true) : setIsScroll(false);
    };
    window.addEventListener('scroll', handleCheckScroll);
    return () => window.removeEventListener('scroll', handleCheckScroll);
  }, []);

  const renderBurgerIcon = () => (
    <BurgerWidget onClick={handleToggleSideBar}>
      <img src={images.burger} alt="burger" />
    </BurgerWidget>
  );

  const renderListMenu = () => (
    <NavWidget isSticky={isScroll}>
      <div>
        <Link to="/">
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <NavList>
        <List>About Us</List>
        <List>Program</List>
        <List>Hall of Fame</List>
        <List>Career</List>
        <List>Partnership</List>
        <List>Dashboard</List>
        <List>
          <Link to="/bookmark-list">
            <button>Bookmark List</button>
          </Link>
        </List>
      </NavList>
      {renderBurgerIcon()}
    </NavWidget>
  );

  return renderListMenu();
};

export default Navbar;
