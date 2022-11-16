import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, FormOutlined, TransactionOutlined } from '@ant-design/icons';

const SideMenu = () => {
  return (
    <div className='sideMenu-container'>
      <Link to={`/`}>
        <div className='sideMenu-link' >
         { <HomeOutlined /> } Dashboard
        </div>
      </Link>
      <Link to={`/form`}>
        <div className='sideMenu-link'>
         { <FormOutlined /> } Form
        </div>
      </Link>
      <Link to={`/transactions`}>
        <div className='sideMenu-link'>
         { <TransactionOutlined /> } Transactions
        </div>
      </Link>
    </div>
  )
}

export default SideMenu;