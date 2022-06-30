
import { Box, Button, Typography } from "@mui/material";
import { fontFamily } from "@mui/system";
import TopNavBar from "../components/TopNavBar";
import { ApsideForm, ApsideInputField } from "../styles/FormStyles"
import { useNavigate } from "react-router-dom";



const Register = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  //! Box = div, Typography = p or h1 etc.
  //! ApsideForm & ApsideInput are from styles folder, styled form & input  
  return (
    <>
    <TopNavBar />
    <Box
     sx={{
      marginTop: "5rem",
      marginLeft: "10rem",
      marginRight: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2rem",
      fontFamily: "Hind, sans-serif",
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
        Welcome to the <span 
        
        style={{
          color:"#183650",
          fontWeight:"900",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          fontSize:"1.5em",
          marginInline:".5em",
          marginBottom:"2%",
          fontFamily: "Montserrat, sans-serif"
          }}>{" "}APSIDE {" "}</span>collective
      </Typography>
      <ApsideForm>
        <ApsideInputField
          type="text"
          label="First Name"
          // value={context.userData.firstName}
          // onChange={(event) => context.handleInput(event, "firstName")}
          required
        />
        <ApsideInputField
          type="text"
          label="Last Name"
          // value={context.userData.lastName}
          // onChange={(event) => context.handleInput(event, "lastName")}
          required
        />
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
        <Button onClick={handleClick}
                    sx={{ 
                      width: "max(150px)",
                      fontSize: "20px",
                      minWidth: "15rem",
                      fontColor: "#183650",
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      color: "#183650",
                      minHeight: "5rem",
                      fontSize: "150%",
                      borderRadius: "1rem",
                      border: "2px solid #ffffff",
                      backgroundColor: "#fff",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                    }}>
        
        
        {/* type="submit" variant="contained" sx={{ width: "max(100px)" }}> */}
          Register
        </Button>
      </ApsideForm>
    </Box>
    </>
  );
};

export default Register;
