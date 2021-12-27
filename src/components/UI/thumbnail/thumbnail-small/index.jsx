import { FaUserGraduate } from 'react-icons/fa';
import menu2 from "../../../../assets/images/menu2.webp";

const ThumbnailSmall = ({ src, hasTrainer }) => {
  return (
    <div className='w-40 h-40 bg-white shadow-xl rounded-2xl overflow-hidden relative'>
      {hasTrainer ? (
        <div className='p-2 bg-white shadow-lg absolute top-4 right-4 rounded-full '>
          <FaUserGraduate className='text-2xl text-gray-800' />
        </div>
      ) : null}
      <img className='w-full h-full object-cover' src={src ? src : menu2} alt='#' />
    </div>
  );
};

export default ThumbnailSmall;
