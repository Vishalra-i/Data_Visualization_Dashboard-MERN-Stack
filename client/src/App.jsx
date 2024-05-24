import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setData } from './store/dataSlice';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading , setLoading] = useState(false)
  const { storeData } = useSelector(state => state.server);
  const { open } = useSelector(state => state.sidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        console.log("Fetching data...");
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/all`);
        console.log(response.data.data);
        dispatch(setData(response.data.data));
      } catch (error) {
        setLoading(false)
        console.log(error);
      }finally{
        setLoading(false)
      }
    };

    fetchData();
  }, [])

  useEffect(() => {
    console.log(storeData.length);
  }, [storeData]); // This will run whenever storeData changes

  return !loading ? (
    <div className={`flex ${open ? 'gap-[220px]' : 'gap-20'} box-border px-1 py-2`}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  ) : (
    <div className='flex h-screen justify-center items-center'>
      <div className="w-16 h-16 rounded-full  border-4 border-gray-400 border-t-blue-500 animate-spin">
      </div>
    </div >
  )
}

export default App;
