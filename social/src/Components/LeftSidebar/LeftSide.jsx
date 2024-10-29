import React from 'react'
import nature from '../../assets/nature.jpg'
import avatar from '../../assets/avatar.jpg';
const LeftSide = () => {
  return (
    <div className='flex flex-col h-screen bg-white pb-4 border-2 rounded-r xl shadow -lg'>
        <div className='flex flex-col items-center relative'>
            <img className='h-28 w-full rounded-r-xl'src={nature} alt='nature'></img>
        </div>
        <div className='absolute -bottom-4'>

          <img src={avatar} alt='avatar' sizes='md' />
        </div>
      
    </div>
  )
}

export default LeftSide
