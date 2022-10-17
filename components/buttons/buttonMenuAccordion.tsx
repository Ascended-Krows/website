import React from 'react';
import { IconArrowDown } from '../icons/iconArrowDown';

export const ButtonMenuAccordion = ({ title, navText, navMenu }) => {
  const handleItemDropdown = (e) => {
    const target = e.target.closest('li');

    if (!target.classList.contains('show')) {
      target.classList.add('show');
    } else {
      target.classList.remove('show');
    }
  };

  return (
    <button
      className={
        'dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full'
      }
      onClick={(e) => handleItemDropdown(e)}
    >
      <span className={navText === navMenu ? 'text-accent' : ''}>{title}</span>
      <i className="lg:hidden">
        <IconArrowDown />
      </i>
    </button>
  );
};
