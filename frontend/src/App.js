import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Add from './pages/Add';
import Multiply from './pages/Multiply';
import Compare from './pages/Comparison';
import Count from './pages/Counting';
import Settings from './pages/Settings';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/addition" element={<Add/>} />
          <Route path="/multiply" element={<Multiply/>} /> 
          <Route path='/counting' element={<Count />} /> 
          <Route path='/comparison' element={<Compare />} /> 
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
