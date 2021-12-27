import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {
  MAIN_ROUTES,
  DETAIL_MAIN_ROUTES, 
  VIDEO_CALL,
  VIDEO_CALL_ROUTES,
} from "./constants";
import MainNavbar from "./layouts/navbar/main-navbar";
import { VideoCallLayout } from "./layouts/VideoCallLayout";
import Chat from "./pages/chat";
import Home from "./pages/home";
import ListFriends from "./pages/list-friends";
import { VideoCall } from "./pages/VideoCall";
import { VideoCallExercise } from "./pages/VideoCallExercise";
import InviteVideoCall from './pages/invite-video-call';
import ListFriendMenu from './pages/list-friend-menu';
import Exercises from "./pages/exercises";
import ExerciseClass from "./components/exercises/ExerciseClass";
import ListTrainers from "./pages/list-trainers";

const isIn = (str1, str2) => {
  return str1.indexOf(str2) >= 0;
};

function App() {
  const location = useLocation();
  const currPath = location.pathname.substring(1);

  const isChat = isIn(currPath, DETAIL_MAIN_ROUTES.FRIENDS.CHAT);
  const isCall = isIn(currPath, VIDEO_CALL_ROUTES.HOME);
 
  
  return (
    <div className='App drop-shadow-xl h-screen'>
      <Routes>
        <Route path={MAIN_ROUTES.HOME} element={<Home />} />
        <Route path={MAIN_ROUTES.EXERCISES.INDEX}>
          <Route index element={<Exercises />} />
          <Route path={MAIN_ROUTES.EXERCISES.TRAINER_CLASS} element={<ExerciseClass />} />
        </Route>
        <Route path={MAIN_ROUTES.FRIENDS.INDEX}>
          <Route index element={<ListFriends />} />
          <Route path={MAIN_ROUTES.FRIENDS.CHAT} element={<Chat />} />
          <Route path={MAIN_ROUTES.FRIENDS.CHATMENU} element={<ListFriendMenu />} />
          <Route path={MAIN_ROUTES.FRIENDS.INVITE} element={<InviteVideoCall />} />
        </Route>
        <Route path={MAIN_ROUTES.TRAINERS.INDEX}>
          <Route index element={<ListTrainers />} />
        </Route>
        <Route path={VIDEO_CALL_ROUTES.HOME} element={<VideoCallLayout />}>
          <Route path={VIDEO_CALL_ROUTES.CHILD.VIDEO} element={<VideoCall />} />
          <Route
            path={VIDEO_CALL_ROUTES.CHILD.EXERCISE}
            element={<VideoCallExercise />}
          />
        </Route>
      </Routes>

      {isChat || isCall ? "" : <MainNavbar />}
    </div>
  );
}

export default App;
