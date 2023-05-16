import './App.css';
// eslint-disable-next-line 
import Home from './Components/Home';
// eslint-disable-next-line
import AddLink from './Components/AddLink';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*<Home/>*/}
      {/*<AddLink/>*/}
     <NavBar/>
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/add' element={<AddLink/>}/>     
  </Routes>
    </div>
  );
}

export default App;
