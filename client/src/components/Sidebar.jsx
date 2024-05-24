import React, { useState } from 'react';
import Logo from './Logo';
import ImageButton from './ImageButton';
import { useDispatch, useSelector } from 'react-redux'
import { openSidebar, closeSidebar } from '../store/sidebarSlice.js'
import { Link } from 'react-router-dom';

function Sidebar() {
  const open = useSelector(state => state.sidebar.open)
  const {storeData} = useSelector(state => state.server)
  const dispatch = useDispatch()

  const handleMouseEnter = () => dispatch(openSidebar()) ;
  const handleMouseLeave = () => dispatch(closeSidebar()) ;

  return (
    <div
      className={`w-${open ? '400' : '149'}px bg-[#fff] border border-gray-400 min-h-screen fixed rounded-md`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex flex-col p-2 gap-3'>

        {/* icon */}
        <span className='flex items-center justify-center mb-3'>
          <Logo width={'50px'}/>
          { open &&
            <span className='text-2xl font-mono text-[#1a1919]'>BlackCoffer</span>}
        </span>

         {/* Navigation Buttons */}
        <Link to={"/"}>
        <ImageButton src={"https://img.icons8.com/puffy/32/home.png"}  text={"Dashboard"}/>
        </Link>
        <Link to={"/analytics"}>
        <ImageButton src={"https://img.icons8.com/material-rounded/24/increase-profits.png"}  text={"Analytics"}/>
         </Link>
         <hr className=' p-[1px] bg-gray-300 '/>
        <ImageButton src={"https://img.icons8.com/ios-filled/50/search--v1.png"}  />
        {
          open  && 
          <div className='flex gap-2'>
              <p className='font-bold text-[#1a1919]'>Results : </p>
              <p className='font-bold text-red-500'>{storeData.length}</p>
          </div> 
        }
        
        
      
      </div>
    </div>
  );
}

export default Sidebar;
