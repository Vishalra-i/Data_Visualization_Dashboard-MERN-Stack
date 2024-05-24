import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './chartJsConfig';


const LineChart = () => {
  const { storeData } = useSelector(state => state.server);

  const years = Array.from(new Set(storeData.map(item => item.start_year).filter(year => year)));
  const yearCount = years.map(year => ({
    year,
    count: storeData.filter(item => item.start_year === year).length
  }));

  return (
    <div className='w-full h-full'>
      <Line
        data={{
          labels: years.sort((a,b)=>a-b),
          datasets: [{
            label: 'Yearly Trends',
            data: yearCount.map(year => year.count),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default LineChart;
