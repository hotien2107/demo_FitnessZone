import { FaDumbbell } from 'react-icons/fa';
import Icon from './Icon';

const DumbbellIcon = ({ isActive }) => {
  return <Icon Icon={FaDumbbell} isActive={isActive} link="/exercises"/>;
};

export default DumbbellIcon;
