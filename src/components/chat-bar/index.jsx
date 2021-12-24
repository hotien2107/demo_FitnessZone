import { FaFileImage, FaLaughBeam, FaMicrophone } from 'react-icons/fa';
import InputText from '../UI/input/InputText';

const ChatBar = () => {
  return (
    <div className='fixed bottom-0 left-0 h-32 w-full bg-white rounded-2xl flex justify-between items-center p-12'>
      <FaLaughBeam className='text-6xl text-gray-600 mr-8' />
      <InputText isWhite={false} placeholder="Nhập tin nhắn"/>
      <FaMicrophone className='text-5xl text-gray-600 mx-8' />
      <FaFileImage className='text-5xl text-gray-600' />
    </div>
  );
};

export default ChatBar;
