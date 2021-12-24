import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

const defaultSrc =
  'https://us.123rf.com/450wm/lioputra/lioputra2010/lioputra201000171/157886721-man-character-doing-push-ups-flat-vector-illustration-isolated-on-different-layers.jpg?ver=6';

const ThumbnailBig = ({ src, hasTrainer }) => {
  return (
    <div className='w-80 h-96 bg-white shadow-xl rounded-2xl overflow-hidden scroll-mx-0.5 p-4 cursor-pointer relative'>
      {hasTrainer ? (
        <div className='p-2 bg-white shadow-lg absolute top-4 right-4 rounded-full '>
          <FaUserGraduate className='text-2xl text-gray-800' />
        </div>
      ) : null}
      {/* image */}
      <div className='w-72 h-72 bg-white rounded-2xl overflow-hidden mb-2'>
        <img src={src ? src : defaultSrc} alt='#' />
      </div>
      <div className="">
          <p className='text-3xl font-semibold text-gray-800'>Hít đất giảm cân</p>
          <p className='text-xl font-medium text-gray-500'>100 lần</p>
      </div>
    </div>
  );
};

export default ThumbnailBig;
