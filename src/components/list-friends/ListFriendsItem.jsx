import { useNavigate } from 'react-router-dom';

const ListFriendsItem = ({ src, name, lastMess, lastTime, unreadMess, friendId }) => {
  const navigate = useNavigate();
  return (
    <div className='flex cursor-pointer justify-between my-8' onClick={() => navigate('chat/' + friendId, { state: { friendId: friendId } })}>
      <img
        src={src ?? 'https://ecdn.game4v.com/g4v-content/uploads/2021/11/12062838/S0-1636673317-14.jpg'}
        alt=''
        className='w-20 h-20 rounded-full object-cover mr-8'
      />
      <div className='h-20 w-full flex flex-col justify-between'>
        <p className='text-3xl text-gray-800 font-bold'>{name ?? 'Shang Shi'}</p>
        <p className='text-2xl text-gray-500 font-light'>{lastMess ?? 'Nhớ thứ 2 tập nhá!'}</p>
      </div>
      <div className='h-20 w-16 flex flex-col justify-between items-center ml-8'>
        <p className='text-2xl text-gray-700'>{lastTime ?? 'T6'}</p>
        <div className='w-8 h-8 flex items-center justify-center bg-green-600 text-white p-2 text-xl rounded-full'>{unreadMess ?? '2'}</div>
      </div>
    </div>
  );
};

export default ListFriendsItem;
