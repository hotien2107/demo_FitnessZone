import {
  VideoCallParticipantsCamera,
  VideoCallSmallCamera,
} from "../VideoCallParticipantsCamera";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { VideoCallPickWorkouts } from "../VideoCallPickExercises";
import { useEffect, useState } from "react";
import { fakeCalls } from "../../../dummy-data/workouts";
import { list_friend } from "../../../dummy-data/friends";

export const VideoCallInCamera = ({ className, ...rest }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { callId } = useParams();

  const [participants, setParticipants] = useState([]);
  const [userCreated, setUserCreated] = useState(null);
  const [listWorkoutVisible, setListWorkoutVisible] = useState(null);

  useEffect(() => {
    const visible = searchParams.get("workout");
    if (visible === "true") setListWorkoutVisible(true);
    if (visible === "false") setListWorkoutVisible(false);
  }, [searchParams]);

  useEffect(() => {
    const fakeCall = fakeCalls[callId];

    const participantIds = fakeCall.participants;
    const userCreatedId = fakeCall.userCreated;

    const participants = participantIds.map((id) => list_friend[id]);
    const userCreated = list_friend[userCreatedId];

    setParticipants(participants);
    setUserCreated(userCreated);
  }, [callId]);

  const handleWorkoutClick = (id) => {
    navigate(`${id}?${searchParams}`);
  };

  return (
    <div {...rest}>
      <img
        className="fixed top-0 left-0 object-cover w-full h-full "
        src="/img/videoCallMain.png"
      />
      <div className="relative z-10">
        <VideoCallParticipantsCamera className="mt-5">
          {participants.map((p) => (
            <VideoCallSmallCamera className="h-36 w-28" img={p.image} />
          ))}
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
