import React from 'react'
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from '@mui/material';
import Navbar from "../Navbar/Navbar"
import Right from "../../../Assets/Images/right.png"
import './Home.css'

function Home() {
    const [value, setValue] = useState("1");
    const handleTabChange = (event, newTabIndex) => {
      setValue(newTabIndex);
    };

  return (
    <div>
      <Navbar />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            textColor="Black"
            indicatorColor="primary"
            aria-label="lab API tabs example"
          >
            <Tab
              style={{
                width: "140px",
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "17px",
                textTransform: "capitalize",
              }}
              label="Home Feed"
              value="1"
            />
            <Tab
              style={{
                width: "140px",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "17px",
                textTransform: "capitalize",
              }}
              label="Notifications"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "90px",
              borderRadius: "8px",
            }}
          >
            <Grid container spacing={0}>
              <Grid
                style={{
                  borderRight: "1px solid black",
                  fontFamily: "Montserrat",
                }}
                className="background-blue"
                item
                xs={4}
              >
                <CardContent
                  style={{
                    marginTop: "16px",
                    fontWeight: "500",
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                  }}
                >
                  Tables
                </CardContent>
              </Grid>

              <Grid item xs={4}>
                <h4 className="bold">OPEN</h4>
                <p className="green"> 15</p>
              </Grid>
              <Grid item xs={4}>
                <h4 className="bold">CLOSED</h4>
                <p className="red"> 0</p>
              </Grid>
            </Grid>
          </Card>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={6}>
                <h4 className="bolder">Balance</h4>
              </Grid>
              <Grid item xs={5}>
                <h4 className="bolder">$40,206.20</h4>
              </Grid>
              <Grid item xs={1}>
                <img className="right-icon" src={Right} alt=""></img>
              </Grid>
            </Grid>
          </Card>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={6}>
                <h4 className="bolder">Today's Revenue</h4>
              </Grid>
              <Grid item xs={5}>
                <h4 className="bolder">$3,682.89</h4>
              </Grid>
              <Grid item xs={1}>
                <img className="right-icon" src={Right} alt=""></img>
              </Grid>
            </Grid>
          </Card>
          <Grid container>
            <Grid item xs={12}>
              <Card
                style={{
                  marginTop: "20px",
                  maxWidth: "50%",
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  height: "80px",
                  borderRadius: "8px",
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <h4 className="">Today's Tab Orders</h4>
                    <p className=""> 56</p>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                style={{
                  marginTop: "20px",
                  maxWidth: "50%",
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  height: "80px",
                  borderRadius: "8px",
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <h4 className="">Avg. Tab Value</h4>
                    <p className=""> $51.92</p>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">This is the notification panel</TabPanel>
      </TabContext>
    </div>
  );
}

export default Home
