import Link from 'next/link';
import { useState } from "react";

/**
* Basic nav component that turns into a hamburger menu with a dropdown when below a certain pixel-width.
*/

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white">
      <div className="relative flex items-center justify-between">
        <div className="sm:hidden absolute flex items-center inset-y-5 right-0">
          <button type="button" className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border-2 border-grey-700" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setShowMenu(!showMenu)}>
            <span className="sr-only">Open main menu</span>
            <svg className={`${!showMenu ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="hidden sm:block flex items-center justify-center">
          <div className="">
            <div className="flex">
              <Link href="/planning">
                <a className='text-2xl hover:bg-gray-100 px-3 py-2 rounded-md'>Planning</a>
              </Link>
              <Link href="/">
                <a className='text-2xl hover:bg-gray-100 px-3 py-2 rounded-md'>Orders</a>
              </Link>
              <Link href="/drivers">
                <a className='text-2xl hover:bg-gray-100 px-3 py-2 rounded-md'>Drivers</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${showMenu ? 'grid' : 'hidden'} p-2 sm:hidden absolute inset-y-16 right-8 bg-white border-2 h-36 rounded-md`} id="mobile-menu">
        <Link href="/planning">
          <a className="hover:bg-gray-100 p-2">Planning</a>
        </Link>
        <Link href="/">
          <a className="hover:bg-gray-100 p-2">Orders</a>
        </Link>
        <Link href="/drivers">
          <a className="hover:bg-gray-100 p-2">Drivers</a>
        </Link>
      </div>
    </nav>
  );
}