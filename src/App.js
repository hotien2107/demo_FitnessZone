import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavbar from './layouts/navbar/main-navbar';
import Chat from './pages/chat';
import Home from './pages/home';
import ListFriends from './pages/list-friends';

function App() {
  return (
    <div className='App drop-shadow-xl '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='list-friends'>
          <Route index element={<ListFriends />} />
          <Route path=':friendId' element={<Chat />} />
        </Route>
      </Routes>

      <MainNavbar />
    </div>
  );
}

export default App;
