import { Routes, Route } from "react-router-dom";
// import TopNavBar from './components/TopNavBar.jsx';
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import LogReg from "./pages/LogReg.jsx";

import "./App.css";
import UserTech from "./components/UserTech.jsx";

function App() {
  return (
    <div className="App">
      {/* <TopNavBar /> */}
      <Routes>
        <Route path="/" element={<LogReg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprojects" element={<UserTech />} />
      </Routes>
    </div>
  );
}

export default App;
