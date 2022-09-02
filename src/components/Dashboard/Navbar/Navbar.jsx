import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "../Drawer/Drawer.jsx";
import Logo from "../../../Assets/Images/AppLogo.svg"
import "./Navbar.css"

const useStyles = makeStyles((theme) => ({
  navlinks: { marginLeft: theme.spacing(10), display: "flex" },
  logo: { flexGrow: "1", cursor: "pointer" },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(2),
    background:'blue',
    "&:hover": { color: "white", borderBottom: "1px solid white" },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" style={{ background: "#0077FF" }}>
      <CssBaseline />
      <Toolbar>
        <Typography id="logo" variant="span" className={classes.logo}>
          <img className="appLogo" src={Logo} alt=""></img>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home Feed
            </Link>
            <Link to="/about" className={classes.link}>
              Menu
            </Link>
            <Link to="/contact" className={classes.link}>
              Table Manager
            </Link>
            <Link to="/faq" className={classes.link}>
              Users
            </Link>
            <Link to="/faq" className={classes.link}>
              Accounts
            </Link>
            <Link to="/faq" className={classes.link}>
              Settings
            </Link>
            <Link to="/faq" className={classes.link}>
              Support
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
