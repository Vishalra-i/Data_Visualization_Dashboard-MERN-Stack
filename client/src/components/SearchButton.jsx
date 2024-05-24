import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { setData } from '../store/dataSlice'
import axios from 'axios';

function SearchButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {storeData} = useSelector(state => state.server);
    const [search , setSearch] = useState("")

    console.log(search)
    async function fetchSearchData(){
       try {
         const response = await axios(`${import.meta.env.VITE_SERVER_URL}/api/search/${search}`)
         dispatch(setData(response.data.data));
         navigate('/analytics')
       } catch (error) {
          console.log(error.message)
          alert("No Data Found")
       }


    }

   
  return (
    <div className='flex flex-col'>
        <input type="text" className='border border-black rounded-md p-2'  placeholder='search' onChange={(e) => setSearch(e.target.value)}/>
        <button className='bg-blue-500 text-white p-2 rounded-md mt-5' onClick={fetchSearchData}>Search</button>
    </div>
  )
}

export default SearchButton