import React from 'react';
import { signIn, useSession } from 'next-auth/react';

const Blogs = () => {
  const { data: session, state } = useSession();
  console.log(session);
  return (
    <div>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
    </div>
  );
};

export default Blogs;
