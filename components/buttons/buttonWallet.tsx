import React from 'react';
import { IconWallet } from '../icons/iconWallet';

export const ButtonWallet = ({ onClick = undefined }) => {
  return (
    <button
      className="js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
      onClick={onClick}
    >
      <IconWallet />
    </button>
  );
};
