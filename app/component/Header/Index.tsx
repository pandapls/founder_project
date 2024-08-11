'use client';
import Image from 'next/image';
import Link from 'next/link';
import WideNav from './ WideNav';
import NarrowNav from './NarrowNav';

export default function Index() {

  return (
    <header className="sticky top-0 border-b-[1px] w-full right-0 bg-white z-50">
      <div className="mx-auto flex justify-between items-center">
        <div className='flex items-center space-x-2 h-full'>
          <Link href="/communit" className='border-r-[1px] lg:border-none p-[15px]'>
            <Image src="/logo.svg" width={12} height={12} alt="logo" role='public' />
          </Link>

          {/* 小屏nav */}
          <NarrowNav />
        </div>
        {/* 宽屏nav */}
        <WideNav />

        {/* 检索/登录注册 */}
        <div className="flex items-center space-x-4 pr-[10px]">
          <input
            type="text"
            placeholder="Search"
            className="hidden lg:block border border-gray-300 rounded-lg px-4 py-1 focus:outline-none"
          />
          <a href="#" className="text-header-black">Log in</a>
          <button className="border text-header-black border-gray-500 rounded-[5px] px-4 py-1">Sign up</button>
        </div>
      </div>
    </header>
  )
}