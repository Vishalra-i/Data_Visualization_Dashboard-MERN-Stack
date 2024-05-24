import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './chartJsConfig';

const BarChart = () => {
  const { storeData } = useSelector(state => state.server);

  const uniqueSectors = Array.from(new Set(storeData.map(item => item.sector)));
  const sectorCount = uniqueSectors.map(sector => ({
    sector,
    count: storeData.filter(item => item.sector === sector).length
  }));

  return (
    <div className='w-full h-[400px]'>
      <Bar
        data={{
          labels: uniqueSectors,
          datasets: [{
            label: 'Number of Projects',
            data: sectorCount.map(sector => sector.count),
            backgroundColor: ['rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            minBarLength:10,
            barThickness: 20,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#777',
          }]
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true
            },
            x:{
              ticks: {
                display:false,
              },
            }
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
