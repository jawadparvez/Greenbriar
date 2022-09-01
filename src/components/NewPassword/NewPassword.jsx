import React from 'react'
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button, Link } from "@mui/material";
import Arrow from "../../Assets/Images/arrow.png";
import { FormControl, FormHelperText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Key from "../../Assets/Images/key.png";

function NewPassword() {
  let navigate = useNavigate();
  function handleClickk() {
    navigate("/");
  }
  function handleClick() {
    navigate("/resetsuccess");
  }
  return (
    <div>
      <Container maxWidth="xs">
        <div>
          <img className="mail-icon" src={Key} alt=""></img>
          <h4 className="code-text">Set new password?</h4>
          <p className="number-text">
            Your new password must be different to <br /> previously used
            passwords
          </p>
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
            type="password"
            size="small"
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
              label="Confrim password"
              variant="outlined"
              type="password"
              size="small"
            />
            <FormHelperText id="standard-weight-helper-text">
              Passwords must match
            </FormHelperText>
          </FormControl>
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
            onClick={handleClick}
          >
            Reset Password
          </Button>
          <div className="mt-40">
            <Link style={{ textDecoration: "none" }} onClick={handleClickk}>
              <img className="arrow-icon-verify" src={Arrow} alt=""></img>
              <span className="spacing">Back to log in</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewPassword
