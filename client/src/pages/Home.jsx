import React from 'react';
import { Features, AnnualChart } from '../components';
import { useGetPickerQuery } from '../services/pickerApi';
import { Link } from 'react-router-dom';
import { Transactions } from '../pages';
import { GoldOutlined }  from '@ant-design/icons';

import { Loading } from '../components'

const Home = () => {
  const  { data, isFetching }  = useGetPickerQuery(12);      

  if ( isFetching ) return <Loading />;
  if ( !data ) return <Loading />;

  const MonthlyTotal = data.monthlyWeight.map((item) => item.totalWeight);
  const AnnualTotal = data.annualWeight.map((item) => item.totalWeight);
  const cumulativeTotal = data.cummulative.map((item) => item.totalWeight);

  return (
    <div className='home-container'>
      {/* <MessageOutlined color='#a9ecff'/> */}
      <div className='features-container'>  
        <Link to={`/feature/monthlydetail`}>
          <div  className='feature'><Features icon={<GoldOutlined style={{color: '#022a0a', fontSize: '30px'}}/>} data= {MonthlyTotal} text='Monthly Total' /></div>
        </Link>   
        <Link to={`/feature/annualdetail`}>
          <div  className='feature'><Features icon={<GoldOutlined style={{color: '#022a0a', fontSize: '30px'}}/> } data= {AnnualTotal} text='Annual Total' /></div>
        </Link>   
        <Link to={`/feature/cumulativedetail`}>
          <div  className='feature'><Features icon={<GoldOutlined style={{color: '#022a0a', fontSize: '30px'}}/>} data= {cumulativeTotal} text='Cumulative Total' /></ div>
        </Link>  
      </div>
      <div className='table-chart-container'>
        <div className='transactions-home'>
          <Transactions simplified /> 
        </div>
        <div className='chart-container'>
          <AnnualChart title='Last Twelve Transactions' data= {data.data} />
        </div>     
      </div>
    </div>  
  )
}

export default Home