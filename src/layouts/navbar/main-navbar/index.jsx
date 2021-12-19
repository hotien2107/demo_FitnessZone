import React from 'react';
import Navbar from '..';
import DumbbellIcon from '../../../components/UI/icons/DumbbellIcon';
import FriendIcon from '../../../components/UI/icons/FriendIcon';
import HomeIcon from '../../../components/UI/icons/HomeIcon';
import UserIcon from '../../../components/UI/icons/UserIcon';
import UtensilsIcon from '../../../components/UI/icons/UtensilsIcon';

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
