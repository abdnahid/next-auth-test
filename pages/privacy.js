import React from 'react';
import { getSession } from 'next-auth/react';
const Privacy = () => {
  return <div>privacy policy</div>;
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        parmanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};

export default Privacy;
