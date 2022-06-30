import '../App.css';
import '../css/pages/LogReg.css';
import { useNavigate } from 'react-router-dom';

const LogReg = () => {

  const navigate = useNavigate();

  const handleClickLogIn = () => {
    navigate("/dashboard");
  }
  const handleClickReg = () => {
    navigate("/register")
  }

  return (
    <div id="LogReg__page">
      <header>
        <div className="LogReg__hero-img"></div>
      </header>
      <main>
        <h1 className="LogReg__title">Discover your Dream Project Here</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </main>
      <footer>
        <button onClick={handleClickReg} className="LogReg__btn bright">Register</button>
        <button onClick={handleClickLogIn} className="LogReg__btn dark">Sign In</button>
      </footer>
    </div>
  );
};

export default LogReg;
