import React from 'react';
import { useGetPickerQuery } from '../services/pickerApi';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { Capitalize } from '../util/util';
import { Table } from '../components';
import { Loading } from '../components'

const Transactions = ({ simplified }) => {

  const limit = simplified ? 12 : 9999999;
  const title = simplified ? 'Last Twelve Transactions': ' Transactions';
  // const styles = simplified ? {{ padding='20px'}}: ''

    const  { data, isFetching }  = useGetPickerQuery(limit);
    
    if ( isFetching ) return <Loading />;

    const headData = [
        '',
        'Date',
        'Picker',
        'Weight'
      ]      

      const renderBody = (item, index) => (
        <tr key={index}>
            <td style={{width: '40px'}}>{`${index+1}.`}</td>      
            <td><Link to={`/detail/${item._id}`} >{ moment(item.createdAt ).format('DD:MM:YYYY')} </Link></td>         
            <td>{ item.otherNames ? `${item.name?Capitalize(item.name):''} ${item.otherNames?Capitalize(item.otherNames):''}` : item.name?Capitalize(item.name):'' }</td>
            <td>{ item.weight }</td>
          </tr>
      )
  
  
  return (    
    <div className='table-render'>        
        <Table title={ title } headData= {headData} renderBody= {renderBody} bodyData={data.data} />
    </div>    
  )
}

export default Transactions