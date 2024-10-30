import React from 'react'
// import { Avatar} from '@material-tailwind/react';
import avatar from '../../assets/avatar.jpg';
const Main = () => {
  return (
<div className="flex flex-col items-center">
      <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg">
        <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-4 w-full">
            <div size='sm' variant='circular' src={avatar} alt='avatar'></div>

            
            </div>
            </div>
            </div>      
  )
}

export default Main;