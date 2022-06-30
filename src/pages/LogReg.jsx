import '../App.css';
import './LogReg.css';
import {Link} from "react-router-dom"

const LogReg = () => {
  return (
    <div id="LogReg__page">
      <header>
        <div className="LogReg__hero-img"></div>
      </header>
      <main>
        <h1 className="LogReg__title">Discover your Dream Project Here</h1>
        <p></p>
      </main>
      <footer>
        
        {/* <Link to="/register" className="LogReg__btn bright"> */}
          < button className="LogReg__btn bright" >Register</button>
          {/* </Link> */}
        
        
        <button className="LogReg__btn dark" action="">Sign In</button>
      </footer>
    </div>
  );
};

export default LogReg;
