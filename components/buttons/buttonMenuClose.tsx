import React from 'react';
import { useDispatch } from 'react-redux';
import { closeMobileMenu } from '../../store/componentsSlice';
import { IconClose } from '../icons/iconClose';

export const ButtonMenuClose = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
      onClick={() => dispatch(closeMobileMenu())}
    >
      <IconClose />
    </button>
  );
};
