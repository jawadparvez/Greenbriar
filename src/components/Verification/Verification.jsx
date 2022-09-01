import React from 'react'
import Mail from '../../Assets/Images/mail.png'
import OTPInput from "otp-input-react";
import { Button, Link } from "@mui/material";
import { useState } from 'react';
import Arrow from "../../Assets/Images/arrow.png";
import './verification.css'
import { Container } from '@mui/system';
import { useNavigate } from "react-router-dom";
function Verification() {
    const [OTP, setOTP] = useState("");
     let navigate = useNavigate();
     function handleClickk() {
       navigate("/");
     }
     function handleClick() {
       navigate("/success");
     }
  return (
    <Container maxWidth="xs">
      <div>
        <img className="mail-icon" src={Mail} alt=""></img>
        <h4 className="code-text">Enter Your Code</h4>
        <p className="number-text">
          We sent a verification code to the mobile <br /> number ending is
          ******2782
        </p>
        <div className="center">
          <OTPInput
            value={OTP}
            className="flex"
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
          />
        </div>
        <Button
          fullWidth
          className="verify-button button"
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
          Verify Mobile
        </Button>
        <div className="mt-40">
          <Link style={{ textDecoration: "none" }} onClick={handleClickk}>
            <img className="arrow-icon-verify" src={Arrow} alt=""></img>
            <span className="spacing">Back to log in</span>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Verification
