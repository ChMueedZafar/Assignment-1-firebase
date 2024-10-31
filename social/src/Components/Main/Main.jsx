import React from 'react'
import avatar from '../../assets/avatar.jpg';
import live from '../../assets/live.png'
import feeling from '../../assets/smile.png'
import addImage from '../../assets/add-image.png'
// import { Avatar} from '@material-tailwind/react';
// import { Button } from '@material-tailwind/react';
const Main = () => {
  return (
<div className="flex flex-col items-center">
      <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg">
        <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-4 w-full">
            <div>
              <img className='rounded-full h-10 w-10' sizes='sm' src={avatar} alt="avatr" />
               </div>
              <form className='w-full'>
                <div className='flex-justify-betewwn items-center'>
                  <div className='w-full ml-4'>
                    <input type="text" 
                    name='text'
                    placeholder='Whats onn yours minnd User'
                    className='outline-none w-full bg-white rounded-md'></input>
                  </div>
                  {/* */}
                  <div className='mx-4'>
                    {/* put previewImage*/}
                     </div>
                    <div className='mr-4'>
                      <button varient='text' type='submit'>
                        Share
                      </button>
                    </div> 
                </div>
              </form>
            </div>
              <span> {/* put progressbar */}</span>  
              <div className='flex justify-around items-center pt-4'>
                <div className='flex items-center'>
                  <label htmlFor="addImage" className='cursor-pointer flex items-center'>
                    <img src={addImage} alt="add img" />
                    <input
                    id="addImage"
                    type="file"
                    style={{display:"none"}}
                    ></input>
                  </label>
                </div>
                <div className='flex items-center'>
                  <img className='h-20 mr-4' src={live} alt="live" />
                  <p className='font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none'>
                    Live
                  </p>
                </div>
                <div className='flex items-center'>
                  <img className='h-10 mr-4' src={feeling} alt="feeling" />
                  <p className='font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none'>
                    Feeling
                  </p>
                </div>
                
              </div>
            </div>
            <div className="flex flex-col py-4 w-full">
              {/* Posts */}
            </div>
            <div>
              {/* reference for later */}
            </div>
            </div>      
  )
}

export default Main;