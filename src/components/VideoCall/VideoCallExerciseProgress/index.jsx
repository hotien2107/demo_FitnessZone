import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillPauseCircleFill,
  BsFillPlayCircleFill,
} from "react-icons/bs";

export const VideoCallExerciseProgress = ({
  playing,
  onTogglePlaying,
  onNextClick,
  onPrevClick,
  currentExercise,
  nextExercise,
  withTrainer,
  ...rest
}) => {
  const { title: currTitle, quantity: currQuantity } = currentExercise;

  return (
    <div aria-label="aaaa" className="flex flex-col items-center" {...rest}>
      <div className="mt-10 text-4xl font-bold">{currTitle}</div>
      <div className="mt-3 font-black text-8xl">x{currQuantity}</div>

      {!withTrainer &&
      <div className="flex flex-row items-center gap-10 mt-7">
        <BsFillCaretLeftFill className="cursor-pointer" size={30}/>
        <div
            className="text-green-500 rounded-full cursor-pointer w-28 h-28"
            onClick={onTogglePlaying}
        >
          {playing ? (
              <BsFillPlayCircleFill className="w-full h-full"/>
          ) : (
              <BsFillPauseCircleFill className="w-full h-full"/>
          )}
        </div>
        <BsFillCaretRightFill className="cursor-pointer " size={30}/>
      </div>}

      {nextExercise && (
        <div aria-label="next-Exercise" className="mt-12 text-3xl">
          Tiếp theo:{" "}
          <span className="text-3xl font-bold">{nextExercise.title}</span>
        </div>
      )}
    </div>
  );
};
