import Image from 'next/image';
import { forwardRef } from 'react';
import { ButtonKey } from './ WideNav';

interface WdieNavHoverProps {
  openButton: ButtonKey | null;
}

type Data = {
  [key in ButtonKey]: {
    content: React.ReactNode;
  }[];
};

const WdieNavHover = forwardRef<HTMLDivElement, WdieNavHoverProps>(
  ({ openButton }, ref) => {
    const data: Data = {
      [ButtonKey.DesignResources]: [
        {
          content: (
            <>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/c9620888b341fdf8bfcb6cb53ef798b8efd27159'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/c9620888b341fdf8bfcb6cb53ef798b8efd27159'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          content: (
            <div className='flex flex-col items-start px-[16px]'>
              <p className='mb-[12px] font-semibold'>Design Templates</p>
              <p className='mb-[12px]'>Desktop apps & websites</p>
              <p className='mb-[12px]'>Mobile apps</p>
              <p className='mb-[12px]'>Protfolio templates</p>
              <p className='mb-[12px]'>Resume templates</p>
            </div>
          ),
        },
        {
          content: (
            <div className='flex flex-col items-start px-[16px]'>
              <p className='mb-[12px] font-semibold'>Assets</p>
              <p className='mb-[12px]'>LLLustrations</p>
              <p className='mb-[12px]'>Icons</p>
              <p className='mb-[12px]'>Shapes & colors</p>
            </div>
          ),
        },
      ],
      [ButtonKey.Plugins]: [
        {
          content: (
            <>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/d50b185c8aba27a30207c8d938fcd13faadf9f32'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/d50b185c8aba27a30207c8d938fcd13faadf9f32'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          content: (
            <>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/d50b185c8aba27a30207c8d938fcd13faadf9f32'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/d50b185c8aba27a30207c8d938fcd13faadf9f32'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          content: (
            <div className='flex flex-col items-start px-[16px]'>
              <p className='mb-[12px] font-semibold'>More plugins</p>
              <p className='mb-[12px]'>Import & export</p>
              <p className='mb-[12px]'>Accessibility</p>
              <p className='mb-[12px]'>Prototyping & animation</p>
            </div>
          ),
        },
      ],
      [ButtonKey.Whiteboarding]: [
        {
          content: (
            <>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/fcbfaf7de5395838863bf7d8dd3dc5805bb509d6'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/fcbfaf7de5395838863bf7d8dd3dc5805bb509d6'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          content: (
            <>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/fcbfaf7de5395838863bf7d8dd3dc5805bb509d6'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
              <div className='flex justify-between h-[88px] p-4 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full'>
                  <h3 className='text-sm font-medium'>File organization</h3>
                  <p className='text-ssm text-gray-500 w-[170px]'>
                    Get “type A” files and layers
                  </p>
                </div>
                <div className='relative w-[130px] h-full'>
                  <Image
                    className='absolute top-[10px] right-[-25px] rot  rounded-xl shadow-custom transform rotate-[-3deg] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300'
                    src='https://static.figma.com/uploads/fcbfaf7de5395838863bf7d8dd3dc5805bb509d6'
                    width={130}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          content: (
            <div className='flex flex-col items-start px-[16px]'>
              <p className='mb-[12px] font-semibold'>More whiteboarding</p>
              <p className='mb-[12px]'>Strategic planning</p>
            </div>
          ),
        },
      ],
      [ButtonKey.Presentations]: [
        {
          content: (
            <>
              <div className='flex flex-col justify-between h-[230px] w-[380px] p-5 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full p-[40px] pl-0'>
                  <h3 className='text-sm font-medium'>Strartup pitch</h3>
                  <p className='text-ssm text-gray-500'>
                    Share the story behind your big idea
                  </p>
                </div>
                <div className='relative w-full h-full group'>
                  <div className='absolute bottom-0 right-0 w-[130px] h-[67px] z-[0] rounded-sm bg-white shadow-custom'></div>
                  <div className='absolute  bottom-[5px] right-[-3px] w-[135px] h-[67px] z-[1] rounded-sm bg-[#ffface] shadow-custom  transform group-hover:translate-x-[-10px] group-hover:translate-y-[-5px] group-hover:rotate-[-5deg] transition-transform duration-300'></div>
                  <Image
                    className='absolute bottom-[10px] right-[-7px] z-[2] rounded-sm shadow-custom transform group-hover:translate-x-[-20px] group-hover:translate-y-[-10px] group-hover:rotate-[-10deg] transition-transform duration-300'
                    src='https://static.figma.com/uploads/b88b1be49cdff971481ddb424741db908d32e124'
                    width={145}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          content: (
            <>
              <div className='flex flex-col justify-between h-[230px] w-[380px] p-5 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full p-[40px] pl-0'>
                  <h3 className='text-sm font-medium'>Strartup pitch</h3>
                  <p className='text-ssm text-gray-500'>
                    Share the story behind your big idea
                  </p>
                </div>
                <div className='relative w-full h-full group'>
                  <div className='absolute bottom-0 right-0 w-[130px] h-[67px] z-[0] rounded-sm bg-white shadow-custom'></div>
                  <div className='absolute  bottom-[5px] right-[-3px] w-[135px] h-[67px] z-[1] rounded-sm bg-[#ffface] shadow-custom  transform group-hover:translate-x-[-10px] group-hover:translate-y-[-5px] group-hover:rotate-[-5deg] transition-transform duration-300'></div>
                  <Image
                    className='absolute bottom-[10px] right-[-7px] z-[2] rounded-sm shadow-custom transform group-hover:translate-x-[-20px] group-hover:translate-y-[-10px] group-hover:rotate-[-10deg] transition-transform duration-300'
                    src='https://static.figma.com/uploads/b88b1be49cdff971481ddb424741db908d32e124'
                    width={145}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          content: (
            <>
              <div className='flex flex-col justify-between h-[230px] w-[380px] p-5 bg-white rounded-lg border overflow-hidden'>
                <div className='flex justify-center flex-col h-full p-[40px] pl-0'>
                  <h3 className='text-sm font-medium'>Strartup pitch</h3>
                  <p className='text-ssm text-gray-500'>
                    Share the story behind your big idea
                  </p>
                </div>
                <div className='relative w-full h-full group'>
                  <div className='absolute bottom-0 right-0 w-[130px] h-[67px] z-[0] rounded-sm bg-white shadow-custom'></div>
                  <div className='absolute  bottom-[5px] right-[-3px] w-[135px] h-[67px] z-[1] rounded-sm bg-[#ffface] shadow-custom  transform group-hover:translate-x-[-10px] group-hover:translate-y-[-5px] group-hover:rotate-[-5deg] transition-transform duration-300'></div>
                  <Image
                    className='absolute bottom-[10px] right-[-7px] z-[2] rounded-sm shadow-custom transform group-hover:translate-x-[-20px] group-hover:translate-y-[-10px] group-hover:rotate-[-10deg] transition-transform duration-300'
                    src='https://static.figma.com/uploads/b88b1be49cdff971481ddb424741db908d32e124'
                    width={145}
                    height={80}
                    alt='logo'
                    role='public'
                  />
                </div>
              </div>
            </>
          ),
        },
      ],
    };
    return (
      <div
        className={
          `fixed top-[48px] left-[110px]
          transition-transform-opacity 
          duration-300 ease-out
          bg-[#fcfcfc]
          ${openButton ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`
        }
        ref={ref}
      >
        <div
          className={
            `
            ${openButton ? '' : 'hidden'}
            pt-6 pr-6 pb-8 pl-6
            rounded-lg 
            bg-gray-5
            flex
            flex-row
            justify-between
            border border-gray-300
            gap-4
            -mt-px
            box-border
            shadow-custom`
          }
        >

          {openButton && data[openButton]
            ? data[openButton].map((item, index) => {
              return (
                <div
                  className='flex flex-col justify-betwee gap-4 min-w-[325px]'
                  key={index}
                >
                  {item.content}
                </div>
              );
            })
            : null}
        </div>
      </div>
    );
  }
);
WdieNavHover.displayName = 'WdieNavHover';
export default WdieNavHover;
