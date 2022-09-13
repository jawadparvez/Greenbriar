import React, { useState, useEffect } from "react";
import "./tabhistory.css";
import Navbar from "../Navbar/Navbar";
import { Divider, Grid } from "@material-ui/core";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { Checkbox } from "@mui/material";
import Microphone from "../../../Assets/Images/Microphone.png";
import BottomArrow from "../../../Assets/Images/bottomarrow.png";
import RightArrow from "../../../Assets/Images/rightarrow.png";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckIcon from "@mui/icons-material/Check";

function TabHistory({ page, setPage}) {
  const [item, setItem] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("item is being retrieved");
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/orders")
      .then((response) => response.json())
      .then((result) => {
        setOrder(result);
        console.log("order is being retrieved");
      });
  }, []);
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
            onClick={() => {
              setPage(page + 2);
            }}
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
            onClick={() => {
              setPage(page + 2);
            }}
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
            onClick={() => {
              setPage(page + 1);
            }}
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

      {order.map((ord) => {
        return (
          <div>
            <Card
              style={{
                marginTop: "10px",
                border: "1px solid black",
                fontFamily: "Montserrat",
                height: "163px",
                borderRadius: "8px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  {item.map((cat) => {
                    return (
                      <div>
                        <Grid container spacing={1}>
                          <Grid className="checkbox-modal" item xs={1}>
                            <Checkbox
                              icon={
                                <CheckBoxOutlineBlankRoundedIcon
                                  style={{
                                    color: "#0376FB",
                                    marginLeft: "10px",
                                  }}
                                />
                              }
                              checkedIcon={
                                <CheckIcon
                                  style={{
                                    color: "#0376FB",
                                    marginLeft: "10px",
                                    width: "18px",
                                    height: "18px",
                                  }}
                                />
                              }
                              sx={{
                                color: "#D0D5DD",
                                marginLeft: "7px",
                                position: "relative",
                                marginTop: "4px",
                                paddinTop: "0px",
                                marginBottom: "0px",
                                width: "16px",
                                height: "16px",
                                paddingLeft: "0px",
                                boxShadow: "0px 0px 0px 4px #F4EBFF",
                                borderRadius: "4px",
                                left: "12px",
                                "&.Mui-checked": {
                                  color: "#0077FF",
                                  outline: "none",
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={11}>
                            <p
                              style={{
                                color: "black",
                                fontWeight: "500",
                                textAlign: "left",
                                fontSize: "12px",
                                marginTop: "5px",
                                marginLeft: "29px",
                              }}
                              className="spacing-3"
                            >
                              {cat.name}
                            </p>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={6}>
                  <p
                    style={{
                      textAlign: "right",
                      fontSize: "10px",
                      textClor: "black",
                      marginTop: "4px",
                      fontWeight: "600",
                      marginRight: "20px",
                    }}
                  >
                    TAB ID1263
                  </p>
                  <img
                    style={{
                      display: "flex",
                      position: "relative",
                      textAlign: "right",
                      marginLeft: "140px",
                      marginTop: "40px",
                    }}
                    src={RightArrow}
                    alt=""
                  />
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      textAlign: "right",
                      marginRight: "25px",
                      marginTop: "50px",
                    }}
                  >
                    <span style={{ color: "#FF1F00" }}>Unpaid</span> $54.96
                  </p>
                </Grid>
              </Grid>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default TabHistory;
