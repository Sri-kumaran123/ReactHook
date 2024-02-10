
import './App.css';
import State from './State';
import Heading from './componenets/Heading';
import { Route,Routes } from 'react-router-dom';
import Memo from './Memo';

function App() {
  return (
    <>
    <Heading/>
    <main>
      <Routes>
        <Route path='/' Component={State}/>
        <Route path='/useeffect' Component={Memo}/>
      </Routes>
      
    </main>
    </>
  );
}

export default App;
