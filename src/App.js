import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { DETAIL_MAIN_ROUTES, MAIN_ROUTES } from './constants';
import MainNavbar from './layouts/navbar/main-navbar';
import Chat from './pages/chat';
import Home from './pages/home';
import ListFriends from './pages/list-friends';
import Exercises from "./pages/exercises";
import ExerciseClass from "./components/exercises/ExerciseClass";

const isIn = (str1, str2) => {
  return str1.indexOf(str2);
};

function App() {
  const location = useLocation();
  const currPath = location.pathname.substring(1);

  const isChat = isIn(currPath, DETAIL_MAIN_ROUTES.FRIENDS.CHAT) >= 0;

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
        </Route>
      </Routes>
      {isChat ? '' : <MainNavbar />}
    </div>
  );
}

export default App;
