import { useNavigate } from 'react-router-dom';

const Icon = ({ Icon, isActive, link }) => {
  const navigate = useNavigate();
  if (!isActive) {
    return <Icon className='text-5xl cursor-pointer text-gray-400' onClick={() => navigate(link)} />;
  }
  return (
    <div className='bg-green-500 p-4 rounded-full cursor-pointer'>
      <Icon className='text-5xl text-white' />
    </div>
  );
};

export default Icon;
