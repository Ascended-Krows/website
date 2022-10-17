import React from 'react';

export const IconMenu = ({ fillDark = 'fill-white' }) => {
  const className = `fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:${fillDark}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className={className}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
    </svg>
  );
};
