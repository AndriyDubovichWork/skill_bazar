import React from 'react';
import classes from './NavBar.module.scss';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className={classes.NavBar}>
      <Link href={'/'} className={classes.Logo}>
        <h2>SkillBazar Logo</h2>
      </Link>
      <div className={classes.Authorization}>
        <Link href={'api/auth/signin'}>signin</Link>
        <Link href={'api/auth/signout'}>signout</Link>
      </div>
    </header>
  );
}
