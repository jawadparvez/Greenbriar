import React, { useState, useEffect } from "react";
import "./viewtab.css";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@material-ui/core";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { Checkbox } from "@mui/material";
import {Divider} from "@material-ui/core";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckIcon from "@mui/icons-material/Check";

function ViewTab() {
 const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("item is being retrieved");
      });
  }, []);
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item xs={6}>
          <Link to="/tabhistory">
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
          <h3 style={{ marginLeft: "auto", marginRight: "2px" }}>TAB ID1263</h3>
        </Grid>
      </Grid>
      <Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={12}>
              <p
                style={{
                  textAlign: "left",
                  marginLeft: "12px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#667085",
                  marginTop: "10px",
                  marginBottom: "0px",
                }}
              >
                Mark
              </p>
            </Grid>
            <Grid xs={12}>
              <p
                style={{
                  textAlign: "left",
                  marginLeft: "12px",
                  fontSize: "11px",
                  fontWeight: "500",
                  marginTop: "0px",
                  color: "#667085",
                  marginBottom: "0px",
                }}
              >
                Complete
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <p className="orderSummary">Order Summary</p>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          {item.map((cat) => {
            return (
              <div>
                <Card
                  style={{
                    marginTop: "10px",
                    border: "1px solid black",
                    fontFamily: "Montserrat",
                    height: "30px",
                    borderRadius: "8px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
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
                    <Grid item xs={6}>
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
                    <Grid item xs={2}>
                      <p
                        style={{
                          fontSize: "12px",
                          textClor: "black",
                          marginTop: "4px",
                          fontWeight: "600",
                        }}
                      >
                        {cat.price}
                      </p>
                    </Grid>
                    <Grid item xs={3}>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          marginTop: "5px",
                        }}
                      >
                        <span style={{ color: "#FF1F00" }}>Remove</span>
                      </p>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            );
          })}
        </Grid>
      </Grid>
      <Divider
        style={{
          marginTop: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          border: "1px solid #000000",
        }}
      />

      <Grid container>
        <Grid item xs={8}>
          <p
            style={{
              textAlign: "left",
              marginLeft: "30px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Subtotal
          </p>
        </Grid>
        <Grid item xs={4}>
          <p style={{ fontSize: "14px", fontWeight: "600" }}>$50.97</p>
        </Grid>

        <Grid item xs={8}>
          <p
            style={{
              textAlign: "left",
              marginLeft: "30px",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "1px",
            }}
          >
            Tax
          </p>
        </Grid>
        <Grid item xs={4}>
          <p style={{ fontSize: "14px", fontWeight: "600", marginTop: "1px" }}>
            $3.99
          </p>
        </Grid>
        <Grid item xs={8}>
          <p
            style={{
              textAlign: "left",
              marginLeft: "30px",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "1px",
            }}
          >
            Tip
          </p>
        </Grid>
        <Grid item xs={4}>
          <p style={{ fontSize: "14px", fontWeight: "600", marginTop: "1px" }}>
            $0.00
          </p>
        </Grid>
        <Grid item xs={8}>
          <p
            style={{
              textAlign: "right",
              marginRight:'15px',
              fontSize: "22px",
              fontWeight: "600",
              marginTop: "1px",
              color: "#FF0000",
            }}
          >
            Unpaid
          </p>
        </Grid>
        <Grid item xs={4}>
          <p
            style={{
              textAlign: "left",
              marginLeft: "6px",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "6px",
            }}
          >
            Total:54.96
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ViewTab;
