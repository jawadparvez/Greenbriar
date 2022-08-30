import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
import Register2 from './Register/Register2';
import Verification from './Verification/Verification';
function Header() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/signupnext" element={<Register2 />} />
        <Route path="/verfication" element={<Verification />} />
      </Routes>
    </div>
  );
}

export default Header
