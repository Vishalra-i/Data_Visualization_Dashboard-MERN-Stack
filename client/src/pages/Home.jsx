import React from 'react';
import BarChart from '../charts/BarCharts';
import Histogram from '../charts/Histogram';
import LineChart from '../charts/LineChart';
import BubbleChart from '../charts/BubbleChart';
import DoughnutChart from '../charts/Doghnut.jsx';
import PieChart from "../charts/PieChart.jsx"


function Home() {
  return (
    <div className='container mx-auto p-10'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className='col-span-1 md:col-span-1 flex flex-col items-center p-6 justify-center border border-gray-300 rounded-lg shadow-lg shadow-slate-400 bg-white'>
          <h1 className='pb-4 font-bold text-gray-700 text-xl'>Intensity Distribution</h1>
          <Histogram />
        </div>
        <div className='col-span-1 md:col-span-2 flex flex-col items-center p-6 justify-center border border-gray-300 rounded-lg shadow-lg shadow-slate-400 bg-white'>
          <h1 className='pb-4 font-bold text-gray-700 text-xl'>Sector Chart</h1>
          <BarChart />
        </div>
        <div className='col-span-1 md:col-span-3 h-[500px] flex flex-col items-center p-10 justify-center border border-gray-300 rounded-lg shadow-lg shadow-slate-400 bg-white'>
          <h1 className='pb-4 font-bold text-gray-700 text-xl'>Topic Frequency</h1>
          <PieChart />
        </div>
        <div className='col-span-1 md:col-span-3 flex flex-col items-center p-6 justify-center border border-gray-300 rounded-lg shadow-lg shadow-slate-400 bg-white'>
          <h1 className='pb-4 font-bold text-gray-700 text-xl'>Yearly Trends</h1>
          <LineChart />
        </div>
        <div className='col-span-1 md:col-span-3 flex flex-col items-center p-6 justify-center border border-gray-300 rounded-lg shadow-lg shadow-slate-400 bg-white'>
          <h1 className='pb-4 font-bold text-gray-700 text-xl'>Impact vs. Likelihood</h1>
          <BubbleChart />
        </div>
        <div className='col-span-1 md:col-span-3 flex flex-col items-center p-6 justify-center border border-gray-300 rounded-lg shadow-lg shadow-slate-400 bg-white'>
          <h1 className='pb-4 font-bold text-gray-700 text-xl'>Relevance Distribution</h1>
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default Home;
