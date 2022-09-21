import React from 'react'
import Container from '@mui/material/Container';
import {Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText } from '@mui/material'
import TextField from '@mui/material/TextField';
import WDot from '../../Assets/Images/wDot.png' 
import Dot from "../../Assets/Images/Dot.png";
import { useNavigate } from "react-router-dom";
import "./register.css"

function Register({ page, setPage, formData, setFormData }) {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <Container maxWidth="xs">
        <div className="margin-top">
          <h5 className="title">Personal Info</h5>

          <h5 className="left">First & Last Name</h5>

          <TextField
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
            label="Enter your first and last name"
            variant="outlined"
            className="form-group"
            size="small"
            value={formData.name} //setting the value of the form to the props value
            onChange={
              (e) => setFormData({ ...formData, name: e.target.value }) //setting the formData to the value input of the textfield
            }
          />

          <h5 className="left">Mobile Number</h5>
          <TextField
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
            label="Enter your phone number"
            variant="outlined"
            className="form-group"
            size="small"
            value={formData.mobile} //setting the value of the form to the props value
            onChange={
              (e) => setFormData({ ...formData, mobile: e.target.value }) //setting the formData to the value input of the textfield
            }
          />

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
                  height: "47px",
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
            label="Enter your email"
            variant="outlined"
            className="form-group"
            size="small"
            value={formData.email} //setting the value of the form to the props value
            onChange={
              (e) => setFormData({ ...formData, email: e.target.value }) //setting the formData to the value input of the textfield
            }
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
                  height: "47px",
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
            label="Enter your password"
            variant="outlined"
            className="form-group"
            type="password"
            size="small"
            value={formData.password} //setting the value of the form to the props value
            onChange={
              (e) => setFormData({ ...formData, password: e.target.value }) //setting the formData to the value input of the textfield
            }
          />

          <h5 className="left">Confirm Password</h5>
          <FormControl fullWidth={true}>
            <TextField
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
              type="password"
              label="Confirm password"
              variant="outlined"
              className="form-group"
              size="small"
              // value={formData.confirmpassword} //setting the value of the form to the props value
              // onChange={
              //   (e) =>
              //     setFormData({ ...formData, confirmpassword: e.target.value }) //setting the formData to the value input of the textfield
              // }
            />
            <FormHelperText id="standard-weight-helper-text">
              Passwords must match
            </FormHelperText>
          </FormControl>

          <div className="align-center">
            <img className="dot-icon" src={Dot} alt=""></img>
            <img className="wdot-icon" src={WDot} alt=""></img>
          </div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "16px",
              color: "#0077FF",
              marginRight:'20px'
            }}
            className="float"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            {" "}
            Next
          </Link>

          <div className="already-account">
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

export default Register
