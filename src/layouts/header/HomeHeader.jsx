import React from 'react';
import { FaBell, FaCrown, FaShoePrints } from 'react-icons/fa';

const HomeHeader = () => {
  return (
    <header className='h-1/4 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl px-12 py-4'>
      {/* date and notification */}
      <div className='flex justify-between'>
        <div>
          <p className='text-2xl font-thin text-white mb-4'>Ngày 5 tháng 12 năm 2021</p>
          <div className='flex align-middle'>
            <span className='text-4xl font-semibold text-white mr-4'>Chào, Tủn</span>
            <FaCrown className='text-4xl text-white ' />
          </div>
        </div>
        <FaBell className='text-6xl text-white ' />
      </div>
      <FaShoePrints className='text-4xl text-white ' />
    </header>
  );
};

export default HomeHeader;
