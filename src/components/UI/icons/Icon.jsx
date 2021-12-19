const Icon = ({ Icon, isActive }) => {
  if (!isActive) {
    return <Icon className='text-5xl cursor-pointer text-gray-400' />;
  }
  return (
    <div className='bg-green-500 p-4 rounded-full cursor-pointer'>
      <Icon className='text-5xl text-white' />
    </div>
  );
};

export default Icon;
