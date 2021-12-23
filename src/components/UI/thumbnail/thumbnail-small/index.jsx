import React from 'react';

const defaultSrc =
  'https://us.123rf.com/450wm/lioputra/lioputra2010/lioputra201000171/157886721-man-character-doing-push-ups-flat-vector-illustration-isolated-on-different-layers.jpg?ver=6';

const ThumbnailSmall = ({ src }) => {
  return (
    <div className='w-40 h-40 bg-white shadow-xl rounded-2xl overflow-hidden'>
      <img className="w-full h-full object-cover" src={src ? src : defaultSrc} alt='#' />
    </div>
  );
};

export default ThumbnailSmall;
