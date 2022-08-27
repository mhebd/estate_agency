/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import HeaderSerchBox from './HeaderSerchBox';

function Header() {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const openSearchBox = (e) => {
    setShowSearchBox(true);
  };

  const closeSearchBox = (e) => {
    setShowSearchBox(false);
  };

  return (
    <header>
      <HeaderSerchBox showSearchBox={showSearchBox} closeSearchBox={closeSearchBox} />
      <HeaderNav openSearchBox={openSearchBox} />
    </header>
  );
}

export default Header;
