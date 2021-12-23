import React from 'react';
import Navbar from '..';
import DumbbellIcon from '../../../components/UI/icons/navbar-icons/DumbbellIcon';
import HomeIcon from '../../../components/UI/icons/navbar-icons/HomeIcon';
import UtensilsIcon from '../../../components/UI/icons/navbar-icons/UtensilsIcon';
import FriendIcon from '../../../components/UI/icons/navbar-icons/FriendIcon';
import UserIcon from '../../../components/UI/icons/navbar-icons/UserIcon';

const MainNavbar = () => {
  return (
    <Navbar>
      <div className='h-full w-full px-12 flex items-center justify-between'>
        <DumbbellIcon isActive={false} />
        <UtensilsIcon isActive={false} />
        <HomeIcon isActive={true} />
        <FriendIcon isActive={false} />
        <UserIcon isActive={false} />
      </div>
    </Navbar>
  );
};

export default MainNavbar;
