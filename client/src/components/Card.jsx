import React from 'react';
import moment from 'moment';
import { Capitalize } from '../util/util';

function Card({ title, data, icon, isProfile }) {
    
  return (
    <div className='card'>
        <div className='cardHeader'>
            <h3 className='cardTitle'>{title}</h3>
        </div>
        <div className='cardBody'>
            <div className='CardImage'><h1>{ icon }</h1></div>
            <div>
            <p className='cardDate'>Date: { data ? moment(data.createdAt).format('DD MMM YYYY') : '' }</p>
            <p className='cardDay'>{data ? moment(data.createdAt).format('dddd'): ''}</p>
            </div>
            <div className='cardContent'>
                {!isProfile ? '':
                 data ? 
                 <div className='subTitle-name'>
                 <p> {data.otherNames ? `${Capitalize(data.name)} ${Capitalize(data.otherNames)} `: Capitalize(data.name) } </p> 
                 </div>
                 : '' }

                {!isProfile ? <p className='subTitle'>Weight:</p>: <>
                    <p className='subTitle'> Monthly Picked: <span></span> </p>
                    <p className='subTitle'> Anually Picked: <span></span></p>
                    <p className='subTitle'> Lifetime Picked: <span></span></p>
                </>}
                <div className='cardH1'>
                { !isProfile ? <h1>Kgs: { data.weight }</h1>: ''}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card;