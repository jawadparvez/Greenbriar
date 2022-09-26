import React, {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
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
import Grid from '@mui/material/Grid';
import './menu.css'
import { Divider } from '@material-ui/core';



function Menu() {
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [opennn, setOpennn] = useState(false);
  const [opennnn, setOpennnn] = useState(false);
  const [opene, setOpene] = useState(false);
  const [category, setCategory] = useState([]);
  const [item, setItem] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenn = () => setOpenn(true);
  const handleClosee = () => setOpenn(false);
  const handleOpennn = () => setOpennn(true);
  const handleCloseee = () => setOpennn(false);
  const handleOpennnn = () => setOpennnn(true);
  const handleCloseeee = () => setOpennnn(false);
  const handleOpene = () => setOpene(true);
  const handleCloser = () => setOpene(false);

  function handleOpenClose () {
    handleOpennnn();
    handleCloseee();
  }

  function handleOpenClose2() {
    handleOpene();
    handleCloseeee();
  }

  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/categoryy")
      .then((response) => response.json())
      .then((result) => {
        setCategory(result);
        if (result.length) {
          setWtext("hidden");
        }
        console.log("catergory has been retrieved");
      });
      
  }, []);
  useEffect(() => {
    fetch("https://jawad-fake-server-app.herokuapp.com/item")
      .then((response) => response.json())
      .then((result) => {
        setItem(result);
        console.log("item is being retrieved");
      });
  }, []);




  const stylee = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "32%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "265px",
    bgcolor: "white",
    border: "1px solid #000000",
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
  const styl = {
    position: "absolute",
    paddingTop: "0px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    top: "56%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: "670px",
    bgcolor: "white",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: 24,
    zIndex: "+1",
    p: 4,
  };

  const [value, setValue] = useState("1");
  const [wtext, setWtext] = useState("");
  const handleTabChange = (event, newTabIndex) => {
    setValue(newTabIndex);
  };

  const [catergoryname, setCategoryname] = useState({
    name: "",
  });

  function submitHandle() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(catergoryname);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://jawad-fake-server-app.herokuapp.com/categoryy/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      
      handleClose();
  }
  

    const [valuee, setValuee] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValuee(newValue);
    };
  return (
    <div>
      <Navbar />
      <h4 className="bolderr text-color">Menu</h4>

      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Card
            style={{
              marginTop: "20px",
              marginLeft: "auto",
              width: "max-content",
              paddingTop: "3px",
              paddingLeft: "10px",
              paddingRight: "15px",
              justifyContent: "end",
              border: "1px solid black",
              height: "30px",
              borderRadius: "8px",
            }}
            onClick={handleOpennn}
          >
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Add Item
            </Link>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            style={{
              marginTop: "20px",
              marginLeft: "auto",
              marginRight: "10px",
              width: "max-content",
              paddingTop: "3px",
              paddingLeft: "10px",
              paddingRight: "15px",
              justifyContent: "end",
              border: "1px solid black",
              height: "30px",
              borderRadius: "8px",
            }}
            onClick={handleOpenn}
          >
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              - Category
            </Link>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            style={{
              marginTop: "20px",
              marginLeft: "0px!important",
              marginRight: "10px !important",
              width: "max-content",
              paddingTop: "3px",
              paddingLeft: "10px",
              paddingRight: "15px",
              justifyContent: "end",
              border: "1px solid black",
              height: "30px",
              borderRadius: "8px",
            }}
            onClick={handleOpen}
          >
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              + Category
            </Link>
          </Card>
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

      <h4 className={`bolder-menu text-color ${wtext}`}>
        Add your first menu category. Example “Appetizers”.
      </h4>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <p className="left">Catergory Name</p>
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
            label="Beverages"
            variant="outlined"
            size="small"
            value={catergoryname.name} //setting the value of the form to the props value
            onChange={
              (e) => setCategoryname({ ...catergoryname, name: e.target.value }) //setting the formData to the value input of the textfield
            }
          />

          <Button
            variant="contained"
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF!important",
              marginTop: "40px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            onClick={() => {
              submitHandle();
            }}
          >
            Add
          </Button>

          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClose}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal open={openn} onClose={handleClosee}>
        <Box sx={style}>
          <p
            style={{ marginTop: "5px", marginBottom: "5px" }}
            className="center-text bold-text"
          >
            Select Category
          </p>
          <Card
            style={{
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "330px",
              borderRadius: "8px",
            }}
          >
            {category.map((cat, index) => {
              return (
                <div>
                  <Grid container spacing={1}>
                    <Grid className="checkbox-modal" item xs={1}>
                      <Checkbox
                        sx={{
                          color: "#D0D5DD !important",
                          marginLeft: "0px !important",
                          marginTop: "8px !important",
                          marginBottom: "4px !important",
                          position: "relative !important",
                          paddingLeft: "0px !important",
                          left: "12px !important",
                          "&.Mui-checked": {
                            color: "#0077FF !important",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={11}>
                      <p
                        style={{ color: "black", fontWeight: "500" }}
                        className="spacing-3"
                      >
                        {cat.name}
                      </p>
                    </Grid>
                  </Grid>
                  <Divider />
                </div>
              );
            })}
          </Card>

          <Button
            fullWidth
            className="button"
            sx={{
              color: "red !important",
              backgroundColor: "White",
              fontWeight: "500 !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              marginTop: "40px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
          >
            Remove
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              fontWeight: "500 !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleClosee}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal open={opennn} onClose={handleCloseee}>
        <Box sx={styl}>
          <Grid container>
            <Grid item xs={6}>
              <Card
                style={{
                  border: "2px solid black",
                  backgroundColor: "#D1E9FF",
                  fontFamily: "Montserrat",
                  width: "96px",
                  height: "96px",
                  marginTop: "20px",
                  borderRadius: "100px",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    marginTop: "23px",
                    fontSize: "24px",
                  }}
                >
                  FMS
                </h2>
              </Card>
              <p style={{ textAlign: "left", marginLeft: "28px" }}>Image</p>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <img
                        className="margin-top-image"
                        src={Camera}
                        alt=""
                      ></img>
                    </Grid>
                    <Grid item xs={8}>
                      <h4
                        style={{ fontSize: "16px" }}
                        className="margin-top-text"
                      >
                        {" "}
                        Take Photo
                      </h4>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <img
                        className="margin-top-image"
                        src={Upload}
                        alt=""
                      ></img>
                    </Grid>
                    <Grid item xs={8}>
                      <h4
                        style={{ fontSize: "16px" }}
                        className="margin-top-text"
                      >
                        {" "}
                        Upload
                      </h4>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <p className="left">Item Name</p>
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
            label="Italy 5 Cheese Dinner"
            variant="outlined"
            size="small"
          />
          <p className="left">Price</p>
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
            label="$21.99"
            variant="outlined"
            size="small"
          />
          <p className="left">Description</p>
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
                  height: "95px",
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
            label="Enter item Description"
            variant="outlined"
            size="small"
          />
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              marginTop: "90px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleOpenClose}
          >
            Add
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseee}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal open={opennnn} onClose={handleCloseeee}>
        <Box sx={styl}>
          <Card
            style={{
              border: "2px solid black",
              backgroundColor: "#D1E9FF",
              fontFamily: "Montserrat",
              width: "96px",
              height: "96px",
              marginTop: "20px",
              marginLeft: "108px",
              borderRadius: "100px",
              alignContent: "center",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginTop: "23px",
                fontSize: "24px",
              }}
            >
              FMS
            </h2>
          </Card>
          <p className="left">Item Name</p>
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
            disabled
            variant="outlined"
            size="small"
          />
          <p className="left">Price</p>
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
            variant="outlined"
            disabled
            size="small"
          />
          <p className="left">Description</p>
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
                  height: "95px",
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
            disabled
            variant="outlined"
            size="small"
          />
          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white !important",
              backgroundColor: "#0077FF !important",
              borderColor: "black !important",
              marginTop: "90px!important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
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
              color: "red !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleOpenClose2}
          >
            Remove
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloseeee}
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
        <Box sx={stylee}>
          <p style={{ marginTop: "30px" }} className="success-text">
            Are you sure you want to <br /> remove this item?
          </p>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "red  !important",
              backgroundColor: "white !important",
              marginTop: "40px!important !important",
              borderRadius: "8px !important",
              border: "1px solid red !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
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
              color: "Grey !important",
              marginTop: "15px !important",
              backgroundColor: "White !important",
              borderColor: "black !important",
              borderRadius: "8px !important",
              border: "1px solid black !important",
              fontFamily: "Montserrat !important",
              height: "44px !important",
            }}
            variant="contained"
            onClick={handleCloser}
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Menu
