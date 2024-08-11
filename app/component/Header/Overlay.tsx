import React from 'react';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed bg-black bg-opacity-50 z-10 inset-0"
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default Overlay;
