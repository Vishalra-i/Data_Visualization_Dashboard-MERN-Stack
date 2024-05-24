import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './chartJsConfig';

const Histogram = () => {
  const { storeData } = useSelector(state => state.server);

  // Extracting valid start years and their corresponding intensities
  const validData = storeData.filter(item => item.start_year && item.intensity);
  const years = Array.from(new Set(validData.map(item => item.start_year)));
  const intensities = years.map(year => {
    const itemsInYear = validData.filter(item => item.start_year === year);
    const totalIntensity = itemsInYear.reduce((sum, item) => sum + item.intensity, 0);
    return totalIntensity / itemsInYear.length;
  });

  return (
    <div className='w-full h-full'>
      <Bar
        data={{
          labels: years.sort((a,b)=> a- b),
          datasets: [{
            label: 'Average Intensity by Year',
            data: intensities,
            backgroundColor: [ 
            'rgb(155,600,80,0.8)',
            'rgb(305,600,80,1)',
            'rgb(485,00,106,1)',
          ],
          }]
        }}
        options={{
          scales: {
            y: {
              title: {
                display: true,
                text: 'Intensity'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Year'
              },
              
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default Histogram;
