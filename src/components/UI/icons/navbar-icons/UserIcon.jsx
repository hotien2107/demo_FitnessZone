import { FaUser } from 'react-icons/fa';
import Icon from './Icon';

const UserIcon = ({ isActive }) => {
  return <Icon Icon={FaUser} isActive={isActive} link="/user"/>;
};

export default UserIcon;
