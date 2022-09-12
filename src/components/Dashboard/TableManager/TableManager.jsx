import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import Right from "../../../Assets/Images/right.png";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import "./tablemanager.css";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import {TextField } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = ["NO SERVER", "OLIVIA J", "ANDRE T", "CHASE G"];

function TableManager() {
  const [value, setValue] = useState("1");
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
  };

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

    const [table, setTable] = useState([]);
useEffect(() => {
  fetch("http://localhost:4000/table")
    .then((response) => response.json())
    .then((result) => {
      setTable(result);
      console.log("table has been retrieved");
    });
}, []);

  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [opennn, setOpennn] = useState(false);
  const [opene, setOpene] = useState(false);
    const [opener, setOpener] = useState(false);
    const [opening, setOpening] = useState(false);
    const [openin, setOpenin] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      const handleOpenn = () => setOpenn(true);
      const handleClosee = () => setOpenn(false);
      const handleOpennn = () => setOpennn(true);
      const handleCloseee = () => setOpennn(false);
      const handleOpene = () => setOpene(true);
      const handleCloser = () => setOpene(false);
      const handleOpener = () => setOpener(true);
      const handleCloserr = () => setOpener(false);
      const handleOpening = () => setOpening(true);
      const handleClosing = () => setOpening(false);
      const handleOpenin = () => setOpenin(true);
      const handleClosin = () => setOpenin(false);

    const stylee = {
      position: "absolute",
      paddingTop: "0px !important",
      paddingLeft: "15px !important",
      paddingRight: "15px !important",
      top: "32%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 350,
      height: "290px",
      bgcolor: "white",
      border: "1px solid black",
      borderRadius: "8px",
      boxShadow: 24,
      zIndex: "+1",
      p: 4,
    };
    const style = {
      position: "absolute",
      paddingTop: "0px !important",
      paddingLeft: "15px !important",
      paddingRight: "15px !important",
      top: "48%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 350,
      height: "540px",
      bgcolor: "white",
      border: "1px solid black",
      borderRadius: "8px",
      boxShadow: 24,
      zIndex: "+1",
      p: 4,
    };
    const styleee = {
      position: "absolute",
      paddingTop: "0px !important",
      paddingLeft: "15px !important",
      paddingRight: "15px !important",
      top: "39%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 350,
      height: "400px",
      bgcolor: "white",
      border: "1px solid black",
      borderRadius: "8px",
      boxShadow: 24,
      zIndex: "+1",
      p: 4,
    };
    const styling = {
      position: "absolute",
      paddingTop: "0px !important",
      paddingLeft: "15px !important",
      paddingRight: "15px !important",
      top: "42%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 350,
      height: "450px",
      bgcolor: "white",
      border: "1px solid black",
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
          <Link to="/menu">
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
          <h3 style={{ marginLeft: "auto" }}>Table Manager</h3>
        </Grid>
      </Grid>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            indicatorColor="primary"
            aria-label="lab API tabs example"
          >
            <Tab
              style={{
                width: "50px",
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "15px",
                textTransform: "capitalize",
              }}
              label="Table"
              value="1"
            />
            <Tab
              style={{
                width: "50px",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "15px",
                textTransform: "capitalize",
              }}
              label="Waitlist"
              value="2"
            />
            <Tab
              style={{
                width: "50px",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "15px",
                textTransform: "capitalize",
              }}
              label="Orders"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container spacing={10}>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  color: "#0077FF",
                  marginLeft: "0px!important",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: "8px",
                  fontWeight: "500",
                  marginTop: "0px!Important",
                  border: "1px solid black",
                  fontFamily: "Montserrat!important",
                  width: "95px",
                  height: "40px",
                  textTransform: "capitalize",
                }}
                variant="contained"
              >
                QRcode
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  color: "#0077FF",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: "8px",
                  marginTop: "0px!Important",
                  fontWeight: "500",
                  border: "1px solid black",
                  fontFamily: "Montserrat!important",
                  width: "95px",
                  height: "40px",
                  textTransform: "capitalize",
                }}
                variant="contained"
                onClick={handleOpenn}
                // onClick={handleClickkk}
              >
                TSizer
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                sx={{
                  color: "#0077FF",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderRadius: "8px",
                  marginTop: "0px!Important",
                  marginBottom: "20px!important",
                  fontWeight: "500",
                  border: "1px solid black",
                  fontFamily: "Montserrat!important",
                  width: "100px",
                  height: "40px",
                  textTransform: "capitalize",
                }}
                variant="contained"
                onClick={handleOpen}
              >
                -/+ Table
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <span className="center-t-c color">Table</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-c">Time</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t">Seats</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t">Status</span>
            </Grid>
            <Grid item xs={4}>
              <span className="center-t">Server</span>
            </Grid>
          </Grid>
          {table.map((tab, index) => {
            return (
              <Card
                style={{
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  marginLeft: "0px!important",
                  marginBottom: "5px",
                  height: "24px",
                  width: "345px",
                  borderRadius: "8px",
                }}
              >
                <Grid container>
                  <Grid item xs={2}>
                    <Card
                      style={{
                        border: "1px solid black",
                        fontFamily: "Montserrat",
                        marginTop: "2px",
                        marginLeft: "2px",
                        height: "17px",
                        width: "50px",
                        borderRadius: "8px",
                      }}
                    >
                      <span
                        style={{
                          marginTop: "0px",
                          fontSize: "12px",
                          fontWeight: "600",
                          marginLeft: "20px",
                          display: "flex",
                        }}
                      >
                        {tab.id}
                      </span>
                    </Card>
                  </Grid>
                  <Grid item xs={2}>
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "0px",
                        display: "flex",
                      }}
                    >
                      {tab.time}
                    </span>
                  </Grid>
                  <Grid item xs={2}>
                    <span
                      style={{
                        marginTop: "0px",
                        fontSize: "17px",
                        fontWeight: "600",
                        marginLeft: "15px",
                        display: "flex",
                      }}
                    >
                      {tab.seats}
                    </span>
                  </Grid>
                  <Grid item xs={2}>
                    <Card
                      style={{
                        border: "1px solid black",
                        fontFamily: "Montserrat",
                        marginTop: "2px",
                        height: "19px",
                        width: "60px",
                        marginLeft: "-8px",
                        backgroundColor: "#54C242",
                        color: "white",
                        borderRadius: "8px",
                      }}
                    >
                      <span
                        style={{
                          marginTop: "0px!important",
                          fontSize: "13px",
                          marginLeft: "9px",
                          display: "flex",
                        }}
                      >
                        {tab.status}
                      </span>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Select
                      style={{
                        height: "19px",
                        width: "110px",
                        marginTop: "2px",
                        marginLeft: "-9px",
                        backgroundColor: "#0077FF",
                        fontSize: "12px",
                        color: "white",
                        textAlign: "left",
                      }}
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      value={personName}
                      onChange={handleChange}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleChecked />}
                            style={{
                              textAlign: "left !important",
                              marginLeft: "-10px",
                              marginTop: "0px",
                            }}
                            checked={personName.indexOf(name) > -1}
                          />
                          <ListItemText
                            style={{
                              textAlign: "left",
                              marginTop: "0px",
                              fontSize: "10px!important",
                            }}
                            primary={name}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </TabPanel>
        <TabPanel value="2">
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Card
                style={{
                  marginTop: "10px",
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  height: "80px",
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    marginTop: "4px",
                    marginBottom: "3px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  {" "}
                  Current Wait Time
                </p>
                <p
                  style={{
                    marginTop: "2px",
                    marginBottom: "3px",
                    color: "#0077FF",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  17 Minutes
                </p>
                <p
                  style={{
                    marginTop: "3px",
                    fontWeight: "600",
                    fontSize: "10px",
                  }}
                >
                  (Party of 2+)
                </p>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card
                style={{
                  marginTop: "10px",
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  height: "80px",
                  borderRadius: "8px",
                }}
                onClick={handleOpening}
              >
                <h4 style={{ fontSize: "19px" }}>+ Guest</h4>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1}>
              <span className="center-t-c">#</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-c">Name</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t">Time</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t">Party</span>
            </Grid>
            <Grid item xs={5}>
              <span className="center-t">Cell Number</span>
            </Grid>
          </Grid>

          {table.map((tab, index) => {
            return (
              <Card
                style={{
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  marginLeft: "0px!important",
                  marginBottom: "5px",
                  height: "24px",
                  width: "345px",
                  borderRadius: "8px",
                }}
                onClick={handleOpenin}
              >
                <Grid container>
                  <Grid item xs={1}>
                    <span
                      style={{
                        marginTop: "2px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "10px",
                        display: "flex",
                      }}
                    >
                      {tab.id}.
                    </span>
                  </Grid>
                  <Grid item xs={2}>
                    <span
                      style={{
                        marginTop: "2px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "0px",
                        display: "flex",
                        color: "#0077FF",
                      }}
                    >
                      Williams
                    </span>
                  </Grid>
                  <Grid item xs={2}>
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "5px",
                        display: "flex",
                      }}
                    >
                      {tab.time}
                    </span>
                  </Grid>
                  <Grid item xs={2}>
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "0px",
                      }}
                    >
                      3
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "0px",
                      }}
                    >
                      706-645-2184
                    </span>
                  </Grid>
                  <Grid item xs={1}>
                    <img
                      style={{ marginLeft: "0px", marginTop: "3px" }}
                      src={Right}
                      alt=""
                    ></img>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </TabPanel>
        <TabPanel value="3">
          <Link style={{textDecoration:'none'}} to="/tabhistory">
            <Card
              style={{
                marginTop: "0px",
                border: "1px solid black",
                fontFamily: "Montserrat",
                height: "70px",
                borderRadius: "8px",
              }}
            >
              <Grid container>
                <Grid item xs={11}>
                  <h4
                    style={{ fontWeight: "600", marginTop: "22px" }}
                    className="bolder-text-modal "
                  >
                    Tab History
                  </h4>
                </Grid>
                <Grid item xs={1}>
                  <img
                    style={{ marginTop: "26px" }}
                    className="right-icon-modal"
                    src={Right}
                    alt=""
                  ></img>
                </Grid>
              </Grid>
            </Card>
          </Link>
          <h4>Current Table Orders</h4>
          <Grid container>
            <Grid item xs={3}>
              <span className="center-t-c color">Table</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center-t-c">Time</span>
            </Grid>
            <Grid item xs={4}>
              <span className="center-t">Server</span>
            </Grid>
            <Grid item xs={3}>
              <span className="center-t">Server</span>
            </Grid>
          </Grid>

          {table.map((tab, index) => {
            return (
              <Card
                style={{
                  border: "1px solid black",
                  fontFamily: "Montserrat",
                  marginLeft: "0px!important",
                  marginBottom: "5px",
                  height: "24px",
                  width: "345px",
                  borderRadius: "8px",
                }}
              >
                <Grid container>
                  <Grid item xs={2}>
                    <Card
                      style={{
                        border: "1px solid black",
                        fontFamily: "Montserrat",
                        marginTop: "2px",
                        marginLeft: "2px",
                        height: "17px",
                        width: "50px",
                        borderRadius: "8px",
                      }}
                    >
                      <span
                        style={{
                          marginTop: "0px",
                          fontSize: "12px",
                          fontWeight: "600",
                          marginLeft: "20px",
                          display: "flex",
                        }}
                      >
                        {tab.id}
                      </span>
                    </Card>
                  </Grid>
                  <Grid item xs={3}>
                    <span
                      style={{
                        marginTop: "3px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginLeft: "20px",
                        display: "flex",
                      }}
                    >
                      {tab.time}
                    </span>
                  </Grid>
                  <Grid item xs={3}>
                    <span
                      style={{
                        marginTop: "0px",
                        fontSize: "15px",
                        fontWeight: "500",
                        marginLeft: "15px",
                        display: "flex",
                      }}
                    >
                      Olivia
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <Select
                      style={{
                        height: "19px",
                        width: "110px",
                        marginTop: "2px",
                        marginLeft: "-9px",
                        backgroundColor: "#0077FF",
                        fontSize: "12px",
                        color: "white",
                        textAlign: "left",
                      }}
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      value={personName}
                      onChange={handleChange}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleChecked />}
                            style={{
                              textAlign: "left !important",
                              marginLeft: "-10px",
                              marginTop: "0px",
                            }}
                            checked={personName.indexOf(name) > -1}
                          />
                          <ListItemText
                            style={{
                              textAlign: "left",
                              marginTop: "0px",
                              fontSize: "10px!important",
                            }}
                            primary={name}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </TabPanel>
      </TabContext>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <p className="center">-/+ Table</p>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "60px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={11}>
                <h4 className="bolder-text-modal " onClick={handleOpennn}>
                  Add Table
                </h4>
              </Grid>
              <Grid item xs={1}>
                <img className="right-icon-modal" src={Right} alt=""></img>
              </Grid>
            </Grid>
          </Card>
          <Card
            style={{
              marginTop: "20px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "60px",
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={11}>
                <h4 className="bolder-text-modal" onClick={handleOpene}>
                  Remove Table
                </h4>
              </Grid>

              <Grid item xs={1}>
                <img className="right-icon-modal" src={Right} alt=""></img>
              </Grid>
            </Grid>
          </Card>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              marginTop: "30px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
          >
            Back
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openn}
        onClose={handleClosee}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="center">Table Sizer</p>
          <Grid container>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
          </Grid>
          {table.map((tab, index) => {
            return (
              <div>
                <Grid style={{ display: "flex" }} container>
                  <Grid item xs={5}>
                    <Card
                      style={{
                        border: "1px solid black",
                        fontFamily: "Montserrat",
                        marginTop: "4px",
                        marginBottom: "15px",
                        marginLeft: "2px",
                        height: "20px",
                        width: "50px",
                        borderRadius: "8px",
                      }}
                    >
                      <span
                        style={{
                          marginTop: "0px",
                          fontSize: "14px",
                          fontWeight: "600",
                          marginLeft: "20px",
                          display: "flex",
                        }}
                      >
                        {tab.id}
                      </span>
                    </Card>
                  </Grid>
                  <Grid item xs={1}>
                    <span
                      style={{
                        marginTop: "2px",
                        fontSize: "17px",
                        fontWeight: "500",
                        marginLeft: "0px",
                        display: "flex",
                      }}
                    >
                      {tab.seats}
                    </span>
                  </Grid>
                </Grid>
                <Divider
                  style={{ background: "gray", color: "black", width: "50%" }}
                />
              </div>
            );
          })}
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              marginTop: "90px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            onClick={handleOpener}
          >
            Edit
          </Button>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "darkgray",
              backgroundColor: "white",
              borderColor: "black",
              marginTop: "10px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              AlignText: "end",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={opennn}
        onClose={handleCloseee}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleee}>
          <p className="center">+ Table</p>
          <h1 className="center-text">2</h1>
          <Divider
            style={{
              color: "black",
              marginTop: "0px",
              width: "30%",
              justifyContent: "center!important",
              marginLeft: "110px",
              border: "1px solid black",
            }}
          />
          <h1 className="center-heading-modal">
            Enter number of tables above.
          </h1>

          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              marginTop: "20px",
              marginBottom: "15px",
              marginLeft: "110px",
              height: "25px",
              width: "100px",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                marginTop: "0px",
                fontSize: "16px",
                fontWeight: "600",
                marginLeft: "40px",
                display: "flex",
              }}
            >
              16
            </span>
          </Card>
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              marginTop: "4px",
              marginBottom: "15px",
              marginLeft: "110px",
              height: "25px",
              width: "100px",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                marginTop: "0px",
                fontSize: "16px",
                fontWeight: "600",
                marginLeft: "40px",
                display: "flex",
              }}
            >
              17
            </span>
          </Card>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              marginTop: "30px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Add
          </Button>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "gray",
              backgroundColor: "white",
              borderColor: "black",
              marginTop: "10px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={opene}
        onClose={handleCloser}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="center">Select which tables to remove</p>
          <Grid container>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
          </Grid>
          {table.map((tab, index) => {
            return (
              <div>
                <Card
                  style={{
                    border: "1px solid black",
                    fontFamily: "Montserrat",
                    marginLeft: "0px!important",
                    marginBottom: "5px",
                    height: "30px",
                    width: "160px",
                    borderRadius: "8px",
                  }}
                >
                  <Grid style={{ display: "flex" }} container>
                    <Grid item xs={4}>
                      <Checkbox
                        icon={<CircleUnchecked />}
                        checkedIcon={<CircleCheckedFilled />}
                        style={{
                          marginTop: "-6px",
                          marginLeft: "1px",
                          borderRadius: "10px",
                        }}
                      ></Checkbox>
                    </Grid>

                    <Grid item xs={6}>
                      <Card
                        style={{
                          border: "1px solid black",
                          fontFamily: "Montserrat",
                          marginTop: "4px",
                          marginBottom: "15px",
                          marginLeft: "2px",
                          height: "20px",
                          width: "50px",
                          borderRadius: "8px",
                        }}
                      >
                        <span
                          style={{
                            marginTop: "0px",
                            fontSize: "14px",
                            fontWeight: "600",
                            marginLeft: "20px",
                            display: "flex",
                          }}
                        >
                          {tab.id}
                        </span>
                      </Card>
                    </Grid>
                    <Grid item xs={1}>
                      <span
                        style={{
                          marginTop: "2px",
                          fontSize: "17px",
                          fontWeight: "500",
                          marginLeft: "0px",
                          display: "flex",
                        }}
                      >
                        {tab.seats}
                      </span>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            );
          })}
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white",
              backgroundColor: "#FF1F00",
              borderColor: "black",
              marginTop: "90px!important",
              borderRadius: "8px",
              textAlign: "flex-end",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
          >
            Remove
          </Button>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "darkgray",
              backgroundColor: "white",
              borderColor: "black",
              marginTop: "10px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              AlignText: "end",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={opener}
        onClose={handleCloserr}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="center">Table Sizer</p>
          <h1 className="center-text">2</h1>
          <Divider
            style={{
              color: "black",
              marginTop: "0px",
              width: "30%",
              justifyContent: "center!important",
              marginLeft: "110px",
              border: "1px solid black",
            }}
          />
          <h1 className="center-heading-modal">
            Enter number of tables above.
          </h1>
          <Grid container>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: "right", marginRight: "5px" }}>seats</p>
            </Grid>
          </Grid>
          {table.map((tab, index) => {
            return (
              <div>
                <Card
                  style={{
                    border: "1px solid black",
                    fontFamily: "Montserrat",
                    marginLeft: "0px!important",
                    marginBottom: "5px",
                    height: "30px",
                    width: "160px",
                    borderRadius: "8px",
                  }}
                >
                  <Grid style={{ display: "flex" }} container>
                    <Grid item xs={4}>
                      <Checkbox
                        icon={<CircleUnchecked />}
                        checkedIcon={<CircleCheckedFilled />}
                        style={{
                          marginTop: "-6px",
                          marginLeft: "1px",
                          borderRadius: "10px",
                        }}
                      ></Checkbox>
                    </Grid>

                    <Grid item xs={6}>
                      <Card
                        style={{
                          border: "1px solid black",
                          fontFamily: "Montserrat",
                          marginTop: "4px",
                          marginBottom: "15px",
                          marginLeft: "2px",
                          height: "20px",
                          width: "50px",
                          borderRadius: "8px",
                        }}
                      >
                        <span
                          style={{
                            marginTop: "0px",
                            fontSize: "14px",
                            fontWeight: "600",
                            marginLeft: "20px",
                            display: "flex",
                          }}
                        >
                          {tab.id}
                        </span>
                      </Card>
                    </Grid>
                    <Grid item xs={1}>
                      <span
                        style={{
                          marginTop: "2px",
                          fontSize: "17px",
                          fontWeight: "500",
                          marginLeft: "0px",
                          display: "flex",
                        }}
                      >
                        {tab.seats}
                      </span>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            );
          })}
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              marginTop: "60px!important",
              borderRadius: "8px",
              textAlign: "flex-end",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Apply
          </Button>
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "darkgray",
              backgroundColor: "white",
              borderColor: "black",
              marginTop: "10px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              AlignText: "end",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>

      <Modal
        open={opening}
        onClose={handleClosing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styling}>
          <p className="left">Name</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            label="Enter Name"
            variant="outlined"
            size="small"
          />
          <p className="left">Cell Number</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            label="Enter Number"
            variant="outlined"
            size="small"
          />
          <p className="left">Party Size</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            label="Enter Party Size"
            variant="outlined"
            size="small"
          />
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              marginTop: "40px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Add
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey",
              marginTop: "15px",
              backgroundColor: "White",
              borderColor: "black",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            onClick={handleClose}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openin}
        onClose={handleClosin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styling}>
          <p className="left">Name</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            label="Enter Name"
            variant="outlined"
            size="small"
          />
          <p className="left">Cell Number</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            label="Enter Number"
            variant="outlined"
            size="small"
          />
          <p className="left">Party Size</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            label="Enter Party Size"
            variant="outlined"
            size="small"
          />
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white",
              backgroundColor: "#FF1F00",
              borderColor: "black",
              marginTop: "40px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Remove
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey",
              marginTop: "15px",
              backgroundColor: "White",
              borderColor: "black",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            onClick={handleClose}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TableManager;
