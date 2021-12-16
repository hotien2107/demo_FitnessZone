import './App.css';
import Button from './components/UI/button';
import Main from './layouts/main';
import Navbar from './layouts/navbar';

function App() {
  return (
    <div className='App drop-shadow-xl'>
      <Main>
        <Button>Click</Button>
      </Main>
      <Navbar />
    </div>
  );
}

export default App;
