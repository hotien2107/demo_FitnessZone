import './App.css';
import Button from './components/UI/button';
import Main from './layouts/main';
import MainNavbar from './layouts/navbar/main-navbar';

function App() {
  return (
    <div className='App drop-shadow-xl'>
      <Main>
        <Button>Click</Button>
      </Main>
      <MainNavbar />
    </div>
  );
}

export default App;
