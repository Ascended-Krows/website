import React from 'react';
import Link from 'next/link';

export const Logo = ({ href = '/', alt = 'Ascended Krows Marketplace' }) => {
  return (
    <Link href={href}>
      <a className="shrink-0">
        <img src="/images/logo.png" className="max-h-7 h-auto dark:hidden" alt={alt} />
        <img src="/images/logo-white.png" className="max-h-7 h-auto hidden dark:block" alt={alt} />
      </a>
    </Link>
  );
};
