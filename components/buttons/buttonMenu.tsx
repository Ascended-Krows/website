import React from 'react';
import { useDispatch } from 'react-redux';
import { openMobileMenu } from '../../store/componentsSlice';
import { IconMenu } from '../icons/iconMenu';

export const ButtonMenu = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
      aria-label="open mobile menu"
      onClick={() => {
        dispatch(openMobileMenu());
      }}
    >
      <IconMenu />
    </button>
  );
};
