import React,{useRef, useState, useEffect} from 'react';
import nature from '../../assets/nature.jpg';
import job from '../../assets/job.png';
import location from '../../assets/location.png';
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import laptop from '../../assets/laptop.jpg'
import media from '../../assets/media.jpg'
import apps from '../../assets/apps.jpg'
import tik from '../../assets/tik.jpg'
import avatar from '../../assets/avatar.jpg'
// import { avatar } from '@material-tailwind/react';
// import { Tooltip } from "@material-tailwind/react";

const LeftSide = () => {
  const [data, setData] = useState({});
  const count = useRef(0);

  const handleRandom = (arr) => {
    setData(arr[Math.floor(Math.random() * arr.length)]);
  };

  useEffect(() => {
    const imgList = [
      { id: '1', image: laptop },
      { id: '2', image: media },
      { id: '3', image: apps },
      { id: '4', image: tik },
    ];

    handleRandom(imgList);

    const startAds = setInterval(() => {
      count.current++;
      handleRandom(imgList);
      if (count.current === 5) {
        clearInterval(startAds);
      }
    }, 1000);

    return () => {
      clearInterval(startAds);
    };
  }, []);

  const progressBar = () => {
    switch (count.current) {
      case 1:
        return 20;
      case 2:
        return 40;
      case 3:
        return 60;
      case 4:
        return 80;
      case 5:
        return 100;
      default:
        return 0;
    }
  };
  return (
    <div className='flex flex-col h-screen bg-white border-2 rounded-r-xl shadow-lg pb-4'>
      <div className='relative'>
        <img className='h-28 w-full rounded-r-xl' src={nature} alt='nature' />
        {/* Uncomment to use Tooltip and Avatar components */}
{/*         
        <div className='absolute -bottom-4 left-4'>
          <Tooltip content="Profile" placement="top">
            <Avatar src={avatar} alt='avatar' size='md' />
          </Tooltip>
        </div>  */}
        <div className=' absolute inset-0 flex items-center justify-center '>
           <img className="w-20 h-20 rounded-full " src={avatar} alt="avatar" />
           </div>
       
      </div>

      <div className='flex flex-col items-center pt-4 '>
        <p className='font-roboto font-medium text-md text-gray-700 tracking-normal leading-none'>
          User email
        </p>
        <p className='font-roboto font-medium text-md text-gray-700 tracking-normal leading-none'>
          Access exclusive tools & insights
        </p>
        <p className='font-roboto font-medium text-md text-gray-700 tracking-normal leading-none'>
          Try premium for free
        </p>
      </div>

      <div className='flex flex-col px-4 pt-4'>
        <div className='flex items-center pb-4'>
          <img className='h-10' src={location} alt='location' />
          <p className='font-roboto font-bold text-lg ml-2'>
            California
          </p>
        </div>

        <div className='flex items-center pb-4'>
          <img className='h-10' src={job} alt='job' />
          <p className='font-roboto font-bold text-lg ml-2'>
            React Developer
          </p>
        </div>

        <div className='flex justify-center items-center pt-4 space-x-4'>
          <p className='font-roboto font-bold text-md text-[#0177b7]'>
            Events
          </p>
          <p className='font-roboto font-bold text-md text-[#0177b7]'>
            Groups
          </p>
          <p className='font-roboto font-bold text-md text-[#0177b7]'>
            Follow
          </p>
          <p className='font-roboto font-bold text-md text-[#0177b7]'>
            More
          </p>
        </div>
      </div>
      <div className='ml-2'>
      <p className='font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2'>
        Social Profile
      </p>
      <div className='flex items-center'>
        <img className='h-10 mb-3 mr-2' src={facebook} alt="facebook"/>
        <p className='font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-700 no-underline tracking-normal py-2'>
          Social Network
        </p>
      </div>
      <div className='flex items-center'>
        <img className='h-10 mb-3 mr-2' src={twitter} alt="twitter"/>
        <p className='font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-700 no-underline tracking-normal py-2'>
        Social Network
        </p>
      </div>
      </div>
      <div className='flex flex-col items-center pt-4'>
        <p className='font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2'>
          Random Ads
        </p>
        <div style={{ width: `${progressBar()}%` }} className='bg-blue-600 rounded-xl h-1 mb-4'></div>
        <img className='h-36 rounded-lg' src={data.image} alt="ads" />
      </div>
    </div>
  );
}

export default LeftSide;
