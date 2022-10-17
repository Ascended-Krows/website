import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ButtonDarkMode } from '../buttons/buttonDarkMode';
import { Logo } from '../logo/logo';
import { ButtonProfile } from '../buttons/buttonProfile';
import { ButtonMenu } from '../buttons/buttonMenu';
import MobileNavbar from './mobileNavbar';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { mobileMenu } = useSelector((state: RootState) => state.components);

  const handleSticky = function () {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSticky);
  }, []);

  const MobileMenuNavbar = () => (
    <div>
      <header
        className={
          scroll
            ? 'js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky h-full'
            : 'js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors h-full'
        }
      >
        <div className="flex items-center px-6 py-6 xl:px-24 ">
          <Logo />

          {/* <!-- Menu / Actions --> */}
          <MobileNavbar />
        </div>
      </header>
    </div>
  );

  const MenuNavbar = () => (
    <div>
      <header
        className={
          scroll
            ? 'js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky'
            : 'js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors'
        }
      >
        <div className="flex items-center px-6 py-6 xl:px-24 ">
          <Logo />

          {/* <!-- Menu / Actions --> */}
          <MobileNavbar />

          {/* <!-- Mobile Menu Actions --> */}
          <div className="ml-auto flex lg:hidden">
            <ButtonProfile />
            <ButtonDarkMode />
            <ButtonMenu />
          </div>
        </div>
      </header>
    </div>
  );

  if (mobileMenu) {
    return <MobileMenuNavbar />;
  } else {
    return <MenuNavbar />;
  }
};

export default Navbar;
