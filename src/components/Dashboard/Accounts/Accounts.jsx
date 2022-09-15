import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Modal } from "@material-ui/core";
import BlackArrow from "../../../Assets/Images/blackarrow.png";
import Right from "../../../Assets/Images/right.png";
import VISA from '../../../Assets/Images/visa.png'
import Plus from '../../../Assets/Images/plus.png'
import './accounts.css'

function Accounts() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [opene, setOpene] = React.useState(false);
    const handleOpene = () => setOpene(true);
    const handleClosee = () => setOpene(false);

    const stylee = {
      position: "absolute",
      paddingTop: "0px !important",
      paddingLeft: "15px !important",
      paddingRight: "15px !important",
      top: "43%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 350,
      height: "450px",
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
          <h3 style={{ textAlign: "right", marginRight: "20px" }}>Accounts</h3>
        </Grid>
      </Grid>

      <Card
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          marginRight: "10px",
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "80px",
          borderRadius: "8px",
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <h4 className="bolder text-color">Balance</h4>
          </Grid>
          <Grid item xs={5}>
            <h4 className="balance-value">$40,206.20</h4>
          </Grid>
          <Grid item xs={1}>
            <img className="right-icon" src={Right} alt=""></img>
          </Grid>
        </Grid>
      </Card>

      <Card
        style={{
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "43px",
          marginBottom: "10px",
          borderRadius: "8px",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "40px",
        }}
      >
        <Grid container>
          <Grid item xs={1}>
            <img
              style={{ marginTop: "13px" }}
              src={Plus}
              alt=""
              onClick={handleOpene}
            />
          </Grid>
          <Grid item xs={10}>
            <h4
              style={{
                textAlign: "left",
                marginTop: "10px",
                marginLeft: "10px",
                fontSize: "16px",
                fontWeight: "500",
                color: "#0077FF",
              }}
              onClick={handleOpene}
            >
              Add debit card
            </h4>
          </Grid>
          <Grid item xs={1}>
            <img
              style={{ marginTop: "13px" }}
              src={Right}
              alt=""
              onClick={handleOpene}
            ></img>
          </Grid>
        </Grid>
      </Card>
      <Card
        id="disabled-role"
        style={{
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "43px",
          marginBottom: "10px",
          borderRadius: "8px",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <Grid container>
          <Grid item xs={1}>
            <img style={{ marginTop: "13px" }} src={Plus} alt="" />
          </Grid>
          <Grid item xs={10}>
            <h4
              style={{
                textAlign: "left",
                marginTop: "10px",
                marginLeft: "10px",
                fontSize: "16px",
                fontWeight: "500",
                color: "#0077FF",
              }}
            >
              Add bank account
            </h4>
          </Grid>
          <Grid item xs={1}>
            <img style={{ marginTop: "13px" }} src={Right} alt=""></img>
          </Grid>
        </Grid>
      </Card>

      <Modal
        open={opene}
        onClose={handleClosee}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <p style={{ color: "#344054" }} className="left">
            Card Holder Name
          </p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#0077FF" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid #000000",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #000000 ",
                },
              },
            }}
            variant="outlined"
            size="small"
          />
          <p style={{ color: "#344054" }} className="left">
            Card Number
          </p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid #000000",
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
            size="small"
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p style={{ color: "#344054" }} className="left">
                CVV
              </p>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      border: "1px solid #000000",
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
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <p style={{ color: "#344054" }} className="left">
                Expiration Date
              </p>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      border: "1px solid #000000",
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
                size="small"
              />
            </Grid>
          </Grid>

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
            onClick={handleClosee}
            // onClick={handleClickkk}
          >
            Back
          </Button>
        </Box>
      </Modal>
      <Modal
        open={opene}
        onClose={handleClosee}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <p style={{ color: "#344054" }} className="left">
            Card Holder Name
          </p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#0077FF" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid #000000",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid #000000 ",
                },
              },
            }}
            variant="outlined"
            size="small"
          />
          <p style={{ color: "#344054" }} className="left">
            Card Number
          </p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid #000000",
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
            size="small"
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p style={{ color: "#344054" }} className="left">
                CVV
              </p>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      border: "1px solid #000000",
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
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <p style={{ color: "#344054" }} className="left">
                Expiration Date
              </p>
              <TextField
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      border: "1px solid #000000",
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
                size="small"
              />
            </Grid>
          </Grid>

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
            onClick={handleOpen}
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
            onClick={handleClosee}
            // onClick={handleClickkk}
          >
            Back
          </Button>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <p
            style={{
              color: "#0077FF",
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "200px",
            }}
          >
            Plain bank linking screen
          </p>
        </Box>
      </Modal>
    </div>
  );
}

export default Accounts
