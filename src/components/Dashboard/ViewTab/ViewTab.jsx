import React, { useState, useEffect } from "react";
import "./viewtab.css";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@material-ui/core";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { Checkbox } from "@mui/material";
import RightArrow from "../../../Assets/Images/rightarrow.png";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckIcon from "@mui/icons-material/Check";

function ViewTab() {
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
          <h3 style={{ marginLeft: "auto", marginRight: "2px" }}>
            TAB ID1263
          </h3>
        </Grid>
      </Grid>
    <Grid>
        <Grid>

        </Grid>
        <Grid>
            
        </Grid>
    </Grid>
      <p
        style={{
          textAlign: "left",
          marginLeft: "12px",
          fontSize: "11px",
          fontWeight: "500",
          color: "#667085",
          marginTop:'10px',
          marginBottom: "0px",
        }}
      >
        Mark
      </p>
      <p
        style={{
          textAlign: "left",
          marginLeft: "12px",
          fontSize: "11px",
          fontWeight: "500",
          marginTop:'0px',
          color: "#667085",
          marginBottom: "0px",
        }}
      >
        Complete
      </p>
    </div>
  )
}

export default ViewTab;
