import React from 'react'
import { useSelector } from 'react-redux'
import SearchButton from './SearchButton'

function ImageButton({src  , text}) {
  const open = useSelector(state => state.sidebar.open)
  return (
    <div className='hover:bg-gray-300 p-2 rounded-md'>
         <span className={`flex items-center ${open ? 'justify-start' : 'justify-center'} space-x-4 `}>
          <img width="24" height="24" src={src} alt="home"/>
          { open && (
            text ?
            <span className='text-md font-mono text-[#1a1919]'>{text}</span> 
            :
            <SearchButton/>)
          }
        </span>
    </div>
  )
}

export default ImageButton