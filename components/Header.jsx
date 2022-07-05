import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import HeaderDropdown from './HeaderDropdown';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  const { data: session, status } = useSession();
  const [viewDropdown, setViewDropdown] = useState(false);
  return (
    <header className='grid grid-cols-3 place-items-center shadow-lg shadow-green-light'>
      <div className='col-span-3 md:col-span-1'>
        <img src='./ovikkhon-logo.png' alt='ovikkhon-logo' className='h-12' />
      </div>
      <nav className='col-span-1'>
        <ul className='flex items-center space-x-3 h-full'>
          <li className=''>
            <Link href='/'>Home</Link>
          </li>
          <li className=''>
            <Link href='/#!'>Resources</Link>
          </li>
          <li className=''>
            <Link href='/#!'>contact</Link>
          </li>
        </ul>
      </nav>
      <nav className='col-span-2 md:col-span-1 flex items-center'>
        <ul className='flex items-center space-x-3'>
          <li>
            <BsSearch />
          </li>
          <li className='outline-btn'>
            <button>Demo Quiz</button>
          </li>
          {!session ? (
            <li
              className='relative'
              onMouseEnter={() => setViewDropdown(true)}
              onMouseLeave={() => setViewDropdown(false)}
            >
              <button className='py-5 theme-btn'>Log in</button>
              {viewDropdown && <HeaderDropdown />}
            </li>
          ) : (
            <li
              className='relative cursor-pointer py-2.5'
              onMouseEnter={() => setViewDropdown(true)}
              onMouseLeave={() => setViewDropdown(false)}
            >
              <img
                src={session.user.image}
                alt='profile-photo'
                className=' max-h-10 rounded-full'
              />
              {viewDropdown && <HeaderDropdown />}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
