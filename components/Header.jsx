import React, { useState } from 'react';
import Link from 'next/link';
import classes from './header.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import HeaderDropdown from './HeaderDropdown';

const Header = () => {
  const { data: session, status } = useSession();
  const [viewDropdown, setViewDropdown] = useState(false);
  return (
    <header className={classes.header}>
      <nav className={`${classes.navbar} container`}>
        <ul className={classes.navbarNav}>
          <li className={classes.menuItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={classes.menuItem}>
            <Link href='/blogs'>Blogs</Link>
          </li>
          <li className={classes.menuItem}>
            <Link href='/privacy'>Privacy</Link>
          </li>
          {!session ? (
            <li className={classes.menuItem}>
              <button
                onMouseEnter={() => setViewDropdown(true)}
                onMouseLeave={() => setViewDropdown(false)}
              >
                Sign in
              </button>
            </li>
          ) : (
            <>
              <li className={classes.menuItem}>{session.user.name}</li>
              <li className={classes.menuItem}>
                <button onClick={signOut}>Sign Out</button>
              </li>
            </>
          )}
          <HeaderDropdown show={viewDropdown} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
