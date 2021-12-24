import React from 'react';
import { FaBell, FaBolt, FaCrown, FaFire, FaHeart, FaShoePrints } from 'react-icons/fa';

const HomeHeader = () => {
  return (
    <header className='h-1/4 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl px-12 py-4'>
      {/* date and notification start*/}
      <div className='flex justify-between'>
        <div>
          <p className='text-2xl font-light text-white mb-4'>Ngày 5 tháng 12 năm 2021</p>
          <div className='flex align-middle'>
            <span className='text-4xl font-semibold text-white mr-4'>Chào, Tủn</span>
            <FaCrown className='text-4xl text-white ' />
          </div>
        </div>
        <FaBell className='text-6xl text-white ' />
      </div>
      {/* date and notification end*/}
      <div className='w-full h-48 bg-white rounded-2xl mt-8 flex justify-around items-center'>
        {/* health item start */}
        <div className='flex flex-col items-center text-center'>
          <div className='bg-yellow-500 w-16 h-16 flex justify-center items-center rounded-2xl mb-4'>
            <FaShoePrints className='text-4xl text-white' />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-900'>1200</p>
            <span className='text-xl font-light text-gray-400'>Bước</span>
          </div>
        </div>
        {/* health item end */}
        {/* health item start */}
        <div className='flex flex-col items-center text-center'>
          <div className='bg-pink-500 w-16 h-16 flex justify-center items-center rounded-2xl mb-4'>
            <FaHeart className='text-4xl text-white' />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-900'>80</p>
            <span className='text-xl font-light text-gray-400'>Nhịp/phút</span>
          </div>
        </div>
        {/* health item end */}
        {/* health item start */}
        <div className='flex flex-col items-center text-center'>
          <div className='bg-blue-500 w-16 h-16 flex justify-center items-center rounded-2xl mb-4'>
            <FaBolt className='text-4xl text-white' />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-900'>350</p>
            <span className='text-xl font-light text-gray-400'>Calo</span>
          </div>
        </div>
        {/* health item end */}
        {/* health item start */}
        <div className='flex flex-col items-center text-center'>
          <div className='bg-red-500 w-16 h-16 flex justify-center items-center rounded-2xl mb-4'>
            <FaFire className='text-4xl text-white' />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-900'>250</p>
            <span className='text-xl font-light text-gray-400'>Calo</span>
          </div>
        </div>
        {/* health item end */}
      </div>
    </header>
  );
};

export default HomeHeader;
