import { Routes, Route } from 'react-router-dom';
import TopNavBar from './components/TopNavBar.jsx';
// import MyProvider from './context/MyProvider.js';
import Login from './pages/Login.jsx';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';

import './App.css';


function App() {
  return (
      <div className="App">
        <TopNavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
