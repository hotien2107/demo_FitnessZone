import { VideoNavBar } from '../../layouts/VideoNavBar';
import { VideoCallParticipantsCamera, VideoCallSmallCamera } from '../VideoCall/VideoCallParticipantsCamera';
import { VideoCallExerciseProgress } from '../VideoCall/VideoCallExerciseProgress';
import { fakeExercises } from '../../dummy-data/workouts';

const ExerciseWithTrainer = () => {
  return (
    <div className='w-full h-full'>
      <div className='relative z-10'>
        <VideoCallParticipantsCamera className='mt-5'>
          <VideoCallSmallCamera className='h-36 w-28' img='/img/userParticipant.png' />
          <VideoCallSmallCamera className='h-36 w-28' img='/img/userParticipant.png' />
        </VideoCallParticipantsCamera>
      </div>
      <div aria-label='workout-guide' className='flex flex-col items-center'>
        <h1 className='relative mt-16 font-bold text-7xl'>Hít đất</h1>
        <img className='mt-5' src='/img/exercise.png' />

        <VideoCallExerciseProgress
          withTrainer
          exercises={Object.values(fakeExercises)}
          currentExercise={{ title: 'Hít đất rộng bằng vai', quantity: 10 }}
        />
      </div>
      <VideoNavBar withTrainer />
    </div>
  );
};

export default ExerciseWithTrainer;
