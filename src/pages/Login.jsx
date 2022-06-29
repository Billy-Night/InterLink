import { useNavigate } from "react-router-dom";
import { ApsideForm, ApsideInputField } from "../styles/FormStyles";
const { Typography, Button, Link } = require("@mui/material");
const { Box } = require("@mui/system");

const Login = () => {
  
  return (
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
            color="var(--menu-and-buttons-color)"
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
              color="var(--menu-and-buttons-color)"
              href="/register"
              underline="none"
            >
              Register a new account
            </Link>
          </ApsideForm>
    </Box>
  );
}

export default Login;
