import React from 'react'
import { useSelector } from 'react-redux'

function ImageButton({src  , text}) {
  const open = useSelector(state => state.sidebar.open)
  return (
    <div>
         <span className='flex items-center justify-center space-x-4'>
          <img width="32" height="32" src={src} alt="home"/>
          { open &&
            <span className='text-md font-mono text-[#1a1919]'>{text}</span>
          }
        </span>
    </div>
  )
}

export default ImageButton