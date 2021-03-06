import { FaPlus, FaSearch } from 'react-icons/fa';
import ListFriendsItem from '../../components/list-friends/ListFriendsItem';
import InputText from '../../components/UI/input/InputText';
import CommonHeader from '../../layouts/header/CommonHeader';
import Main from '../../layouts/main';
import pic1 from "../../assets/images/pic1.jpg"
import pic2 from "../../assets/images/pic2.jpg"
import pic3 from "../../assets/images/pic3.jpg"
import { useState } from "react";
import ChatMenuItem from "../../components/chat-menu-item/ChatMenuItem";

const ListFriends = () => {
  const [menuOn, setMenuOn] = useState('');

  return (
    <>
      <CommonHeader className='flex items-center'>
        <FaSearch className='text-5xl text-white mr-8' />
        <InputText placeholder='Tìm kiếm bạn bè' isWhite/>
        
        {/* mở hộp menu */}
        <FaPlus onClick={() => setMenuOn('true')} className='text-5xl text-white ml-8 cursor-pointer' />
      </CommonHeader>
      <Main>
        <section>
        <ChatMenuItem isActive={menuOn}/>

          <ListFriendsItem
            src={pic1}
            name='Monkey D Luffy'
            lastMess='Chuẩn bị ra khơi nào'
            lastTime='T3'
            unreadMess='3'
            friendId='1'
          />
          <ListFriendsItem
            src={pic3}
            name='Roronoa Zoro'
            lastMess='Thuyền chúng ta ở đâu'
            lastTime='T2'
            unreadMess='2'
            friendId='2'
          />
          <ListFriendsItem
            src={pic2}
            name='Usopp'
            lastMess='Ngay kia'
            lastTime='T2'
            unreadMess='10'
            friendId='3'
          />
        </section>
      </Main>
    </>
  );
};

export default ListFriends;
