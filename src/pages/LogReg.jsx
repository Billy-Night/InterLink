import '../App.css';
import './LogReg.css';
import { useNavigate } from 'react-router-dom';

const LogReg = () => {
  const navigate = useNavigate();
  const handleClickLogIn = () => {
    navigate('/login');
  };
  const handleClickReg = () => {
    navigate('/register');
  };

  return (
    <div id="LogReg__page">
      <header>
        <div className="LogReg__hero-img"></div>
      </header>

      <main className="LogReg__title">
        <span className="LogReg__title-orange">Discover your</span>
        <span className="LogReg__title-blue">dream project</span>
      </main>

      <footer>
        <button onClick={handleClickReg} className="LogReg__btn bright">
          REGISTER
        </button>

        <button onClick={handleClickLogIn} className="LogReg__btn dark">
          LOGIN
        </button>
      </footer>
    </div>
  );
};

export default LogReg;
