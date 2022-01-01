import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { HowToReg } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";


const NavBar = () => {
  const pages = ["Home", "Products", "Contact", "About"];
  const state = useSelector(state => state.cartReducer)
  // console.log(state)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
 
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const theme = createTheme({
    palette: {
//       primary: {
//         // Purple and green play nicely together.
//         main:"#000000",
//       },
      secondary: {
        // This is green.A700 as hex.
        main: "#000000",
      },
    },
  });
  
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <HowToReg />
          </Badge>
        </IconButton>
        <p style={{ marginTop: "16px" }}>Register</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <LoginIcon />
          </Badge>
        </IconButton>
        <p style={{ marginTop: "16px" }}>Login</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" aria-haspopup="true" color="inherit">
          <ShoppingCartIcon />
        </IconButton>
        <p style={{ marginTop: "16px" }}>Cart(0)</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "#EEEEEE", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters >
           <Link to="/" style={{textDecoration:"none"}}>
           <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "black",
              }}
            >
              SHOPPING CART
            </Typography>
           </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} >
                    {
                    <Typography textAlign="center" >{page}</Typography>
                    }
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                color: "black",
                fontSize:{xs:"16px"},
                textAlign:{md:"center"}
              }}
            >
              SHOPPING CART
            </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },  }}>
              {pages.map((page) => (
               <Link to= {page==="Home" ? '/' :`/${page}`} style={{textDecoration:"none"}}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                  
                >
                  {page}
                </Button>
               </Link>
              ))}
            </Box>
            <Toolbar style={{color:"black"}}>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" },}}>
                <ThemeProvider theme={theme}>
                  <Link to="/register" style={{textDecoration:"none"}}>
                  <Button color="secondary" variant="outlined" startIcon={<HowToReg />} style={{margin:2}} >
                    Register
                  </Button>
                  </Link>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                 <Link to="/login" style= {{textDecoration:"none"}}>
                 <Button color="secondary" variant="outlined" startIcon={<LoginIcon  />} style={{margin:2}}>
                  Login
                  </Button>
                 </Link>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                 <Link to="/cart" style={{textDecoration:"none"}}>
                 <Button color="secondary" variant="outlined" startIcon={<ShoppingCartIcon />} style={{margin:2}}>
                  Cart({state.length})
                  </Button>
                 </Link>
                </ThemeProvider>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
            {renderMobileMenu}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
