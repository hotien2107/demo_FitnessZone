import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { VideoCallExerciseProgress } from '../VideoCall/VideoCallExerciseProgress';
import { VideoCallParticipantsCamera, VideoCallSmallCamera } from '../VideoCall/VideoCallParticipantsCamera';

const ExerciseWithTrainer = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { callId, workoutId } = useParams();

  const [playing, setPlaying] = useState(false);
  const [listWorkoutVisible, setListWorkoutVisible] = useState(false);
  const [workout, setWorkout] = useState(null);
  const [exercises, setExercises] = useState([]);

  const handleTogglePlayClick = () => {
    setPlaying((prev) => !prev);
  };

  const handleWorkoutClick = (id) => {
    navigate(`/videoCall/${callId}/${id}?${searchParams}`);
  };

  return (
    <div className='flex flex-col items-center h-full text-gray-800 w-ful'>
      <VideoCallParticipantsCamera className='mt-5'>
        <VideoCallSmallCamera className='h-36 w-28' img='/img/userParticipant.png' />
        <VideoCallSmallCamera className='h-36 w-28' img='/img/userParticipant.png' />
      </VideoCallParticipantsCamera>

      <div aria-label='workout-guide' className='flex flex-col items-center'>
        <h1 className='relative mt-16 font-bold text-7xl'> {workout ? workout.title : ''}</h1>
        <img className='mt-5' src='/img/exercise.png' alt='' />

        {exercises && <VideoCallExerciseProgress withTrainer exercises={exercises} playing={playing} onTogglePlaying={handleTogglePlayClick} />}
      </div>
    </div>
  );
};

export default ExerciseWithTrainer;
