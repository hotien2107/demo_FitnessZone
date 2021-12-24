import React from 'react';
import { list_friend } from '../../dummy-data/friends';

const ChatItem = ({ children, isMe, friendId }) => {
  const friend_info = list_friend[list_friend.findIndex((friend) => friend.id === friendId)];
  return (
    <div className={'flex my-4 ' + (isMe ? 'self-end' : 'self-start')}>
      {friendId ? <img src={friend_info.image} alt='' className='w-20 h-20 rounded-full object-cover mr-8' /> : null}
      <div className={'p-4 shadow-xl rounded-lg w-max max-w-sm ' + (isMe ? ' bg-green-500' : '')}>
        <p className='text-3xl text-gray-800'>{children}</p>
      </div>
    </div>
  );
};

export default ChatItem;
