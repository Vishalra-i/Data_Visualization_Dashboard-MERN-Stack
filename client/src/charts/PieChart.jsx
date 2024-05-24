import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './chartJsConfig';

const PieChart = () => {
  const serverData = useSelector(state => state.server);
  const { storeData = [] } = serverData || {};

  const uniqueTopics = Array.from(new Set(storeData.map(item => item.topic)));
  const topicCount = uniqueTopics.map(topic => ({
    topic,
    count: storeData.filter(item => item.topic === topic).length
  }));

  const colors = [
    'rgba(255, 99, 132,  1.0)',
    'rgba(54, 162, 235,  1.0)',
    'rgba(255, 206, 86,  1.0)',
    'rgba(75, 192, 192,  1.0)',
    'rgba(153, 102, 255, 1.0)',
    'rgba(255, 159, 64,  1.0)'
  ];

  // Generate additional colors if needed
  while (colors.length < uniqueTopics.length) {
    const newColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1.0)`;
    colors.push(newColor);
  }

  return (
    <div className='w-full h-full'>
      <Pie
        data={{
          labels: uniqueTopics,
          datasets: [{
            label: 'Topic Frequency',
            data: topicCount.map(topic => topic.count),
            backgroundColor: colors,
            borderColor: colors.map(color => color.replace('1.0', '1')),
            borderWidth: 1
          }]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 20,
              bottom: 20,
              left: 20,
              right: 20
            },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap : 10 ,
            alignItems: 'center'
          },
          plugins: {
            legend: {
              display: false,
            }
          },
          hover: {
            mode: 'dataset',
            intersect: true,
          }
        }}
      />
      <h1 id='tooltip'></h1>
    </div>
  );
};

export default PieChart;
