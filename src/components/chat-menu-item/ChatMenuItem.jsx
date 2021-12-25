import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaUsers, FaVideo } from "react-icons/fa";

const ChatMenuItem = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-30 top-10 right-10 bg-white rounded-2xl justify-between items-center p-5
        ring-gray-900/5 shadow-lg space-y-3 hove">
      <div className="group h-10 flex items-center p-12 hover:bg-green-500 hover:ring-green-500">
        <FaUserPlus className="text-5xl text-gray-600 mr-10 group-hover:text-white" />
        <p className="text-3xl text-gray-500 group-hover:text-white">Thêm bạn</p>
      </div>
      <div className="group h-10 flex items-center p-12 hover:bg-green-500 hover:ring-green-500">
        <FaUsers className="text-5xl text-gray-600 mr-10 group-hover:text-white" />
        <p className="text-3xl text-gray-500 group-hover:text-white">Tạo nhóm</p>
      </div>
      <div className="group h-10 flex items-center p-12 hover:bg-green-500 hover:ring-green-500"
            onClick={() => navigate('invite')}>
        <FaVideo className="text-5xl text-gray-600 mr-10 group-hover:text-white" />
        <p className="text-3xl text-gray-500 group-hover:text-white">Tạo cuộc gọi nhóm</p>
      </div>
    </div>
  );
};

export default ChatMenuItem;
