import React from 'react'
import Container from '@mui/material/Container';
import {Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText } from '@mui/material'
import TextField from '@mui/material/TextField';
import WDot from '../../Assets/Images/wDot.png' 
import Dot from "../../Assets/Images/Dot.png";
import "./register.css"
const Register = () => {
  return (
    <div>
      <Container maxWidth="xs">
        <div className="margin-top">
          <h5 className="title">Personal Info</h5>

          <h5 className="left">First & Last Name</h5>

          <TextField
            fullWidth
            className="text-field"
            id="outlined-basic"
            label="Enter your first and last name"
            variant="outlined"
            size="small"
          />

          <h5 className="left">Mobile Number</h5>
          <TextField
            fullWidth
            className="text-field"
            id="outlined-basic"
            label="Enter your phone number"
            variant="outlined"
            size="small"
          />

          <h5 className="left">Email</h5>
          <TextField
            fullWidth
            className="text-field"
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            size="small"
          />

          <h5 className="left">Password</h5>
          <TextField
            fullWidth
            className="text-field"
            id="outlined-basic"
            label="Enter your password"
            variant="outlined"
            size="small"
          />

          <h5 className="left">Confirm Password</h5>
          <FormControl fullWidth={true}>
            <TextField
              fullWidth
              className="text-field"
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
              size="small"
            />
            <FormHelperText id="standard-weight-helper-text">
              passwords must match
            </FormHelperText>
          </FormControl>

          <div className="align-center">
            <img className="dot-icon" src={Dot} alt=""></img>
            <img className="wdot-icon" src={WDot} alt=""></img>
          </div>
          <Link className="float" href="/signupnext">
            Next
          </Link>

          <div className="already-account">
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <p className="text-account">Already have an account?</p>
              </Grid>
              <Grid item xs={4}>
                <Link className="Sign-Up" href="/">
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

export default Register
