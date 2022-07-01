import { Box, Button, Typography } from '@mui/material';
import { fontFamily } from '@mui/system';
import TopNavBar from '../components/TopNavBar';
import { ApsideForm, ApsideInputField } from '../styles/FormStyles';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  //! Box = div, Typography = p or h1 etc.
  //! ApsideForm & ApsideInput are from styles folder, styled form & input
  return (
    <>
      <TopNavBar />
      <div id="reg__page">
        <div className="reg__title">
          <span className="orange1">Welcome to APSIDE</span>
          <span className="blue1">Find your project here</span>
        </div>

        <form className="reg__form">
          <input
            type="text"
            label="First Name"
            placeholder="First Name"
            // value={context.userData.firstName}
            // onChange={(event) => context.handleInput(event, "firstName")}
            required
          />
          <input
            type="text"
            label="Last Name"
            placeholder="Last Name"
            // value={context.userData.lastName}
            // onChange={(event) => context.handleInput(event, "lastName")}
            required
          />
          <input
            type="email"
            label="Email"
            placeholder="Email"
            // value={context.userData.email}
            // onChange={(event) => context.handleInput(event, "email")}
            required
          />
          <input
            type="password"
            label="Password"
            placeholder="Password"
            // value={context.userData.password}
            // onChange={(event) => context.handleInput(event, "password")}
            required
          />
          <Button
            onClick={handleClick}
            sx={{
              width: 'max(150px)',
              fontSize: '20px',
              minWidth: '20rem',
              fontColor: '#183650',
              fontFamily: 'Montserrat',
              fontWeight: '500',
              color: '#183650',
              mt: '3rem',
              minHeight: '5rem',
              fontSize: '150%',
              borderRadius: '1rem',
              border: '2px solid #ffffff',
              backgroundColor: '#fff',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            }}
          >
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
