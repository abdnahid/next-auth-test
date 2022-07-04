import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

const Blogs = () => {
  const { data: session, state } = useSession();
  console.log(session);
  return (
    <div>
      {!session ? (
        <>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
          <button onClick={() => signIn('facebook')}>
            Sign in with Facebook
          </button>
        </>
      ) : (
        <Image
          src={session.user.image}
          width={120}
          height={30}
          className=''
          objectFit='contain'
          objectPosition='left'
          alt='airbnb-logo'
        />
      )}
    </div>
  );
};

export default Blogs;
