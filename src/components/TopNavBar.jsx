import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

// import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/logo-apside.png";
import "./TopNavBar.css";
// import { Link } from "react-router-dom";


// const pages = ['Products', 'Pricing', 'Blog'];
const settings = [
  { label: "Profile", link: "/profile" },
  { label: "Dashboard", link: "/dashboard" },
  { label: "Logout", link: "/" },
];

const TopNavBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      // Elevation determines the box shadow of all components that use Paper - including AppBar
      elevation={2}
      sx={{ width: "100vw", backgroundColor: "transparent" }}
    >
      <Container maxWidth="xl">
        <Toolbar className="top-navbar-toolbar" disableGutters>
          <a href="/">
            <img className="logo-navbar" src={logo} alt="logo"></img>
          </a>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Nav Menu">
                  {/* You can add a custom icon here */}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                  <a className="top-navbar-menu-item" href={setting.link}>
                    {setting.label}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopNavBar;
