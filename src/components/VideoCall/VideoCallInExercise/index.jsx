import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fakeExercises, fakeWorkouts } from "../../../dummy-data/workouts";
import { VideoCallExerciseProgress } from "../VideoCallExerciseProgress";
import {
  VideoCallSmallCamera,
  VideoCallParticipantsCamera,
} from "../VideoCallParticipantsCamera";
import { VideoCallPickWorkouts } from "../VideoCallPickExercises";

export const VideoCallInExercise = ({ ...rest }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { callId, workoutId } = useParams();

  const [playing, setPlaying] = useState(false);
  const [listWorkoutVisible, setListWorkoutVisible] = useState(false);
  const [workout, setWorkout] = useState(null);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const workoutVisible = searchParams.get("workout");
    if (workoutVisible === "true") setListWorkoutVisible(true);
    if (workoutVisible === "false") setListWorkoutVisible(false);
  }, [searchParams]);

  useEffect(() => {
    const workout = fakeWorkouts.filter((w) => w.id === workoutId)[0];
    const exerciseIds = workout.exercises;
    const fetchExercises = exerciseIds.map((id) => fakeExercises[id]);

    setWorkout(workout);
    setExercises(fetchExercises);
  }, [workoutId]);

  const handleTogglePlayClick = () => {
    setPlaying((prev) => !prev);
  };

  const handleWorkoutClick = (id) => {
    navigate(`/videoCall/${callId}/${id}?${searchParams}`);
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
        <h1 className="relative mt-16 font-bold text-7xl">
          {" "}
          {workout ? workout.title : ""}
        </h1>
        <img className="mt-5" src="/img/exercise.png" />

        {exercises && (
          <VideoCallExerciseProgress
            exercises={exercises}
            playing={playing}
            onTogglePlaying={handleTogglePlayClick}
          />
        )}
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
