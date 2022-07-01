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
        <div className="LogReg__hero-img"
        sx={{
          margin: "0px 0px 3%",
          letterSpacing: "0.00938em",
          color:"rgb(24, 54, 80)",
          fontFamily: "Montserrat, sans-serif",
          /* font-size: 47px; */
          fontWeight: "900",
          lineHeight: "34px",
          marginTop: "3%",
          marginLeft: "10rem",
          marginRight: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
          
          color: "#183650",
        }}
        ></div>
      </header>

      <main className="LogReg__title"

      >
        <span className="LogReg__title-orange">Discover your</span>
        <span className="LogReg__title-blue"

        >dream project</span>
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
