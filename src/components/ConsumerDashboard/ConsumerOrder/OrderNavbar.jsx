import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/AppLogo.svg";
import { Grid } from "@mui/material";
import Arrow from "../../../Assets/Images/whitearrow.png"


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
            <Grid item xs={3}>
            <img style={{marginLeft:"-50%", marginTop:'40%',}} src={Arrow} alt=""/>
            </Grid>
            <Grid item xs={9}>
                <p style={{textAlign:"right", marginRight:'10px', marginTop:"15%",fontSize:'18px', fontWeight:'500' }}>Entrees</p>
            </Grid>
          </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
