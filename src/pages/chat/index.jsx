import React from 'react';
import { FaArrowLeft, FaInfoCircle, FaPhone, FaVideo } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatBar from '../../components/chat-bar';
import ChatItem from '../../components/chat-item/ChatItem';
import { list_friend } from '../../dummy-data/friends';
import CommonHeader from '../../layouts/header/CommonHeader';
import Main from '../../layouts/main';

const Chat = ({ lastOnl }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { friendId } = location.state;

  const friend_info = list_friend[list_friend.findIndex((friend) => friend.id === friendId)];

  return (
    <>
      <CommonHeader className='flex items-center justify-between'>
        <FaArrowLeft className='text-5xl text-white mr-8' onClick={() => navigate(-1)} />
        <div className=''>
          <p className='text-3xl text-white font-bold'>{friend_info.name}</p>
          <p className='text-2xl text-white font-light'>{lastOnl ?? '2 giờ trước'}</p>
        </div>
        <FaPhone className='text-5xl text-white ml-8' />
        <FaVideo className='text-5xl text-white ml-8' 
          //navigate('videoCall/' + friendId, { state: { friendId: friendId }
          onClick={() => navigate('/videoCall/callId')}/>
        <FaInfoCircle className='text-5xl text-white ml-8' />
      </CommonHeader>
      <Main>
        <section className='flex flex-col'>
          <ChatItem isMe>Bài tập hôm nay khó quá</ChatItem>
          <ChatItem friendId={friendId}>Không sao, ngoài khơi có nhiều chỗ luyện tập hơn</ChatItem>
          <ChatItem friendId={friendId}>Chuẩn bị ra khơi nào</ChatItem>
        </section>
      </Main>
      <ChatBar />
    </>
  );
};

export default Chat;
