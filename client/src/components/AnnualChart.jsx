import React from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';

const AnnualChart = ({ title, data }) => {

  const entry = data.map((item) => item.weight);
 
  const chartOptions = {
      series: [{
        name: 'Weight Picked',
        data: entry
      }, 
      ],
      options: {
        color: ['#a9ecff'],
        chart: {
          background: 'transparent'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          title: {
            text: 'Dates'
          },
          categories: data.map((item) => moment(item.createdAt).format('YYYY.MM.DD'))
        },
        yaxis: {
          title: {
            text: 'Weight'
          },
          min: 0,
          max: Math.max.apply(null, entry)+50
        },
        legend: {
          position: 'top'
        },
        grid: {
          show: true
        }
      }
    }
    

  return (
    <div className='annual-chart'>
        <div>
            <h1>{ title }</h1>
        </div>
        <div className="chart">          
        <Chart options={chartOptions.options} series={chartOptions.series} type='line' height='100%' width='600px' />
    </div>
    </div>
  )
}

export default AnnualChart;

