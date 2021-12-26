import {
  VideoCallParticipantsCamera,
  VideoCallSmallCamera,
} from "../VideoCallParticipantsCamera";

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  VideoCallWorkout,
  VideoCallPickWorkouts,
} from "../VideoCallPickExercises";
import { useEffect, useState } from "react";

export const VideoCallInCamera = ({ className, ...rest }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [listWorkoutVisible, setListWorkoutVisible] = useState(null);

  useEffect(() => {
    const visible = searchParams.get("workout");
    if (visible === "true") setListWorkoutVisible(true);
    if (visible === "false") setListWorkoutVisible(false);
  }, [searchParams]);

  const handleWorkoutClick = (id) => {
    navigate(`exercises?${searchParams}&workoutId=${id}`);
  };

  return (
    <div {...rest}>
      <img
        className="fixed top-0 left-0 object-cover w-full h-full "
        src="/img/videoCallMain.png"
      />
      <div className="relative z-10">
        <VideoCallParticipantsCamera className="mt-5">
          <VideoCallSmallCamera
            className="h-36 w-28"
            img="/img/userParticipant.png"
          />
          <VideoCallSmallCamera
            className="h-36 w-28"
            img="/img/userParticipant.png"
          />
        </VideoCallParticipantsCamera>
      </div>

      <VideoCallPickWorkouts
        onWorkoutClick={handleWorkoutClick}
        className={`${
          listWorkoutVisible ? "h-1/3 translate-y-0" : "h-0 translate-y-24"
        } overflow-auto absolute bottom-0 left-0 right-0 p-8 mx-6 transition-all bg-white shadow-xl mb-36 rounded-xl`}
        aria-label="yeah"
      />
    </div>
  );
};
