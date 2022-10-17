import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from '../../store/store';
import { closeMobileMenu } from '../../store/componentsSlice';
import UserId from '../user/userId';
import { MetamaskButtonWallet, MetamaskButtonWalletIcon } from '../crypto/metamask/metamask';
import { accountMenu, managementMenu, marketplaceMenu, menuMap } from '../data/navbarData';
import { socialIcons } from '../data/footer';
import { IconProfile } from '../icons/iconProfile';
import { ButtonDarkMode } from '../buttons/buttonDarkMode';
import { Logo } from '../logo/logo';
import { ButtonMenuClose } from '../buttons/buttonMenuClose';
import { ButtonMenuAccordion } from '../buttons/buttonMenuAccordion';
import { ButtonSocialMedia } from '../buttons/buttonSocialMedia';
import { MenuItem } from './menuItem';

const MobileNavbar = () => {
  const { mobileMenu } = useSelector((state: RootState) => state.components);
  const dispatch = useDispatch();
  const [profileShow, setProfileShow] = useState(false);
  const router = useRouter();
  const [navText, setNavText] = useState('');
  const [navItemValue, setNavItemValue] = useState('');

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        dispatch(closeMobileMenu());
      }
    });

    localStorage.setItem('navItemValue', router.asPath === '/' ? 'collections' : router.asPath.substring(1));

    const value = localStorage.getItem('navItemValue');
    setNavItemValue(value || 'collections');

    for (const menuName of Object.keys(menuMap)) {
      if (menuMap[menuName]?.includes(navItemValue)) {
        setNavText(menuName);
        break;
      }
    }
  }, [dispatch, navItemValue, router]);

  const menuItemClick = (item) => {
    localStorage.setItem('navItemValue', item);
    setNavItemValue(item);
    dispatch(closeMobileMenu());
  };

  return (
    <div
      className={
        mobileMenu
          ? 'js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent nav-menu--is-open'
          : 'js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent'
      }
    >
      {/* <!-- Mobile Logo / Menu Close --> */}
      <div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
        <Logo />
        <ButtonMenuClose />
      </div>

      {/* <!-- Mobile Menu Divider --> */}
      <div className="relative mt-20 w-full lg:hidden">
        <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0" />
      </div>

      {/* <!-- Primary Nav --> */}
      <nav className="navbar w-full">
        <ul className="flex flex-col lg:flex-row">
          <li className="js-nav-dropdown nav-item dropdown group relative">
            <ButtonMenuAccordion navText={navText} navMenu="marketplace" title="Marketplace" />
            <ul className="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative">
              {marketplaceMenu.map(({ menu, text, url }) => {
                return (
                  <MenuItem
                    key={menu + text}
                    text={text}
                    url={url}
                    navItemValue={navItemValue}
                    onClick={menuItemClick}
                  />
                );
              })}
            </ul>
          </li>
          <li className="js-nav-dropdown nav-item dropdown group relative">
            <ButtonMenuAccordion navText={navText} navMenu="management" title="Management" />
            <ul className="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative">
              {managementMenu.map(({ menu, text, url }) => {
                return (
                  <MenuItem
                    key={menu + text}
                    text={text}
                    url={url}
                    navItemValue={navItemValue}
                    onClick={menuItemClick}
                  />
                );
              })}
            </ul>
          </li>
          <li className="js-nav-dropdown nav-item dropdown group relative">
            <ButtonMenuAccordion navText={navText} navMenu="account" title="Account" />
            <ul
              className="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative"
              aria-labelledby="navDropdown-4"
            >
              {accountMenu.map(({ menu, text, url }) => {
                return (
                  <MenuItem
                    key={menu + text}
                    text={text}
                    url={url}
                    navItemValue={navItemValue}
                    onClick={menuItemClick}
                  />
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>

      {/* <!-- Mobile Connect Wallet / Socials --> */}
      <div className="mt-10 w-full lg:hidden">
        <MetamaskButtonWallet />

        <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0" />

        {/* <!-- Socials --> */}
        <div className="flex items-center justify-center space-x-5">
          {socialIcons.map(({ id, href, text }) => {
            return <ButtonSocialMedia key={id} id={id} text={text} href={href} />;
          })}
        </div>
      </div>

      {/* <!-- Actions --> */}
      <div className="ml-8 hidden lg:flex xl:ml-12">
        {/* <!-- Wallet --> */}
        <MetamaskButtonWalletIcon />

        {/* <!-- Profile --> */}
        <div className="js-nav-dropdown group-dropdown relative">
          <button
            className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
            onMouseEnter={() => setProfileShow(true)}
            onMouseLeave={() => setProfileShow(false)}
          >
            <IconProfile />
          </button>
          <div
            className={
              profileShow
                ? 'dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl show lg:visible lg:opacity-100'
                : 'dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0'
            }
            onMouseEnter={() => setProfileShow(true)}
            onMouseLeave={() => setProfileShow(false)}
          >
            <UserId
              classes="js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white"
              userId="0x7a86c0b064171007716bbd6af96676935799a63e"
              shortId={true}
            />

            <div className="dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4">
              <span className="dark:text-jacarta-200 text-sm font-medium tracking-tight">Balance</span>
              <div className="flex items-center">
                <svg className="icon icon-ETH -ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
                  <use xlinkHref="/icons.svg#icon-ETH"></use>
                </svg>
                <span className="text-green text-lg font-bold">10 ETH</span>
              </div>
            </div>
            <Link href="/user/avatar_6">
              <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                <IconProfile />
                <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">My Profile</span>
              </a>
            </Link>
            <Link href="/profile/user_avatar">
              <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                </svg>
                <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">Edit Profile</span>
              </a>
            </Link>
            <Link href="/login">
              <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"></path>
                </svg>
                <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">Sign out</span>
              </a>
            </Link>
          </div>
        </div>
        <ButtonDarkMode />
      </div>
    </div>
  );
};

export default MobileNavbar;
