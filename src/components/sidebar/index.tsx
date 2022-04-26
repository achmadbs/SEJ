import React from 'react';
import { Container, ButtonWidget, ListWrapper } from './element';
import images from '../../assets';
import { Link } from 'react-router-dom';

interface SideBar {
  isShowSideBar: boolean;
  handleToggleSideBar: () => void;
}

const Sidebar = ({ isShowSideBar, handleToggleSideBar }: SideBar) => {
  return (
    <Container isShowSideBar={isShowSideBar}>
      <ButtonWidget>
        <button onClick={handleToggleSideBar}>
          <img src={images.close} alt="close-icon" />
        </button>
      </ButtonWidget>
      <ListWrapper>
        <ul>
          <li>
            <div>
              <p>Tentang Kami</p>
            </div>
          </li>
          <li>
            <div>
              <p>Program</p>
            </div>
          </li>
          <li>
            <div>
              <p>Hall of fame</p>
            </div>
          </li>
          <li>
            <div>
              <p>Career</p>
            </div>
          </li>
          <li>
            <div>
              <p>Partnership</p>
            </div>
          </li>
          <li>
            <div>
              <p>Dashboard</p>
            </div>
          </li>
          <li>
            <Link to="/bookmark-list">
              <button>Bookmark List</button>
            </Link>
          </li>
        </ul>
      </ListWrapper>
    </Container>
  );
};

export default Sidebar;
