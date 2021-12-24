import { FaPlus, FaSearch } from 'react-icons/fa';
import ListFriendsItem from '../../components/list-friends/ListFriendsItem';
import InputText from '../../components/UI/input/InputText';
import CommonHeader from '../../layouts/header/CommonHeader';
import Main from '../../layouts/main';

const ListFriends = () => {
  return (
    <>
      <CommonHeader className='flex items-center'>
        <FaSearch className='text-5xl text-white mr-8' />
        <InputText placeholder='Tìm kiếm bạn bè' isWhite/>
        <FaPlus className='text-5xl text-white ml-8' />
      </CommonHeader>
      <Main>
        <section>
          <ListFriendsItem
            src='https://ecdn.game4v.com/g4v-content/uploads/2019/08/12-5.jpg'
            name='Monkey D Luffy'
            lastMess='Chuẩn bị ra khơi nào'
            lastTime='Hôm qua'
            unreadMess='3'
            friendId='1'
          />
          <ListFriendsItem
            src='https://omnitos.com/wp-content/uploads/2021/09/one-piece-roronoa-zoro-hd-wallpaper-preview.jpg'
            name='Roronoa Zoro'
            lastMess='Thuyền chúng ta ở đâu'
            lastTime='Hôm qua'
            unreadMess='2'
            friendId='2'
          />
          <ListFriendsItem
            src='https://i.pinimg.com/736x/25/9c/ee/259ceef3e461312d662decc8633b7b64.jpg'
            name='Usopp'
            lastMess='Ngay kia'
            lastTime='5h'
            unreadMess='10'
            friendId='3'
          />
        </section>
      </Main>
    </>
  );
};

export default ListFriends;
