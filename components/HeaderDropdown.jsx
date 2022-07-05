import React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const HeaderDropdown = () => {
  const { data: session, state } = useSession();
  return (
    <div className='absolute top-15 right-0 flex flex-col p-5 min-w-max bg-white rounded-md shadow-md'>
      {!session ? (
        <>
          <div
            onClick={() => signIn('google')}
            className='sign-btn bg-[#DF4930]'
          >
            <div>
              <BsGoogle />
            </div>
            <div className='flex-grow'>Sign in with Google</div>
          </div>
          <div
            onClick={() => signIn('facebook')}
            className='sign-btn bg-[#507CC0]'
          >
            <div>
              <FaFacebookF />
            </div>
            <div className='flex-grow'>Sign in with Facebook</div>
          </div>
        </>
      ) : (
        <div className='flex flex-col space-y-3'>
          <div className='cursor-pointer'>
            <Link href={`/user/${session.user.name}`}>Profile</Link>
          </div>
          <div className='cursor-pointer' onClick={signOut}>
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
