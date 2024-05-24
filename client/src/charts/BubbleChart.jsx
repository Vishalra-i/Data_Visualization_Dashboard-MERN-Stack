import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './chartJsConfig'; // Assuming this file contains your global Chart.js configuration

const BubbleChart = () => {
  const { storeData } = useSelector(state => state.server);

  // Data for the impact dataset
  const impactData = storeData.map(item => ({
    x: item.impact,
    y: item.likelihood,
    r: item.size // Adjust this property according to your data
  }));

  // Data for the likelihood dataset (assuming you want different data points)
  const likelihoodData = storeData.map(item => ({
    x: item.impact,
    y: item.likelihood,
    r: item.size // Adjust this property according to your data
  }));

  return (
    <div className='w-full h-[300px]'>
      <Bubble
        data={{
          datasets: [
            {
              label: 'Impact',
              data: impactData,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
              hoverBorderColor: 'rgba(255, 99, 132, 1)',
            },
            {
              label: 'Likelihood',
              data: likelihoodData,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
              hoverBorderColor: 'rgba(54, 162, 235, 1)',
            }
          ]
        }}
        options={{
          scales: {
            x: {
              beginAtZero: false,
              title: {
                display: true,
                text: 'Impact',
                color: '#666', // Customize axis title color
                font: {
                  size: 14,
                  weight: 'bold',
                  family: 'Arial'
                }
              },
              ticks: {
                color: '#666', // Customize tick color
                font: {
                  size: 12,
                  family: 'Arial'
                }
              },
              grid: {
                color: 'rgba(200, 200, 200, 0.3)', // Customize grid color
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Likelihood',
                color: '#666', // Customize axis title color
                font: {
                  size: 14,
                  weight: 'bold',
                  family: 'Arial'
                }
              },
              ticks: {
                color: '#666', // Customize tick color
                font: {
                  size: 12,
                  family: 'Arial'
                }
              },
              grid: {
                color: 'rgba(200, 200, 200, 0.3)', // Customize grid color
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: '#333', // Customize legend label color
                font: {
                  size: 14,
                  family: 'Arial'
                }
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Customize tooltip background
              titleFont: {
                size: 14,
                family: 'Arial',
                weight: 'bold'
              },
              bodyFont: {
                size: 12,
                family: 'Arial'
              },
              footerFont: {
                size: 10,
                family: 'Arial'
              },
              cornerRadius: 4
            }
          },
          animation: {
            duration: 1000,
            easing: 'easeInOutBounce' // Customize animation
          },
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default BubbleChart;
