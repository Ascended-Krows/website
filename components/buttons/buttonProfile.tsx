import React from 'react';
import Link from 'next/link';
import { IconProfile } from '../icons/iconProfile';

export const ButtonProfile = ({ href = '/profile/me' }) => {
  return (
    <Link href={href}>
      <a
        className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
        aria-label="profile"
      >
        <IconProfile />
      </a>
    </Link>
  );
};
