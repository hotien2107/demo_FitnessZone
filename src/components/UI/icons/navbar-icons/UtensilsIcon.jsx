import { FaUtensils } from 'react-icons/fa';
import Icon from './Icon';

const UtensilsIcon = ({ isActive }) => {
  return <Icon Icon={FaUtensils} isActive={isActive} link="/diets"/>;
};

export default UtensilsIcon;
