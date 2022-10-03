import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "@mui/material/Card";
import { Checkbox, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import Camera from "../../../Assets/Images/camera.png";
import Upload from "../../../Assets/Images/download.png";
import Right from "../../../Assets/Images/right.png";
import Grid from "@mui/material/Grid";
import { Divider } from "@material-ui/core";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { useNavigate } from "react-router-dom";
import BlackArrow from "../../../Assets/Images/blackarrow.png";

import "./menu.css";

function ServerMenu() {
  const [opennn, setOpennn] = useState(false);
  const [opennnn, setOpennnn] = useState(false);
  const [opene, setOpene] = useState(false);
  const handleOpennnn = () => setOpennnn(true);

  const [category, setCategory] = useState([]);
  const [item, setItem] = useState([]);

  function fetchcat() {
    fetch("https://jawad-fake-server-app.herokuapp.com/categoryy")
      .then((response) => response.json())
      .then((result) => {
        setCategory(result);
        if (result.length) {
          setWtext("hidden");
        }
        console.log("Categories are being displayed from the database");
      });
  }
  useEffect(() => {
    fetchcat();
  }, []);

  function fetchitem() {
    fetch("https://jawad-fake-server-app.herokuapp.com/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("Items are being retrieved from the database");
      });
  }
  useEffect(() => {
    fetchitem();
  }, []);

  const [value, setValue] = useState("1");
  const [wtext, setWtext] = useState("");
  const [selectedtab, setSelectedtab] = useState();
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
    setSelectedtab(event.target.ariaPlaceholder);
  };

  const [valuee, setValuee] = React.useState(0);

  const [itemarray, setItemarray] = useState({
    id: 0,
    name: "",
    category: 0,
    price: "",
    description: "",
  });
  function handleitem(e) {
    for (var i = 0; i < item.length; i++) {
      if (item[i].id == e.target.ariaPlaceholder) {
        setItemarray(item[i]);
      }
    }
    handleOpennnn();
  }
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
            Menu
          </h3>
        </Grid>
      </Grid>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleTabChange}
            style={{
              marginTop: "20px",
            }}
            value={valuee}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
            aria-label="lab API tabs example"
          >
            {category.map((cat, index) => {
              return (
                <Tab
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "16px",
                    padding: "12px 16px",
                    textTransform: "capitalize",
                  }}
                  label={cat.name}
                  value={cat.id}
                  id="tab-id"
                  aria-placeholder={cat.id}
                  name="hi"
                />
              );
            })}
          </TabList>
        </Box>
        {category.map((cat, index) => {
          return (
            <TabPanel value={cat.id}>
              {item.map((itm, index) => {
                if (itm.category === cat.id) {
                  return (
                    <Card
                      style={{
                        border: "1px solid black",
                        fontFamily: "Montserrat",
                        height: "51px",
                        marginBottom: "10px",
                        borderRadius: "8px",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={2}>
                          <Card
                            style={{
                              border: "1px solid black",
                              backgroundColor: "#D1E9FF",
                              fontFamily: "Montserrat",
                              width: "38px",
                              height: "37px",
                              marginTop: "6px",
                              marginLeft: "5px",
                              borderRadius: "100px",
                            }}
                          >
                            <p
                              style={{
                                textAlign: "center",
                                marginTop: "8px",
                                fontSize: "12px",
                              }}
                            >
                              FMS
                            </p>
                          </Card>
                        </Grid>
                        <Grid item xs={6}>
                          <h4
                            style={{
                              textAlign: "left",
                              marginTop: "7px",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            {itm.name}
                          </h4>
                        </Grid>
                        <Grid item xs={3}>
                          <h4
                            style={{
                              textAlign: "right",
                              marginTop: "7px",
                              marginRight: "5px",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            {itm.price}
                          </h4>
                        </Grid>
                        <Grid item xs={1}>
                          <img
                            style={{ marginTop: "18px" }}
                            src={Right}
                            alt=""
                            aria-placeholder={itm.id}
                            onClick={(e) => {
                              handleitem(e);
                            }}
                          ></img>
                        </Grid>
                      </Grid>
                    </Card>
                  );
                }
              })}
            </TabPanel>
          );
        })}
      </TabContext>
    </div>
  );
}

export default ServerMenu;
