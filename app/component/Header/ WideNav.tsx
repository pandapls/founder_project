import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ArrowButton from '../common/ArrowButton';
import WdieNavHover from './WideNavHover';
export enum ButtonKey {
  DesignResources = 'designResources',
  Plugins = 'plugins',
  Whiteboarding = 'whiteboarding',
  Presentations = 'presentations',
}
const WideNav = () => {
  const [openButton, setOpenButton] = useState<ButtonKey | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  const handleChange = (button: ButtonKey) => {
    if (button === openButton) {
      return;
    }
    setOpenButton(button);
  };

  const handleMouseLeave = () => {
    setOpenButton(null);
  };


  return (
    <>
      <nav className='hidden lg:flex space-x-4 items-center mr-auto' ref={navRef}
      >
        <Link href='/communit'>
          <span className='hover:text-gray-700 font-semibold'>Community</span>
        </Link>
        <ArrowButton
          label='Design resources'
          isOpen={openButton === ButtonKey.DesignResources}
          onMouseEnter={() => handleChange(ButtonKey.DesignResources)}
        />
        <ArrowButton
          label='Plugins'
          isOpen={openButton === ButtonKey.Plugins}
          onMouseEnter={() => handleChange(ButtonKey.Plugins)}
        />
        <ArrowButton
          label='Whiteboarding'
          isOpen={openButton === ButtonKey.Whiteboarding}
          onMouseEnter={() => handleChange(ButtonKey.Whiteboarding)}
        />
        <ArrowButton
          label={
            <span>
              Presentations{' '}
              <span className='ml-1 text-header-red rounded-[5px] text-[12px] bg-red-50 px-[4px]'>
                New
              </span>
            </span>
          }
          isOpen={openButton === ButtonKey.Presentations}
          onMouseEnter={() => handleChange(ButtonKey.Presentations)}
        />
      </nav>


      <WdieNavHover onMouseLeave={handleMouseLeave} openButton={openButton} />
    </>
  );
};

export default WideNav;
