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
          className="verify-button"
          sx={{
            marginTop: "30px",
            color: "white",
            backgroundColor: "#0077FF",
            borderColor: "black",
            borderRadius: "8px",
          }}
          variant="contained"
        >
          Verify Mobile
        </Button>
        <div className="mt-40">
          <Link onClick={handleClickk}>
            <img className="arrow-icon-verify" src={Arrow} alt=""></img>
            <span className="spacing">back to login</span>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Verification
