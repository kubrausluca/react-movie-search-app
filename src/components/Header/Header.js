import React from 'react';

const DEFAULT_LOGO = "https://camo.githubusercontent.com/e8953d57e96bca99d70704a5dd8ee5af0cb33abe/68747470733a2f2f7777772e666c617469636f6e2e636f6d2f7376672f7374617469632f69636f6e732f7376672f333136332f333136333530382e737667";

const Header = () => {
  return(
    <header>
      <nav id='pageTop' className='navbar'>
        <img
            alt=""
            src= {DEFAULT_LOGO}
            width="50"
            height="50"
            className="d-inline-block align-top"
        />{' '}
        <h1 className='navbar__brand'>Movie Search Database</h1>
      </nav>
    </header>
  )
}

export default Header;