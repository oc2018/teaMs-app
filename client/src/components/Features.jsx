import React from 'react';
import { Loading } from '../components';

const Features = ({ text, icon, data }) => {

  if(!data) return <Loading />
  
  return (
    <div className='feature-content'>
        <div className='feature-top'>
            <div>{ icon }</div>
            <div>{ text }</div>
        </div>
        <div className='feature-bottom'><p><span>Kgs:</span></p>{ data }</div>
    </div>
  )
}

export default Features;