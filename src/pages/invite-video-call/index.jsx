import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import InviteItem from '../../components/invite-item/InviteItem';
import Button from '../../components/UI/button';
import CommonHeader from '../../layouts/header/CommonHeader';
import Main from '../../layouts/main';

const InviteVideoCall = () => {
  const navigate = useNavigate();
  return (
    <>
      <CommonHeader className='flex items-center'>
        <FaArrowLeft onClick={() => navigate(-1)} className='text-5xl text-white mr-8' />
        <h3 className='text-white text-4xl font-bold'>Chọn bạn tham gia</h3>
      </CommonHeader>
      <Main>
        <section>
          <InviteItem src={pic1} name='Monkey D Luffy' lastMess='Chuẩn bị ra khơi nào' />
          <InviteItem src={pic3} name='Roronoa Zoro' lastMess='Thuyền chúng ta ở đâu' />
          <InviteItem src={pic2} name='Usopp' lastMess='Ngay kia' />
        </section>
      </Main>
      <div className='m-20 absolute inset-x-0 bottom-20'>
        <Button onClick={() => navigate('/videoCall/2')}>Bắt đầu gọi</Button>
      </div>
    </>
  );
};

export default InviteVideoCall;
