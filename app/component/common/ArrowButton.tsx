import React from 'react';
import classNames from 'classnames';
interface ArrowButtonProps {
  label: React.ReactNode;
  isOpen: boolean;
  onMouseEnter?: () => void;
  onClick?: () => void
  styles?: string;
}
// 通用 Button 组件
const ArrowButton: React.FC<ArrowButtonProps> = ({
  label,
  isOpen,
  onMouseEnter,
  onClick,
  styles
}) => (
  <div
    onMouseEnter={onMouseEnter && onMouseEnter}
    onClick={onClick && onClick}
    className={classNames('flex items-center cursor-pointer', styles)}
  >
    <span className={`hover:text-gray-700 ${isOpen ? 'text-header-red' : ''}`}>
      {label}
    </span>
    <span className='ml-1'>
      <svg
        className={`w-3 h-3 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M19 9l-7 7-7-7'
        />
      </svg>
    </span>
  </div>
);

export default ArrowButton;
