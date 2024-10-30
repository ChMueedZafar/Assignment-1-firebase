import React from 'react';
import Navbar from '../Navbar/Navbar';
import LeftSide from '../LeftSidebar/LeftSide';
import RightSide from '../RightSibebar/RightSide';

const Home = () => {
  return (
    <div className='w-full'>
      <div className='fixed top-0 z-10 w-full bg-white'>
        <Navbar />
      </div>
      
      <div className='flex pt-16 bg-gray-100'> 
        <div className='w-[20%] sticky top-16 h-screen'>
          <LeftSide />
        </div>
        
        <div className='flex-auto w-[60%] p-4'>
          <p>Main Content Area</p>
        </div>
        
        <div className='w-[20%] sticky top-16 h-screen'>
          <RightSide />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
