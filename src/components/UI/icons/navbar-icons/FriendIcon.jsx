import { FaUsers } from 'react-icons/fa';
import Icon from './Icon';

const FriendIcon = ({ isActive }) => {
  return <Icon Icon={FaUsers} isActive={isActive} link="/list-friends"/>;
};

export default FriendIcon;
