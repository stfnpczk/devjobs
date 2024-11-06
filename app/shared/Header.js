'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import mobileBgHeader from '@/public/mobile/bg-pattern-header.svg';
import tabletBgHeader from '@/public/tablet/bg-pattern-header.svg';
import desktopBgHeader from '@/public/desktop/bg-pattern-header.svg';
import sunIcon from '@/public/desktop/icon-sun.svg';
import moonIcon from '@/public/desktop/icon-moon.svg';

import { useDeviceType } from '@/app/hooks/useWindowWidth';

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const [bgImage, setBgImage] = useState(null);
  const { isMobile, isTablet } = useDeviceType();

  useEffect(() => {
    setBgImage(
      isMobile ? mobileBgHeader : isTablet ? tabletBgHeader : desktopBgHeader
    );
  }, [isMobile, isTablet]);

  if (!resolvedTheme || !bgImage) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <header className='relative flex h-36 w-auto justify-center xl:mx-auto xl:max-w-[137.5rem]'>
      <div className='absolute z-10 flex w-full max-w-[var(--max-width-layout-mobile)] items-center justify-between px-8 py-6 md:max-w-[var(--max-width-layout-tablet)] md:px-0 md:py-10 xl:max-w-[--max-width-layout-desktop]'>
        <Link href='/' aria-label='Navigate to homepage'>
          <h1 className='text-3xl/6 font-bold text-white'>devjobs</h1>
        </Link>

        <div className='flex items-center gap-4'>
          <Image
            className='cursor-pointer can-hover:hover:opacity-75'
            src={sunIcon}
            alt='sun icon'
            width={20}
            height={18.5}
            onClick={() => setTheme('light')}
          />
          <button
            className='can-hover:hover:bg-gray-300 group relative h-6 w-12 rounded-full bg-white transition-colors duration-500 ease-in-out'
            onClick={toggleTheme}
            aria-label='Toggle theme'
          >
            <span
              className={`absolute left-1 top-1 h-4 w-4 transform rounded-full bg-blueLotus transition-transform duration-500 ease-in-out ${
                isDarkMode ? 'translate-x-6' : 'translate-x-0'
              } group-hover:bg-lightviolet`}
            />
          </button>
          <Image
            className='cursor-pointer can-hover:hover:opacity-75'
            src={moonIcon}
            alt='moon icon'
            width={12}
            height={12}
            onClick={() => setTheme('dark')}
          />
        </div>
      </div>

      <Image
        src={bgImage}
        sizes='100%'
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        width={375}
        height={136}
        priority={true}
        alt='background image'
      />
    </header>
  );
}
