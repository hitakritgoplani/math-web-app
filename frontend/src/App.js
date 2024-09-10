import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Add from './pages/Add';
import Subtraction from './pages/Subtraction';
import Compare from './pages/Comparison';
import Multiply from './pages/Multiply';
import Divison from './pages/Divison';
import Settings from './pages/Settings';
import Modes from './pages/Modes';
import BouncingBalls from './components/BouncingBalls';
import PlayOnline from './pages/PlayOnline';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/modes" element={<Modes />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/addition" element={<Add/>} />
          <Route path="/multiplication" element={<Multiply/>} /> 
          <Route path="/divison" element={<Divison/>} /> 
          <Route path='/subtraction' element={<Subtraction />} /> 
          <Route path='/comparison' element={<Compare />} />
          <Route path='/play-online' element={<PlayOnline />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/bounce' element={<BouncingBalls />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
