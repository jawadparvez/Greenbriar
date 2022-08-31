import React from 'react'
import { Container } from "@mui/system";
import Mail from "../../Assets/Images/mail.png";
import {Link, Button } from "@mui/material";
import Arrow from "../../Assets/Images/arrow.png";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./Email.css"

function Email() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  function handleClickk() {
    navigate("/");
  }
  return (
    <div>
      <Container maxWidth="xs">
        <div>
          <img className="mail-icon" src={Mail} alt=""></img>
          <h4 className="code-text">Check your email</h4>
          <p className="number-text">
            We sent a password reset link to <br />
            <Link>olivia@untitledui.com</Link>
          </p>

          <Button
            fullWidth
            className="google-button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Sign In
          </Button>
          <div className="verify-account">
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <p className="textemail-account">Didn't receive the email?</p>
              </Grid>
              <Grid item xs={4}>
                <Link
                  style={{ textDecoration: "none" }}
                  className="Sign-Up"
                  onClick={handleClickk}
                >
                  Click to resend
                </Link>
              </Grid>
            </Grid>
          </div>
          <div className="mt-40">
            <Link onClick={handleClick}>
              <img className="arrow-icon-verify" src={Arrow} alt=""></img>
              <span className="spacing">back to login</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Email
