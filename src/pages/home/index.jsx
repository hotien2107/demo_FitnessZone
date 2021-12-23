import React from 'react';
import ThumbnailSmall from '../../components/UI/thumbnail/thumbnail-small';

const Home = () => {
  return (
    <section className="mt-8">
      {/* Lộ trình tập luyện - start*/}
      <div className='mb-16'>
        <h3 className='text-4xl text-gray-900 font-bold my-4'>Lộ trình tập luyện</h3>
        <div className='h-48 w-full rounded-2xl overflow-hidden align-middle flex items-center shadow-md'>
          <img
            src='https://file.hstatic.net/1000185761/article/bai-tap-giam-mo-bung-cho-nang-luoi_fb043b91e5ef4af690b9669bab7792db_master.jpg'
            alt=''
          />
        </div>
      </div>
      {/* Lộ trình tập luyện - end*/}

      {/* Bài tập hôm nay - start*/}
      <div className='mb-16'>
        <h3 className='text-4xl text-gray-900 font-bold my-4'>Bài tập hôm nay</h3>
        <div className='flex justify-between'>
          <ThumbnailSmall />
          <ThumbnailSmall />
          <ThumbnailSmall />
        </div>
      </div>
      {/* Bài tập hôm nay  - end*/}

      {/* Bữa ăn hôm nay- start*/}
      <div className=''>
        <h3 className='text-4xl text-gray-900 font-bold my-4'>Bữa ăn hôm nay</h3>
        <div className='flex justify-between'>
          <ThumbnailSmall src='https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg' />
          <ThumbnailSmall src='https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg' />
          <ThumbnailSmall src='https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg' />
        </div>
      </div>
      {/* Bữa ăn hôm nay - end*/}
    </section>
  );
};

export default Home;
