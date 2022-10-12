import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/AppLogo.svg";
import { Grid } from "@mui/material";
import "./Navbar.css";
import SCAN from '../../../Assets/Images/scan.png';
import Avatar from '../../../Assets/Images/Avatar.png'

const useStyles = makeStyles((theme) => ({
  navlinks: { marginLeft: theme.spacing(10), display: "flex" },
  logo: { flexGrow: "1", cursor: "pointer" },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "0px",
    background: "blue",
    "&:hover": { color: "white", borderBottom: "1px solid white" },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      style={{ background: "#0077FF", height: "201px" }}
    >
      <CssBaseline />
      <Toolbar>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography id="logoConsumer" className={classes.logo}>
              <Link to="/HostHome">
                <img className="appLogoConsumer" src={Logo} alt=""></img>
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              style={{
                color: "white",
                marginLeft: "-25px",
                backgroundColor: "#0077FF ",
                borderRadius: "8px ",
                fontWeight: "500 ",
                marginTop: "20px ",
                border: "1px solid black ",
                fontFamily: "Montserrat ",
                width: "97px ",
                height: "43px ",
                textTransform: "capitalize ",
              }}
              variant="contained"
            >
              Menu
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              style={{
                color: "#0077FF",
                marginLeft: "-25px",
                backgroundColor: "white",
                borderRadius: "8px ",
                fontWeight: "500 ",
                marginTop: "20px ",
                border: "1px solid black ",
                fontFamily: "Montserrat ",
                width: "97px ",
                height: "43px ",
                textTransform: "capitalize ",
              }}
              variant="contained"
            >
              Tab
            </Button>
          </Grid>
          <Grid item xs={2}>
            <img
              style={{ marginTop: "40%", marginLeft: "-20%" }}
              src={SCAN}
              alt=""
            />
          </Grid>
          <Grid item xs={2}>
            <img style={{ marginTop: "30%" }} src={Avatar} alt="" />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
