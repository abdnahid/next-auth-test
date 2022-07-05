import Head from 'next/head';
import Link from 'next/link';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Ovikkhon</title>
        <meta
          name='description'
          content='A interactive bcs preparation app with realtime analysis of your preparation'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className=''>
        <Banner />
      </main>

      <footer>
        <div className='text-center'>
          Copyright <Link href={'/'}>Ovikkhon</Link> @2022
        </div>
      </footer>
    </div>
  );
}
