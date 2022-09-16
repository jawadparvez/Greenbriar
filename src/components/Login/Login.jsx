import React from "react";
// import {useState, useEffect} from "react"
// import {useSelector, useDispatch} from "react-redux"
import Container from "@mui/material/Container";
import { Checkbox, Link, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./login.css";
import Logo from "../../Assets/Images/Google-icon.png";
import { useNavigate } from "react-router-dom";

function Login(){
  // const dispatch = useDispatch();
  // const errors = useSelector(state => state.errors);
  // console.log(errors);
  // const [user, setUsers] = useState();

  // const HandleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  // }

  // const newUser = {
  //   email: data.get('email'),
  //   password: data.get('password')
  // };

  // console.log(errors);
  // dispatch(loginUser(newUser,navigate));
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")//this is a dummy Api
  //     .then((response) => setUsers(response.data));
  // }, []);

  let navigate = useNavigate();
  function handleClick() {
    navigate("/signup");
  }
  function handleClickkk() {
    navigate("/home");
  }
  function handleClickk() {
    navigate("/forgotpassword");
  }

  return (
    <div>
      <Container maxWidth="xs">
        <div className="margin-top">
          <h4 className="title">Sign In</h4>
          <p className="welcome-text">
            Welcome back! Please enter your <br /> details below
          </p>
          <div className="margin-t">
            <h5 className="left">Email</h5>

            <TextField
              fullWidth
              
              sx={{
                "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "#000000",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    border: "1px solid",
                    borderRadius: "8px",
                    height: "47px",
                    fontStretch:'120%'
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
              label="Enter your email"
              variant="outlined"
              size="small"
            />

            <h5 className="left">Password</h5>
            <TextField
              className="input"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "gray" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "#000000",
                    border: "1px solid",
                    borderRadius: "8px",
                    height: "47px",
                  },
                  "& > placeholder": {
                    fontWeight: "400",
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
              type="password"
              variant="outlined"
            />
          </div>
          <Grid container spacing={0}>
            <Grid className="checkbox" item xs={1}>
              <Checkbox
                sx={{
                  color: "#D0D5DD",
                  marginLeft: "0px",
                  position: "absolute",
                  left: "12px",
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
                <Link
                  onClick={handleClickk}
                  style={{ textDecoration: "none", color: "#0077FF",lineHeight:'20px' }}
                >
                  Forgot password
                </Link>
              </div>
            </Grid>
          </Grid>

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              fontSize:'16px',
              fontWeight:'600',
              borderRadius: "8px",
              border: "1px solid black",
              height: "44px",
            }}
            variant="contained"
            onClick={handleClickkk}
          >
            Sign In
          </Button>

          <Button
            className="google-button button"
            fullWidth
            sx={{
              borderColor: "black",
              borderRadius: "8px",
              fontSize:'16px',
              fontWeight:'500',
              width:'hug(159px)',
              border: "1px solid #00000",
              height: "44px",
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
                  Sign up
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
