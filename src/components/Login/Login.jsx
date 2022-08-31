import React from "react";
import Container from "@mui/material/Container";
import { Checkbox, Link, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./login.css";
import Logo from "../../Assets/Images/Google-icon.png";
import { useNavigate } from "react-router-dom";

function Login(){
  let navigate = useNavigate();
  function handleClick() {
    navigate("/signup");
  }
  function handleClickk() {
    navigate("/forgotpassword");
  }
  return (
    <div>
      <Container maxWidth="xs">
        <div className="margin-top">
          <h4 className="title">Sign up</h4>
          <p className="welcome-text">
            Welcome back! Please enter your <br /> details below
          </p>

          <h5 className="left">Email</h5>
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
            
            label="Enter your email"
            variant="outlined"
            size="small"
          />

          <h5 className="left">Password</h5>
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
            
            label="Enter your password"
            size="small"
            variant="outlined"
          />

          <Grid container spacing="0">
            <Grid className="checkbox" item xs={1}>
              <Checkbox
                sx={{
                  color: "#D0D5DD",
                  alignItems: "flex-start !important",
                  marginLeft: "0px",
                  "&.Mui-checked": {
                    color: "#0077FF",
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <p className="p-css">Remember for 30 days</p>
            </Grid>
            <Grid item xs={5}>
              <div className="float">
                <Link onClick={handleClickk} style={{ textDecoration: "none" }}>
                  Forgot password
                </Link>
              </div>
            </Grid>
          </Grid>

          <Button
            fullWidth
            className="signin-button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              borderRadius: "10px",
              border: "1px solid black",
              height: "45px",
            }}
            variant="contained"
          >
            Sign In
          </Button>

          <Button
            className="google-button"
            fullWidth
            sx={{
              borderColor: "black",
              borderRadius: "8px",
              border: "1px solid #00000",
              height: "45px",
            }}
            variant="outlined"
            startIcon={<img className="google-icon" src={Logo} alt=""></img>}
          >
            Sign In with Google
          </Button>

          <div className="no-account">
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <p className="text-account">Don't have an account?</p>
              </Grid>
              <Grid item xs={4}>
                <Link
                  style={{ textDecoration: "none" }}
                  className="Sign-Up"
                  onClick={handleClick}
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
