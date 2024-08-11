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

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const nav = navRef.current;
      const hover = hoverRef.current;
      const { clientX, clientY } = event;

      if (nav && hover) {
        const navRect = nav.getBoundingClientRect();
        const hoverRect = hover.getBoundingClientRect();
        const isInNav = clientX >= navRect.left && clientX <= navRect.right && clientY >= navRect.top && clientY <= navRect.bottom;
        const isInHover = clientX >= hoverRect.left && clientX <= hoverRect.right && clientY >= hoverRect.top && clientY <= hoverRect.bottom;

        if (!isInNav && !isInHover) {
          handleMouseLeave();
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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


      <WdieNavHover ref={hoverRef} openButton={openButton} />
    </>
  );
};

export default WideNav;
