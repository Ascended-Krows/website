import React from 'react';
import Link from 'next/link';

export const MenuItem = ({ text, url, navItemValue, onClick }) => {
  return (
    <li>
      <Link href={url}>
        <a
          className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
          onClick={() => onClick(text)}
        >
          <span
            className={
              navItemValue === text
                ? 'font-display text-accent text-sm'
                : 'font-display text-jacarta-700 text-sm dark:text-white'
            }
          >
            {text}
          </span>
        </a>
      </Link>
    </li>
  );
};
