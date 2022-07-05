import React from 'react';
import { getSession } from 'next-auth/react';

const Profile = ({ session }) => {
  console.log(session);
  return <div>Profile</div>;
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};

export default Profile;
