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

import { Divider } from "@material-ui/core";

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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      const handleOpenn = () => setOpenn(true);
      const handleClosee = () => setOpenn(false);
      const handleOpennn = () => setOpennn(true);
      const handleCloseee = () => setOpennn(false);
      const handleOpene = () => setOpene(true);
      const handleCloser = () => setOpene(false);

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
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item xs={6}>
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
              <span className="center color">Table</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center">Time</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center">Seats</span>
            </Grid>
            <Grid item xs={2}>
              <span className="center">Status</span>
            </Grid>
            <Grid item xs={4}>
              <span className="center">Server</span>
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
                              textAlign: "left",
                              marginLeft: "5px",
                              marginTop: "0px",
                            }}
                            checked={personName.indexOf(name) > -1}
                          />
                          <ListItemText
                            style={{
                              textAlign: "left",
                              marginLeft: "10px",
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
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "24px",
              borderRadius: "8px",
            }}
          ></Card>
        </TabPanel>
        <TabPanel value="3">
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "90px",
              borderRadius: "8px",
            }}
          ></Card>
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
              marginTop: "30px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
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
              textAlign:'flex-end',
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
    </div>
  );
}

export default TableManager;
