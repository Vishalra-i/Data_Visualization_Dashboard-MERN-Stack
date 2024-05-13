import React, { useState } from 'react';
import Logo from './Logo';
import ImageButton from './ImageButton';
import { useDispatch, useSelector } from 'react-redux'
import { openSidebar, closeSidebar } from '../store/sidebarSlice.js'

function Sidebar() {
  const open = useSelector(state => state.sidebar.open)
  const dispatch = useDispatch()

  const handleMouseEnter = () => dispatch(openSidebar()) ;
  const handleMouseLeave = () => dispatch(closeSidebar()) ;

  return (
    <div
      className={`w-${open ? '400' : '149'}px bg-[#fff] border border-gray-400 min-h-screen`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex flex-col p-2'>
        <span className='flex items-center justify-center mb-5'>
          <Logo width={'50px'}/>
          { open &&
            <span className='text-2xl font-mono text-[#1a1919]'>BlackCoffer</span>}
        </span>

        <ImageButton src={"https://img.icons8.com/puffy/32/home.png"}  text={"Dashboard"}/>
       
      </div>
    </div>
  );
}

export default Sidebar;
