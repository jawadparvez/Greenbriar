import React from 'react'
import { Route, Routes } from "react-router-dom";
import Email from './EmailVerify/Email';
import Error from './ErrorHandle/Error';
import Forgot from './ForgotPassword/Forgot';
import Login from './Login/Login';
import NewPassword from './NewPassword/NewPassword';
import Register from './Register/Register';
import Register2 from './Register/Register2';
import ResetSuccess from './ResetSuccess/ResetSuccess';
import Success from './Success/Success';
import Home from "./Dashboard/Home/Home"
import Verification from './Verification/Verification';
function Header() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/signupnext" element={<Register2 />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/success" element={<Success />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/emailverify" element={<Email />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/resetsuccess" element={<ResetSuccess />} />
        <Route path="/404error" element={<Error />} />
        <Route path="/notifications" element={<Error />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Header
