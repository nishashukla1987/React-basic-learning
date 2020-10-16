import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div>
      <div className='header'>
        <div className='header_img'>
          <img
            src='https://images-na.ssl-images-amazon.com/images/I/81gzWyTlF1L._AC_SL1500_.jpg'
            alt=''
          />
        </div>
        <div className='welcome'>
          <h1>Welcome to React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            repellendus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
