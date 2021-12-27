import { useLocation } from "react-router-dom";
import Navbar from "..";
import DumbbellIcon from "../../../components/UI/icons/navbar-icons/DumbbellIcon";
import HomeIcon from "../../../components/UI/icons/navbar-icons/HomeIcon";
import UtensilsIcon from "../../../components/UI/icons/navbar-icons/UtensilsIcon";
import FriendIcon from "../../../components/UI/icons/navbar-icons/FriendIcon";
import UserIcon from "../../../components/UI/icons/navbar-icons/UserIcon";

const MainNavbar = () => {
  const location = useLocation();
  const curr = location.pathname.split("/")[1];
  return (
    <Navbar>
      <div className="flex items-center justify-between w-full h-full px-12">
        <DumbbellIcon isActive={curr === "exercises"} />
        <UtensilsIcon isActive={curr === "diets"} />
        <HomeIcon isActive={curr === ""} />
        <FriendIcon isActive={curr === "list-friends"} />
        <UserIcon isActive={curr === "user"} />
      </div>
    </Navbar>
  );
};

export default MainNavbar;
