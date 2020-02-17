import './Nav.scss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { SubMenu } from './submenu';

library.add(faChevronRight, faChevronLeft);

const chevronRLookup: IconLookup = { prefix: 'fas', iconName: 'chevron-right' };
const chevronRIconDefinition: IconDefinition = findIconDefinition(
  chevronRLookup
);

const chevronLLookup: IconLookup = { prefix: 'fas', iconName: 'chevron-left' };
const chevronLIconDefinition: IconDefinition = findIconDefinition(
  chevronLLookup
);

const Navbar: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useLocalStorage('navKey', false);
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

  return (
    <nav
      className={isOpen ? 'nav__wrapper slideRight' : 'nav__wrapper slideLeft'}
    >
      <div
        data-testid="clickElm"
        className="icon__wrapper"
        onClick={(): void => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FontAwesomeIcon
            className="icon"
            icon={chevronLIconDefinition}
            size="2x"
          />
        ) : (
          <FontAwesomeIcon
            className="icon"
            icon={chevronRIconDefinition}
            size="2x"
          />
        )}
      </div>
      <div className="nav-contents__wrapper">
        <div className="nav__user-section">
          <NavLink
            className="link sign-in"
            activeClassName="active__sign-in"
            to="/signin"
          >
            <span className="link__text">SIGN IN</span>
          </NavLink>
        </div>
        <div className="nav__main-section">
          <NavLink
            className="link"
            activeClassName="link__active"
            to="/"
            exact={true}
          >
            <span className="link__text">HOME</span>
          </NavLink>
          <NavLink className="link" activeClassName="link__active" to="/donate">
            <span className="link__text">DONATE</span>
          </NavLink>
          <SubMenu
            className="subMenu__wrapper"
            activeClassName="--active"
            isOpenSubMenu={openSubMenu}
          >
            <div
              onClick={(): void => setOpenSubMenu(!openSubMenu)}
              className="link__text--title"
            >
              OUR BOARD
            </div>
            <div
              id="js-subNavMenu"
              className={
                openSubMenu ? 'subMenu__contents openDown' : 'subMenu__contents'
              }
            >
              <NavLink
                className="subMenu__link"
                activeClassName="subMenu__link--active"
                to="/board/about"
              >
                <span className="link__text">ABOUT US</span>
              </NavLink>
              <NavLink
                className="subMenu__link"
                activeClassName="subMenu__link--active"
                to="/board/members"
              >
                <span className="link__text">MEMBERS</span>
              </NavLink>
              <NavLink
                className="subMenu__link"
                activeClassName="subMenu__link--active"
                to="/board/activity"
              >
                <span className="link__text">ACTIVITY</span>
              </NavLink>
            </div>
          </SubMenu>
          <NavLink
            className="link"
            activeClassName="link__active"
            to="/contact"
          >
            <span className="link__text">CONTACT</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
