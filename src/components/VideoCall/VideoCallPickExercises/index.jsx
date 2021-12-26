import React, { useEffect, useState } from "react";
import { fakeWorkouts } from "./../../../dummy-data/workouts";

export const VideoCallWorkout = ({
  title,
  numberOfExercise,
  completedPercent,
  onClick,
  ...rest
}) => {
  return (
    <div className="flex flex-col cursor-pointer" {...rest} onClick={onClick}>
      <div aria-label="workout-information">
        <div className="text-4xl font-bold text-gray-900">{title}</div>
        <div className="mt-1 text-3xl text-gray-500">
          {numberOfExercise} bài tập
        </div>
      </div>
      <div aria-label="workout-progress" className="flex items-center mt-4">
        <div
          role="progressbar"
          className="relative w-full h-1 overflow-hidden rounded-sm bg-slate-300"
        >
          <div className="bg-slate-300"></div>
          <div
            className="absolute top-0 left-0 h-full bg-green-600"
            style={{ width: `${completedPercent ?? 0}%` }}
          ></div>
        </div>
        <div className="ml-5 text-2xl text-gray-500">
          {completedPercent ?? 0}%
        </div>
      </div>
    </div>
  );
};

export const VideoCallPickWorkouts = ({
  className,
  onWorkoutClick,
  ...rest
}) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    setWorkouts(fakeWorkouts);
  }, []);

  const handleWorkoutClick = (id) => {
    if (onWorkoutClick) onWorkoutClick(id);
  };

  return (
    <div className={`flex flex-col gap-12 ${className}`} {...rest}>
      {workouts.map((workout) => {
        const { title, id, exercises, completedPercent } = workout;
        return (
          <VideoCallWorkout
            key={id}
            title={title}
            completedPercent={completedPercent}
            numberOfExercise={exercises.length}
            onClick={() => handleWorkoutClick(id)}
          />
        );
      })}
    </div>
  );
};
