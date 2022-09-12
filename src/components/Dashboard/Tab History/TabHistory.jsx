import React from 'react'
import './tabhistory.css'
import Navbar from '../Navbar/Navbar'
import {Divider, Grid } from '@material-ui/core';
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Button } from '@mui/material';
import InputBase from "@mui/material/InputBase";
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Microphone from '../../../Assets/Images/Microphone.png'
import BottomArrow from '../../../Assets/Images/bottomarrow.png'

function TabHistory() {
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item xs={6}>
          <Link to="/tablemanager">
            <img
              style={{
                marginTop: "15px",
                marginLeft: "10px",
                AlignItems: "left !important",
                display: "flex",
              }}
              src={BlackArrow}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <h3 style={{ marginLeft: "auto" }}>Tab History</h3>
        </Grid>
      </Grid>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          marginLeft: "30px",
          display: "flex",
          alignItems: "center",
          background: "#FAFAFA",
          width: 300,
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <img src={Microphone} alt="" />
        </IconButton>
      </Paper>

      <Grid container spacing={10}>
        <Grid item xs={2}>
          <Button
            fullWidth
            sx={{
              color: "black",
              marginLeft: "10px!important",
              backgroundColor: "white",
              borderColor: "black",
              borderRadius: "8px",
              fontWeight: "500",
              marginTop: "20px!Important",
              border: "1px solid black",
              fontFamily: "Montserrat!important",
              width: "85px",
              fontSize: "13px",
              height: "40px",
              textTransform: "capitalize",
            }}
            variant="contained"
          >
            Today
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              color: "black",
              backgroundColor: "white",
              marginLeft: "20px!important",
              borderColor: "black",
              borderRadius: "8px",
              marginTop: "20px!Important",
              fontWeight: "500",
              fontSize: "13px",
              border: "1px solid black",
              fontFamily: "Montserrat!important",
              width: "110px",
              height: "40px",
              textTransform: "capitalize",
            }}
            variant="contained"
          >
            This Week
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              color: "black",
              backgroundColor: "white",
              marginLeft: "20px!important",
              borderColor: "black",
              borderRadius: "8px",
              marginTop: "20px!Important",
              marginBottom: "20px!important",
              fontWeight: "500",
              border: "1px solid black",
              fontFamily: "Montserrat!important",
              width: "140px",
              fontSize: "13px",
              height: "40px",
              textTransform: "capitalize",
            }}
            variant="contained"
          >
            Data Range{" "}
            <img
              style={{ marginLeft: "3px", marginTop: "4px" }}
              src={BottomArrow}
              alt=""
            />
          </Button>
        </Grid>
      </Grid>
      <Divider />

      <p
        style={{
          textAlign: "left",
          marginLeft: "10px",
          color: "#B1B1B1",
          fontFamily: "Montserrat",
        }}
      >
        1 - 3 of 55 results
      </p>
      <Card
        style={{
          marginTop: "20px",
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "80px",
          borderRadius: "8px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Grid item xs={12}>
          <h4 className="tab-heading text-color">Avg. Tab Value</h4>
          <p className="tab-value"> $51.92</p>
        </Grid>
      </Card>
    </div>
  );
}

export default TabHistory
