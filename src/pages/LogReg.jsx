import '../App.css';
import './LogReg.css';
import { useNavigate } from 'react-router-dom';


const LogReg = () => {
  const navigate = useNavigate();
  const handleClickLogIn = () => {
    navigate("/login");
  }
  const handleClickReg = () => {
    navigate("/register")
  }

  return (
    <div id="LogReg__page">
      <header>
        <div className="LogReg__hero-img"></div>
      </header>

        <span className="LogReg__title"
        >Discover your dream project</span>
      
      <footer>
        <button 
        onClick={handleClickReg} className="LogReg__btn bright">
          REGISTER
        </button>

        <button 
        onClick={handleClickLogIn} className="LogReg__btn dark">
          LOGIN
        </button>
      </footer>
    </div>
  );
};

export default LogReg;
