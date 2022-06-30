import { Routes, Route } from "react-router-dom";
import TopNavBar from "./components/TopNavBar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import SideNavBar from "./components/SideNavBar.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
