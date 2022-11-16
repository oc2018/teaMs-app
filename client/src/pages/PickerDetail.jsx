import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components';
import { GoldOutlined, UserOutlined } from '@ant-design/icons';

import { Loading } from '../components'

import { useGetPickerByIdQuery } from '../services/pickerApi';

const PickerDetail = () => {
  const { pick } = useParams();

  const  { data, isFetching }  = useGetPickerByIdQuery( pick );
  
  if( isFetching) return <Loading />
  
  return (
    <div className='detailsContainer'>
      <div className='detailsContent'>
        <div>
          <Card title='Daily Picked' data={ data } icon={ < GoldOutlined /> } />
        </div>
        <div>
          <Card title='Picker' isProfile={true} data={data} icon={ <UserOutlined/> } />
        </div>
      </div>      
    </div>
  )
}

export default PickerDetail;