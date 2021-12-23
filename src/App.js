import './App.css';
import HomeHeader from './layouts/header/HomeHeader';
import Main from './layouts/main';
import MainNavbar from './layouts/navbar/main-navbar';
import Home from './pages/home';

function App() {
  return (
    <div className='App drop-shadow-xl'>
      <HomeHeader />
      <Main>
        <Home />
      </Main>
      <MainNavbar />
    </div>
  );
}

export default App;
