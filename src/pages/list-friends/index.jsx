import { FaSearch } from 'react-icons/fa';
import InputText from '../../components/UI/input/InputText';
import CommonHeader from '../../layouts/header/CommonHeader';
import Main from '../../layouts/main';

const ListFriends = () => {
  return (
    <>
      <CommonHeader className='flex items-center'>
        <FaSearch className='text-4xl text-white' />
        <InputText />
      </CommonHeader>
      <Main>
        <section>this is list friends</section>
      </Main>
    </>
  );
};

export default ListFriends;
