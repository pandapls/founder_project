import React, { useState } from 'react'
import SildeMenu from './SildeMenu'
import Overlay from './Overlay';
const NarrowNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenOverlay = () => setIsOpen(true);
  const handleCloseOverlay = () => setIsOpen(false);
  return (
    <>
      <div className='lg:hidden flex items-center space-x-2'>
        <button className="block" onClick={handleOpenOverlay}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#000000e5" fillRule="evenodd" d="M6 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4.5-.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 10a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0-5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM6 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd"></path></svg>
        </button>
        <span >Browse</span>
      </div>
      <SildeMenu isOpen={isOpen} />
      <Overlay isOpen={isOpen} onClose={handleCloseOverlay} />
    </>
  )
}

export default NarrowNav
