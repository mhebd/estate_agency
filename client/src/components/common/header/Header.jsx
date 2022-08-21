/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderSerchBox from './HeaderSerchBox';

function Header() {
  return (
    <header>
      <HeaderSerchBox />
      <HeaderNav />
    </header>
  );
}

export default Header;
