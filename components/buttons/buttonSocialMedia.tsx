import React from 'react';
import Link from 'next/link';

export const ButtonSocialMedia = ({ id, href, text }) => {
  return (
    <Link href={href} key={id}>
      <a target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
        <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
        </svg>
      </a>
    </Link>
  );
};
