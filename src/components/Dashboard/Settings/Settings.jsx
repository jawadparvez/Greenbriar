import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Right from "../../../Assets/Images/rightarrow.png";
import Card from "@mui/material/Card";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@mui/material";

function Settings() {
        const [value, setValue] = useState("1");
        const handleTabChange = (event, newTabIndex) => {
          setValue(newTabIndex);
        };

        const [show, setShow] = useState(true);
        const [showw, setShoww] = useState(false);
        const [showe, setShowe] = useState(true);
        const [showwe, setShowwe] = useState(false);

        function onClickShow() {
            setShow(!show)
            setShoww(!showw)
        }

        

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={6}>
          <Link to="/Accounts">
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
          <h3
            style={{
              textAlign: "right",
              marginRight: "20px",
              fontSize: "18px",
              marginTop: "5px",
            }}
          >
            Settings
          </h3>
        </Grid>
      </Grid>
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
                marginLeft: "10px!important",
                width: "120px",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "capitalize",
                padding: "0px!important",
              }}
              label="Organization"
              value="1"
            />
            <Tab
              style={{
                width: "5%",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "capitalize",
                padding: "0px!important",
              }}
              label="Profile"
              value="2"
            />
            <Tab
              style={{
                width: "5%",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "capitalize",
                padding: "0px!important",
              }}
              label="Security"
              value="3"
            />
            <Tab
              style={{
                width: "5%",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "capitalize",
                padding: "0px!important",
              }}
              label="Support"
              value="4"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          {show ? (
            <>
              <Grid container>
                <Grid item xs={8}>
                  <p
                    style={{
                      fontSize: "16px",
                      textDecoration: "underline",
                      fontWeight: "600",
                      textAlign: "left",
                      marginLeft: "-10px",
                    }}
                  >
                    Resturant Name
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginTop: "0px",
                      marginBottom: "20px",
                      marginLeft: "-10px",
                    }}
                  >
                    Italy Bar & Grill, LLC
                  </p>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    sx={{
                      color: "#0077FF !important",
                      marginLeft: "40px!important",
                      backgroundColor: "white !important",
                      borderRadius: "8px !important",
                      fontWeight: "500 !important",
                      marginTop: "0px !important",
                      border: "1px solid black !important",
                      fontFamily: "Montserrat !important",
                      width: "62px !important",
                      height: "27px !important",
                      textTransform: "capitalize !important",
                    }}
                    variant="contained"
                    onClick={onClickShow}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>

              <p
                style={{
                  fontSize: "16px",
                  textDecoration: "underline",
                  fontWeight: "600",
                  textAlign: "left",
                  marginLeft: "-10px",
                }}
              >
                Resturant Address
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "-10px",
                }}
              >
                {" "}
                1234 State Road, Columbus, GA, 31907
              </p>
              <p
                style={{
                  fontSize: "16px",
                  textDecoration: "underline",
                  fontWeight: "600",
                  textAlign: "left",
                  marginLeft: "-10px",
                }}
              >
                Phone Number
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "-10px",
                }}
              >
                +1 (555) 023-9034
              </p>

              <p
                style={{
                  fontSize: "16px",
                  textDecoration: "underline",
                  fontWeight: "600",
                  textAlign: "left",
                  marginLeft: "-10px",
                }}
              >
                POS Integration
              </p>
              <p
                style={{
                  marginLeft: "3px",
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "-10px",
                }}
              >
                Click "Edit" above to connect your POS system.
              </p>
            </>
          ) : null}
          {showw ? (
            <>
              <p
                style={{
                  color: "#344054",
                  marginTop: "5px",
                  textAlign: "left",
                  fontSizeL: "13px",
                  fontWeight: "600",
                }}
              >
                Legal Resturant Name
              </p>
              <TextField
                className="input"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "#000000 !important",
                      border: "1px solid black !important ",
                      borderRadius: "8px !important ",
                      height: "47px !important",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#000000",
                      border: "1px solid !important",
                    },
                  },
                }}
                label="Italy Bar and Grill, LLC"
                size="small"
                variant="outlined"
              />
              <p
                style={{
                  color: "#344054",
                  marginTop: "20px",
                  textAlign: "left",
                  fontSizeL: "13px",
                  fontWeight: "600",
                }}
              >
                Resturant Address
              </p>
              <TextField
                className="input"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "#000000 !important",
                      border: "1px solid black !important ",
                      borderRadius: "8px !important ",
                      height: "47px !important",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#000000",
                      border: "1px solid !important",
                    },
                  },
                }}
                label="1234 State Road, Columbus, GA, 31907"
                size="small"
                variant="outlined"
              />
              <p
                style={{
                  color: "#344054",
                  marginTop: "20px",
                  textAlign: "left",
                  fontSizeL: "13px",
                  fontWeight: "600",
                }}
              >
                Phone Number
              </p>
              <TextField
                className="input"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "#000000 !important",
                      border: "1px solid black !important ",
                      borderRadius: "8px !important ",
                      height: "47px !important",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#000000",
                      border: "1px solid !important",
                    },
                  },
                }}
                label="+1 (555) 023-9034"
                size="small"
                variant="outlined"
              />
              <p
                style={{
                  color: "#344054",
                  marginTop: "20px",
                  textAlign: "left",
                  fontSizeL: "13px",
                  fontWeight: "600",
                }}
              >
                POS Integration
              </p>
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
                  <Grid item xs={8}>
                    <h4
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginTop: "10%",
                      }}
                      className=" text-color"
                    >
                      Square, Toast, Clover, NCR
                    </h4>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#0077FF !important",
                        marginLeft: "0px!important",
                        backgroundColor: "white !important",
                        borderRadius: "8px !important",
                        fontWeight: "500 !important",
                        marginTop: "17% !important",
                        border: "1px solid black !important",
                        fontFamily: "Montserrat !important",
                        width: "95px !important",
                        height: "40px !important",
                        textTransform: "capitalize !important",
                      }}
                      variant="contained"
                      onClick={onClickShow}
                    >
                      Connect
                    </Button>
                  </Grid>
                </Grid>
              </Card>
              <Grid container>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    sx={{
                      color: "#0077FF !important",
                      marginLeft: "0px!important",
                      backgroundColor: "white !important",
                      borderRadius: "8px !important",
                      fontWeight: "500 !important",
                      marginTop: "30% !important",
                      border: "1px solid black !important",
                      fontFamily: "Montserrat !important",
                      width: "81px !important",
                      height: "40px !important",
                      textTransform: "capitalize !important",
                    }}
                    variant="contained"
                    onClick={onClickShow}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    sx={{
                      color: "white !important",
                      marginLeft: "0px!important",
                      backgroundColor: "#0077FF !important",
                      borderRadius: "8px !important",
                      fontWeight: "500 !important",
                      marginTop: "30% !important",
                      border: "1px solid black !important",
                      fontFamily: "Montserrat !important",
                      width: "66px !important",
                      height: "40px !important",
                      textTransform: "capitalize !important",
                    }}
                    variant="contained"
                    onClick={onClickShow}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : null}
        </TabPanel>
        <TabPanel value="2">
          <Grid container>
            <Grid item xs={8}>
              <p
                style={{
                  fontSize: "16px",
                  textDecoration: "underline",
                  fontWeight: "600",
                  textAlign: "left",
                  marginLeft: "-10px",
                }}
              >
                Name
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "-10px",
                }}
              >
                Leah Martin
              </p>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                sx={{
                  color: "#0077FF !important",
                  marginLeft: "40px!important",
                  backgroundColor: "white !important",
                  borderRadius: "8px !important",
                  fontWeight: "500 !important",
                  marginTop: "0px !important",
                  border: "1px solid black !important",
                  fontFamily: "Montserrat !important",
                  width: "62px !important",
                  height: "27px !important",
                  textTransform: "capitalize !important",
                }}
                variant="contained"
              >
                Edit
              </Button>
            </Grid>
          </Grid>

          <p
            style={{
              fontSize: "16px",
              textDecoration: "underline",
              fontWeight: "600",
              textAlign: "left",
              marginLeft: "-10px",
            }}
          >
            Email
          </p>
          <Grid container>
            <Grid item xs={9}>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "13px",
                  fontWeight: "500",
                  marginTop: "0px",
                  marginBottom: "20px",
                  marginLeft: "-10px",
                }}
              >
                {" "}
                leah23martin@italybarandgrill.com
              </p>
            </Grid>
            <Grid item xs={3}>
              <p
                style={{
                  color: "#0077FF",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                CONFIRM
              </p>
            </Grid>
          </Grid>

          <p
            style={{
              fontSize: "16px",
              textDecoration: "underline",
              fontWeight: "600",
              textAlign: "left",
              marginLeft: "-10px",
            }}
          >
            Phone Number
          </p>
          <p
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "0px",
              marginBottom: "20px",
              marginLeft: "-10px",
            }}
          >
            +1 (555) 023-9034
          </p>

          <p
            style={{
              fontSize: "16px",
              textDecoration: "underline",
              fontWeight: "600",
              textAlign: "left",
              marginLeft: "-10px",
            }}
          >
            User Role
          </p>
          <p
            style={{
              marginLeft: "3px",
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "0px",
              marginBottom: "20px",
              marginLeft: "-10px",
            }}
          >
            Admin
          </p>
        </TabPanel>
        <TabPanel value="3">
          <Grid container>
            <Grid item xs={8}>
              <p
                style={{
                  fontSize: "16px",
                  textDecoration: "underline",
                  fontWeight: "600",
                  textAlign: "left",
                  marginLeft: "-10px",
                }}
              >
                Current Password
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "10px",
                  marginBottom: "20px",
                  marginLeft: "-10px",
                }}
              >
                ***************************
              </p>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                sx={{
                  color: "#0077FF !important",
                  marginLeft: "40px!important",
                  backgroundColor: "white !important",
                  borderRadius: "8px !important",
                  fontWeight: "500 !important",
                  marginTop: "0px !important",
                  border: "1px solid black !important",
                  fontFamily: "Montserrat !important",
                  width: "62px !important",
                  height: "27px !important",
                  textTransform: "capitalize !important",
                }}
                variant="contained"
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="4">
          <Card
            style={{
              marginTop: "0px",
              marginLeft: "10px",
              marginRight: "10px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "80px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={11}>
                <h4 className="bolder text-color">Ticket History</h4>
              </Grid>
              <Grid item xs={1}>
                <img
                  style={{ width: "18px", marginRight: "15px !important" }}
                  className="right-icon"
                  src={Right}
                  alt=""
                ></img>
              </Grid>
            </Grid>
          </Card>

          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
              marginTop: "10%",
              marginBottom: "6%",
            }}
          >
            Send us a message and one of our team <br /> members will get back
            to you within <br /> 24-48 hours.
          </p>

          <p style={{ fontSize: "12px", fontWeight: "500", textAlign: "left" }}>
            Message
          </p>

          <TextField
            fullWidth
            sx={{
              width: "330px",
              height: "161px",
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "2px solid #000000 !important",
                  borderRadius: "8px",
                  height: "47px",
                  color: "#667085",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #000000 ",
                  color: "#667085",
                },
              },
            }}
            variant="outlined"
            multiline
            rows={8}
          />
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default Settings
