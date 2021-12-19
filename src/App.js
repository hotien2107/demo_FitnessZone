import './App.css';
import Main from './layouts/main';
import MainNavbar from './layouts/navbar/main-navbar';
import Home from './pages/home';

function App() {
  return (
    <div className='App drop-shadow-xl'>
      <Main>
        <Home />
      </Main>
      <MainNavbar />
    </div>
  );
}

export default App;
