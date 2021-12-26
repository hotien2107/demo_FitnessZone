import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VideoCallExerciseProgress } from "../VideoCallExerciseProgress";
import {
  VideoCallSmallCamera,
  VideoCallParticipantsCamera,
} from "../VideoCallParticipantsCamera";
import { VideoCallPickWorkouts } from "../VideoCallPickExercises";

export const VideoCallInExercise = ({ ...rest }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [playing, setPlaying] = useState();
  const [listWorkoutVisible, setListWorkoutVisible] = useState();

  useEffect(() => {
    const workoutVisible = searchParams.get("workout");

    if (workoutVisible === "true") setListWorkoutVisible(true);
    if (workoutVisible === "false") setListWorkoutVisible(false);
  });

  const handleTogglePlayClick = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <div
      className="flex flex-col items-center h-full text-gray-800 w-ful"
      {...rest}
    >
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

      <div aria-label="workout-guide" className="flex flex-col items-center">
        <h1 className="relative mt-16 font-bold text-7xl">Hít đất</h1>
        <img className="mt-5" src="/img/exercise.png" />

        <VideoCallExerciseProgress
          playing={playing}
          onTogglePlaying={handleTogglePlayClick}
          currentExercise={{ title: "Hít đất rộng bằng vai", quantity: 10 }}
        />
      </div>

      <VideoCallPickWorkouts
        className={`${
          listWorkoutVisible ? "h-1/3 translate-y-0" : "h-0 translate-y-24"
        } overflow-auto absolute bottom-0 left-0 right-0 p-8 mx-6 transition-all bg-white shadow-xl mb-36 rounded-xl`}
        aria-label="yeah"
      />
    </div>
  );
};
