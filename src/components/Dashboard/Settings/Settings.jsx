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
import Checkbox from "@mui/material/Checkbox";
import { Modal } from "@material-ui/core";
import CheckSuccess from "../../../Assets/Images/CheckSuccess.png";

function Settings() {

    const [opening, setOpening] = React.useState(false);
    const handleOpening = () => setOpening(true);
    const handleCloseing = () => setOpening(false);   
        const [value, setValue] = useState("1");
        const handleTabChange = (event, newTabIndex) => {
          setValue(newTabIndex);
        };

        const [show, setShow] = useState(true);
        const [showw, setShoww] = useState(false);
        const [showe, setShowe] = useState(true);
        const [showwe, setShowwe] = useState(false);
        const [shower, setShower] = useState(true);
        const [showwer, setShowwer] = useState(false);
        const [showerr, setShowerr] = useState(true);
        const [showwerr, setShowwerr] = useState(false);

        function onClickShow() {
            setShow(!show)
            setShoww(!showw)
        }


        function onClickShoww() {
          setShowe(!showe);
          setShowwe(!showwe);
        }

        function onClickShower() {
          setShower(!shower);
          setShowwer(!showwer);
        }

        function onClickShowerr() {
          setShowerr(!showerr);
          setShowwerr(!showwerr);
        }

        const stylingSuccess = {
          position: "absolute",
          paddingTop: "0px !important",
          paddingLeft: "15px !important",
          paddingRight: "15px !important",
          top: "37%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          height: "365px",
          bgcolor: "white",
          border: "1px solid #000000",
          borderRadius: "8px",
          boxShadow: 24,
          zIndex: "+1",
          p: 4,
        };
        

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
                    Restaurant Name
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
                Restaurant Address
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
                Legal Restaurant Name
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
                Restaurant Address
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
                <Grid item xs={6}></Grid>
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
          {showe ? (
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
                    onClick={onClickShoww}
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
            </>
          ) : null}
          {showwe ? (
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
                Name
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
                label="Leah Martin"
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
                Email
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
                label="leah23martin@gmail.com"
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
                label="+1 (404) 354-7724"
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
                User Role
              </p>

              <p
                style={{
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Admin
              </p>

              <Grid container>
                <Grid item xs={6}></Grid>
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
                    onClick={onClickShoww}
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
                    onClick={onClickShoww}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : null}
        </TabPanel>
        <TabPanel value="3">
          {shower ? (
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
                    onClick={onClickShower}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : null}
          {showwer ? (
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
                Current Password
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
                label="************************"
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
                New Password
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
                label="Enter New Password"
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
                Confirm Password
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
                label="Confirm Password"
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
                User Role
              </p>

              <p
                style={{
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Admin
              </p>

              <Grid container>
                <Grid item xs={6}></Grid>
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
                    onClick={onClickShower}
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
                    onClick={onClickShower}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : null}
        </TabPanel>
        <TabPanel value="4">
          {showerr ? (
            <>
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
                onClick={onClickShowerr}
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
                Send us a message and one of our team <br /> members will get
                back to you within <br /> 24-48 hours.
              </p>

              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
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
              <Grid container>
                <Grid item xs={1}>
                  <Checkbox
                    sx={{
                      color: "#000000 !important",
                      marginLeft: "0px !important",
                      marginTop: "8px !important",
                      marginBottom: "4px !important",
                      position: "relative !important",
                      paddingLeft: "0px !important",
                      left: "0px !important",
                      "&.Mui-checked": {
                        color: "#0077FF !important",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={11}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      marginTop: "10px",
                      marginLeft: "0px",
                    }}
                  >
                    You agree to our friendly privacy policy.
                  </p>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={9}></Grid>
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
                    onClick={handleOpening}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : null}
          {showwerr ? (
            <>
              <p style={{ fontSize: "16px", fontWeight: "500" }}>
                Ticket History
              </p>
              <Card
                style={{
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  height: "43px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "20px",
                }}
              >
                <Grid container>
                  <Grid item xs={7}>
                    <h4
                      style={{
                        textAlign: "left",
                        marginTop: "4px",
                        marginLeft: "10px",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#0077FF",
                      }}
                    >
                      Ticket # 2501
                    </h4>
                  </Grid>
                  <Grid item xs={4}>
                    <h4
                      style={{
                        textAlign: "left",
                        marginTop: "4px",
                        marginLeft: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      5/13/2022
                    </h4>
                  </Grid>
                  <Grid item xs={1}>
                    <img
                      style={{ marginTop: "13px", width: "18px" }}
                      src={Right}
                      alt=""
                    ></img>
                  </Grid>
                </Grid>
              </Card>
            </>
          ) : null}
        </TabPanel>
      </TabContext>
      <Modal
        open={opening}
        onClose={handleCloseing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylingSuccess}>
          <img
            style={{ marginLeft: "120px", marginTop: "30px" }}
            src={CheckSuccess}
            alt=""
          />
          <p
            style={{
              fontSize: "36px",
              textAlign: "center",
              marginTop: "10px",
              color: "#0166FF",
            }}
          >
            Message sent
          </p>
          <p
            style={{ fontSize: "16px", fontWeight: "600", textAlign: "center" }}
          >
            Thanks for reaching out <br /> Support #25781 has been created
          </p>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "25%!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseing}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Settings
