import { Outlet } from "react-router-dom";
import { VideoNavBar } from "../VideoNavBar";

export const VideoCallLayout = () => {
  return (
    <div className="w-full h-full">
      <VideoNavBar />
      <div className="w-full h-full pt-5 pb-32">
        <Outlet />
      </div>
    </div>
  );
};
