import React from 'react';
import { useTheme } from 'next-themes';
import { IconMoon } from '../icons/iconMoon';
import { IconSun } from '../icons/iconSun';

export const ButtonDarkMode = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme == 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button
      className="js-dark-mode-trigger border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
      onClick={handleTheme}
    >
      <IconMoon />
      <IconSun />
    </button>
  );
};
