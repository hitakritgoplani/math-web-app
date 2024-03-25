import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Add from './pages/Add';
import Multiply from './pages/Multiply';
import Compare from './pages/Comparison';
import Subtraction from './pages/Subtraction';
import Settings from './pages/Settings';
import Modes from './pages/Modes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayOnline from './pages/PlayOnline';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/modes' element={<Modes />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/addition" element={<Add/>} />
          <Route path="/multiplication" element={<Multiply/>} /> 
          <Route path='/subtraction' element={<Subtraction />} /> 
          <Route path='/comparison' element={<Compare />} />
          <Route path='/play-online' element={<PlayOnline />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
