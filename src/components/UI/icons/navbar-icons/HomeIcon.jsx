import { FaHome } from 'react-icons/fa';
import Icon from './Icon';

const HomeIcon = ({ isActive }) => {
  return <Icon Icon={FaHome} isActive={isActive} link="/"/>
};

export default HomeIcon;
