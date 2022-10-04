import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Grid from "@mui/material/Grid";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import { Link } from "@mui/material";
import { Divider } from "@material-ui/core";
import Card from "@mui/material/Card";


function TabAndTip() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/item")
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
          <Link to="/ServerHome">
            <img
              style={{
                marginTop: "15px",
                marginLeft: "-130px",
                AlignItems: "left",
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
            New Tab
          </h3>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <p
            style={{
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "600",
              marginLeft: "10px",
              marginTop: "30px",
            }}
          >
            ID1263
          </p>
        </Grid>
        <Grid item xs={6}>
          <p
            style={{
              textAlign: "right",
              fontSize: "16px",
              fontWeight: "600",
              marginRight: "30px",
              marginTop: "30px",
            }}
          >
            Cancel
          </p>
        </Grid>
      </Grid>
      <Divider
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          border: "1px solid #C6C6C6",
        }}
      />

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
                    height: "50px",
                    borderRadius: "8px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <p
                        style={{
                          color: "black",
                          fontWeight: "500",
                          textAlign: "left",
                          fontSize: "12px",
                          marginTop: "15px",
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
                          marginTop: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {cat.price}
                      </p>
                    </Grid>
                    <Grid item xs={4}>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          marginTop: "15px",
                          textAlign: "right",
                          marginRight: "10px",
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
          marginTop: "20px",
          marginLeft: "10px",
          marginRight: "10px",
          border: "1px solid #C6C6C6",
          marginBottom: "20px",
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
      </Grid>

      {/* <Card>
        <Grid container>
          <p>Tip</p>
        </Grid>
        <Grid>
          <p>10%</p>
        </Grid>
        <Grid></Grid>
        <Grid></Grid>

        <p>15%</p>
        <p>Custom</p>

        <p>$0.00</p>
      </Card> */}
    </div>
  );
}

export default TabAndTip;
