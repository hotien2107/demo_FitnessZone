import { useEffect, useState } from "react";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaChromecast,
  FaList,
  FaTimes,
  FaPlus,
} from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../navbar";
import { Toggle, ToggleOff, ToggleOn } from "./components/Toggle";
import { VideoNavBarIcon } from "./components/VideoNavBarIcon";

export const VideoNavBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [micOn, setMicOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false);
  const [screenCast, setScreenCast] = useState(false);
  const [workoutVisible, setWorkoutVisible] = useState(false);

  useEffect(() => {
    const micState = searchParams.get("mic")?.toLowerCase();
    const videoState = searchParams.get("video")?.toLowerCase();
    const workoutState = searchParams.get("workout")?.toLowerCase();
    const screenCast = searchParams.get("cast")?.toLowerCase();

    if (micState === "true") setMicOn(true);
    if (micState === "false") setMicOn(false);

    if (videoState === "true") setVideoOn(true);
    if (videoState === "false") setVideoOn(false);

    if (workoutState === "true") setWorkoutVisible(true);
    if (workoutState === "false") setWorkoutVisible(false);

    if (screenCast === "true") setScreenCast(true);
    if (screenCast === "false") setScreenCast(false);

    //react-hooks\exhaustive-deps
  }, []);

  useEffect(() => {
    setSearchParams({
      mic: micOn,
      video: videoOn,
      cast: screenCast,
      workout: workoutVisible,
    });
  }, [micOn, videoOn, screenCast, workoutVisible]);

  const handleMicToggle = () => {
    setMicOn((prev) => !prev);
  };

  const handleVideoToggle = () => {
    setVideoOn((prev) => !prev);
  };

  const handleScreenCastClick = () => {
    setScreenCast((prev) => !prev);
  };

  const handleListWorkoutClick = () => {
    setWorkoutVisible((prev) => !prev);
  };

  const handleExitClick = () => {
    navigate("/list-friends", { replace: true });
  };

  return (
    <Navbar>
      <div className="flex flex-row items-center justify-between w-full h-full gap-5 px-14">
        <Toggle on={micOn} onChange={handleMicToggle}>
          <ToggleOn>
            <VideoNavBarIcon>
              <FaMicrophone />
            </VideoNavBarIcon>
          </ToggleOn>
          <ToggleOff>
            <VideoNavBarIcon>
              <FaMicrophoneSlash />
            </VideoNavBarIcon>
          </ToggleOff>
        </Toggle>

        <Toggle on={videoOn} onChange={handleVideoToggle}>
          <ToggleOn>
            <VideoNavBarIcon>
              <FaVideo />
            </VideoNavBarIcon>
          </ToggleOn>
          <ToggleOff>
            <VideoNavBarIcon>
              <FaVideoSlash />
            </VideoNavBarIcon>
          </ToggleOff>
        </Toggle>

        <VideoNavBarIcon onClick={handleScreenCastClick}>
          <FaChromecast />
        </VideoNavBarIcon>

        {workoutVisible ? (
          <VideoNavBarIcon
            className="rounded-full"
            type="green"
            onClick={handleListWorkoutClick}
          >
            <FaList />
          </VideoNavBarIcon>
        ) : (
          <VideoNavBarIcon onClick={handleListWorkoutClick}>
            <FaList />
          </VideoNavBarIcon>
        )}

        <Link to="/list-friends">
          <VideoNavBarIcon className="rounded-full">
            <FaPlus />
          </VideoNavBarIcon>
        </Link>

        <VideoNavBarIcon
          type="red"
          className="rounded-full"
          onClick={handleExitClick}
        >
          <FaTimes />
        </VideoNavBarIcon>
      </div>
    </Navbar>
  );
};
