// import { useNavigate } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import { ApsideForm, ApsideInputField } from "../styles/FormStyles";
import { useNavigate } from "react-router-dom";
const { Typography, Button, Link } = require("@mui/material");
const { Box } = require("@mui/system");

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <>
    <TopNavBar />
    <Box
         sx={{
          marginTop: "5rem",
          marginLeft: "2rem",
          marginRight: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "2rem",
          marginBottom: "2rem",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Hind, sans-serif",
          fontWeight: "700",
          lineHeight: "34px",
          color: "#183650", 
        }}
    >
          <Typography       
            color="#e79759"
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="3%"
            fontFamily= "Hind, sans-serif"
            fontWeight="700"
            fontSize= "34px"
            lineHeight= "34px"
          >
           WELCOME BACK 
          </Typography>
          <Typography
            color="var(--main-color)"
            fontFamily= "Montserrat, sans-serif"
            fontSize={{xs: "18px", md:"32px", lg: "47px"}}
            fontWeight="900"
            lineHeight="34px"
            wrap="nowrap"
            marginBottom="3%"
            display="inline-block"
          > 
          You have a lot of projects to discover</Typography>

          <ApsideForm>
            <ApsideInputField
              type="email"
              label="Email"
              required
            />
            <ApsideInputField
              type="password"
              label="Password"
              required
            />
            <Button onClick={handleClick}
            sx={{ 
              width: "max(150px)",
              fontSize: "20px",
              minWidth: "5rem",
              fontColor: "#183650",
              fontFamily: "Montserrat",
              fontWeight: "400",
              color: "#183650",
              minHeight: "5rem",
              fontSize: "150%",
              borderRadius: "1rem",
              border: "2px solid #ffffff",
              backgroundColor: "#fff",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            }}>

              Login
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
