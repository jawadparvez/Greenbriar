import React from 'react'
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from '@mui/material';
import Navbar from "../Navbar/Navbar"
import { Link } from "@mui/material";
import Right from "../../../Assets/Images/right.png"
import './Home.css'

function Home() {
    const [value, setValue] = useState("1");
    const handleTabChange = (event, newTabIndex) => {
      setValue(newTabIndex);
    };

    function handleClick() {
      
    }

  return (
    <div>
      <Navbar />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="black"
            aria-label="lab API tabs example"
          >
            <Tab
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "17px",
                padding:"12px 16px", 
                textTransform: "capitalize",
              }}
              label="Home Feed"
              value="1"
            />
            <Tab
              style={{

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
                    marginTop: "15px",
                    marginBottom: "10px",
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
                <h4 className="bolder text-color">Balance</h4>
              </Grid>
              <Grid item xs={5}>
                <h4 className="balance-value">$40,206.20</h4>
              </Grid>
              <Grid item xs={1}>
                <img onClick={handleClick} className="right-icon" src={Right} alt=""></img>
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
                <h4 className="bolder text-color">Today's Revenue</h4>
              </Grid>
              <Grid item xs={5}>
                <h4 className="balance-value">$3,682.89</h4>
              </Grid>
              <Grid item xs={1}>
                <img className="right-icon" src={Right} alt=""></img>
              </Grid>
            </Grid>
          </Card>
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
                  <Grid item xs={12}>
                    <h4 className="tab-heading text-color">
                      Today's Tab Orders
                    </h4>
                    <p className="tab-value"> 65</p>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  height: "80px",
                  borderRadius: "8px",
                }}
              >
                <Grid item xs={12}>
                  <h4 className="tab-heading text-color">Avg. Tab Value</h4>
                  <p className="tab-value"> $51.92</p>
                </Grid>
              </Card>
            </Grid>
          </Grid>
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
              <Grid item xs={11}>
                <h4 className="bolder text-color">Settings</h4>
              </Grid>

              <Grid item xs={1}>
                <img className="right-icon" src={Right} alt=""></img>
              </Grid>
            </Grid>
          </Card>
        </TabPanel>
        <TabPanel value="2">
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
              backgroundColor: "#E3F2FD",
            }}
          >
            <p
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                marginTop: "5%",
              }}
              className="font-bold "
            >
              Welcome to walletpay. Get started with a quick tour.
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                  display: "inline",
                }}
              >
                Take the tour?
              </Link>
            </p>
          </Card>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
              backgroundColor: "#E3F2FD",
            }}
          >
            <p className="font-bold p-noti">
              Invite accepted by .
              <Link style={{ textDecoration: "none", fontWeight: "500" }}>
                Olivia J.
              </Link>
            </p>
          </Card>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
              backgroundColor: "#E3F2FD",
            }}
          >
            <p
              style={{ display: "inline-block", marginTop: "5%" }}
              className="font-bold"
            >
              Successfully transferred $40,000 from WALLET/
              <span className="pay">PAY</span>
            </p>
          </Card>
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default Home
