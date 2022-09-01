import React from 'react'
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Button, Link } from "@mui/material";
import Arrow from '../../Assets/Images/arrow.png'
import WDot from "../../Assets/Images/wDot.png";
import Dot from "../../Assets/Images/Dot.png";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import './register2.css'

function Register2(){
  let navigate = useNavigate();
  function handleClickk() {
    navigate("/signup");
  }
  function handleClicck() {
    navigate("/verification");
  }
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <Container maxWidth="xs">
        <div className="margin-top">
          <h5 className="title">Resturant Info</h5>
          <Link onClick={handleClickk}>
            <img className="arrow-icon" src={Arrow} alt=""></img>
          </Link>
          <h5 className="left-1">Resturant Name</h5>

          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "gray" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                  borderRadius: "8px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            id="outlined-basic"
            label="Enter resturant name"
            variant="outlined"
            size="small"
          />

          <h5 className="left">Resturant Address</h5>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "gray" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                  borderRadius: "8px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            id="outlined-basic"
            label="Enter resturant address"
            variant="outlined"
            size="small"
          />

          <h5 className="left">Number of Tables</h5>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "gray" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                  borderRadius: "8px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "gray" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            id="outlined-basic"
            label="Enter number"
            variant="outlined"
            size="small"
          />
          <div className="align-center">
            <img className="wdot-icon" src={WDot} alt="wdot"></img>
            <img className="dot-icon" src={Dot} alt="dot"></img>
          </div>
          <Button
            fullWidth
            className="google-button button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              borderRadius: "8px",
              border: "1px solid black",
              height: "44px",
            }}
            variant="contained"
            onClick={handleClicck}
          >
            Create Account
          </Button>
          <div className="alreadyy-account">
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <p className="text-account">Already have an account?</p>
              </Grid>
              <Grid item xs={4}>
                <Link
                  style={{ textDecoration: "none" }}
                  className="Sign-Up"
                  onClick={handleClick}
                >
                  Log In
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Register2
