import React from 'react'
import Mail from '../../Assets/Images/mail.png'
import OTPInput from "otp-input-react";
import { useState } from 'react';
import './verification.css'
function Verification() {
    const [OTP, setOTP] = useState("");
  return (
    <div>
      <img className="mail-icon" src={Mail} alt=""></img>
      <h4 className="code-text">Enter Your Code</h4>
      <p className="number-text">
        We sent a verification code to the mobile <br /> number ending is
        ******2782
      </p>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        style={{borderRadius:'20', color:'blue'}}
        OTPLength={4}
        otpType="number"
        disabled={false}
      />
    </div>
  );
}

export default Verification
