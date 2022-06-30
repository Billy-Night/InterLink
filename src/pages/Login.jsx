// import { useNavigate } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import { ApsideForm, ApsideInputField } from "../styles/FormStyles";
const { Typography, Button, Link } = require("@mui/material");
const { Box } = require("@mui/system");

const Login = () => {
  
  //! Box = div, Typography = p or h1 etc.
  //! ApsideForm & ApsideInput are from styles folder, styled form & input 
  return (
    <>
    <TopNavBar />
    <Box
      sx={{
        marginTop: "5rem",
        marginLeft: "2rem",
        marginRight: "2rem",
      }}
    >
          <Typography
            variant="h4"
            component="h1"
            color="var(--main-color)"
          >
            Login
          </Typography>
          <ApsideForm>
            <ApsideInputField
              type="email"
              label="Email"
              // value={context.userData.email}
              // onChange={(event) => context.handleInput(event, "email")}
              required
            />
            <ApsideInputField
              type="password"
              label="Password"
              // value={context.userData.password}
              // onChange={(event) => context.handleInput(event, "password")}
              required
            />
            <Button type="submit" variant="contained" sx={{ width: "max(150px)" }}>
              Log in
            </Button>
            <Link
              color="var(--main-color)"
              href="/register"
              underline="hover"
            >
              Register a new account
            </Link>
          </ApsideForm>
    </Box>
    </>
  );
}

export default Login;
