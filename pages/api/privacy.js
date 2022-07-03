import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const session = await getSession({ req });
    console.log(session);
    const { name, email } = req.body;
    if (session) {
      res.send(`Your name: ${name}, and your email is: ${email}`);
    } else {
      res.send('You are not authorized');
    }
  } else {
    res.send('Get works');
  }
};

export default handler;
