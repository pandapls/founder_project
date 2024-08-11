import { FC, useState } from 'react';
import ArrowButton from '../common/ArrowButton';
interface SildeMenuProps {
  isOpen: boolean;
}

interface MenuItem {
  label: string;
  content: string[];
}

const menuItems: MenuItem[] = [
  { label: 'Home', content: [] },
  { label: 'Libraries', content: ['UI kits', 'Wireframes', 'All libraries'] },
  {
    label: 'Design templates',
    content: ['Desktop apps & websites', 'Mobile apps', 'Resume templates'],
  },
  {
    label: 'Design tools',
    content: [
      'Accessibility',
      'Editing & effects',
      'File organization',
      'Import & export',
      'Protoyping & animation',
    ],
  },

  {
    label: 'Visual assets',
    content: ['Fonts & typography', 'IIIustrations', 'Shapes & colors'],
  },
  {
    label: 'Whiteboarding',
    content: ['Brainstorming', 'Diagramming', 'Item 9Fun & games'],
  },
  { label: 'Icons', content: [] },
  { label: 'Development', content: [] },
  { label: 'Education', content: [] },
];

const SildeMenu: FC<SildeMenuProps> = ({ isOpen }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    if (!menuItems[index].content.length) {
      return;
    }
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div
      className={`fixed left-0 top-0 h-full w-1/4 bg-white z-20 transform transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <header className='flex justify-between items-center p-4'>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 16 16'
          >
            <path
              fill='#000'
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              d='M3.025 7.5h2.484c.06-1.737.427-3.263.971-4.265C4.615 3.83 3.225 5.49 3.026 7.5zM9.52 3.235c1.865.595 3.256 2.255 3.455 4.265h-2.484c-.06-1.737-.427-3.263-.971-4.265zM13.98 7.5C13.724 4.42 11.145 2 8 2 4.855 2 2.275 4.42 2.02 7.5H2v1h.02C2.276 11.58 4.856 14 8 14c3.145 0 5.725-2.42 5.98-5.5H14v-1h-.02zm-1.005 1h-2.484c-.06 1.736-.427 3.263-.972 4.265 1.866-.595 3.257-2.255 3.456-4.265zM8 13c.005 0 .024 0 .063-.02.043-.02.11-.065.198-.153.18-.183.388-.498.584-.969.348-.835.596-2.01.646-3.358H6.509c.05 1.349.298 2.523.646 3.358.196.47.404.786.584.969.087.088.155.133.198.153.04.02.058.02.063.02zm-1.52-.235c-.544-1.002-.912-2.529-.971-4.265H3.025c.2 2.01 1.59 3.67 3.456 4.265zM8 3c-.005 0-.024 0-.063.02-.043.02-.11.065-.198.153-.18.183-.388.498-.584.969-.348.835-.596 2.01-.646 3.358h2.982c-.05-1.349-.298-2.523-.646-3.358-.196-.47-.404-.786-.584-.969-.087-.088-.155-.132-.198-.154C8.023 3 8.005 3 8 3z'
            ></path>
          </svg>
        </span>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
          >
            <path
              fill='#000'
              fillOpacity='1'
              fillRule='evenodd'
              stroke='none'
              d='m8 8.707 6.646 6.647.708-.707L8.707 8l6.647-6.646-.707-.708L8 7.293 1.354.646l-.708.708L7.293 8 .646 14.646l.708.708L8 8.707z'
            ></path>
          </svg>
        </span>
      </header>
      <section>
        {menuItems.map((menuItem, index) => (
          <div key={menuItem.label}>
            {menuItem.content.length ? (
              <ArrowButton
                styles='block w-full text-left p-2 font-medium text-xl'
                label={menuItem.label}
                isOpen={openIndex === index}
                onClick={() => toggleMenu(index)}
              />
            ) : (
              <span className='block w-full text-left p-2 font-medium text-xl'>
                {menuItem.label}
              </span>
            )}
            {/* 内容区域 */}
            <div
              className={`pl-4 mt-2 transition-all ${openIndex === index ? 'block' : 'hidden'
                }`}
            >
              <ul className='space-y-2'>
                {menuItem.content.map((item, idx) => (
                  <li key={idx} className='pl-2 font-medium text-xl'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SildeMenu;
