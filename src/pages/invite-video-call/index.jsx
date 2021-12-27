import { FaPlus, FaSearch } from "react-icons/fa";
import InviteItem from "../../components/invite-item/InviteItem";
import InputText from "../../components/UI/input/InputText";
import Button from "../../components/UI/button";
import CommonHeader from "../../layouts/header/CommonHeader";
import Main from "../../layouts/main";
import { useNavigate } from 'react-router-dom';
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";

const InviteVideoCall = () => {
  const navigate = useNavigate();
  return (
    <>
      <CommonHeader className="flex items-center">
        <FaSearch className="text-5xl text-white mr-8" />
        <InputText placeholder="Tìm kiếm bạn bè" isWhite />
        <FaPlus className="text-5xl text-white ml-8" />
      </CommonHeader>
      <Main>
        <section>
          <InviteItem src={pic1} name="Monkey D Luffy" lastMess="Chuẩn bị ra khơi nào"/>
          <InviteItem src={pic2} name="Roronoa Zoro" lastMess="Thuyền chúng ta ở đâu"/>
          <InviteItem src={pic3} name="Usopp" lastMess="Ngay kia" />
        </section>
      </Main>
      <div className="m-20 absolute inset-x-0 bottom-20">
        <Button onClick={() => navigate('/videoCall/callId')}>
          Bắt đầu gọi
        </Button>
      </div>
    </>
  );
};

export default InviteVideoCall;
