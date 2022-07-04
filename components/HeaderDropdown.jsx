import React from 'react';
import { signIn } from 'next-auth/react';

const HeaderDropdown = () => {
  return (
    <div className='absolute top-14 flex flex-col p-5 min-w-max bg-button'>
      <button onClick={() => signIn('google')} className='sign-btn'>
        Sign in with Google
      </button>
      <button onClick={() => signIn('facebook')} className='sign-btn'>
        Sign in with Facebook
      </button>
    </div>
  );
};

export default HeaderDropdown;
