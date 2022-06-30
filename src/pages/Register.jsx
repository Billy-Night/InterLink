import { Box, Button, Typography } from "@mui/material";
import TopNavBar from "../components/TopNavBar";
import { ApsideForm, ApsideInputField } from "../styles/FormStyles";


const Register = () => {

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
        variant="h4"
        component="h1"
        color="var(--main-color)"
      >
        Registration
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
        <Button type="submit" variant="contained" sx={{ width: "max(100px)" }}>
          Register
        </Button>
      </ApsideForm>
    </Box>
    </>
  );
};

export default Register;
