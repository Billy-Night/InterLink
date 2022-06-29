import { Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar.jsx';
import MyProvider from './context/MyProvider.js';
// import Login from './pages/Login.jsx';
// import Register from './pages/Register';
// import Profile from './pages/Home';

import './App.css';


function App() {
  return (
    <MyProvider >
      <div className="App">
        <TopNavBar />
        <h1>Home page</h1>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} /> */}
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
