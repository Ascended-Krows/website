import React from 'react';

export const IconWallet = ({ fillDark = 'fill-white' }) => {
  const className = `fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:${fillDark}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className={className}>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
    </svg>
  );
};
