import React from 'react';

import logo from '../assets/logo_ontime.png'

const Header = () => {
  return (
    <div className='heading'>
      <div className='logo'>
        <img src={logo} alt="TeaMs" />
      </div>
      <div> 
        <h1>
          Tea Picking Management System
        </h1> 
        </div>
      <div className='user-container'>
        <div className='avatar'></div>
        <div>Eric Ndege</div>
      </div>
    </div>
  )
}

export default Header;