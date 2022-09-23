import React from 'react'
import { Route, Routes } from "react-router-dom";
import Email from './EmailVerify/Email';
import Error from './ErrorHandle/Error';
import Forgot from './ForgotPassword/Forgot';
import Login from './Login/Login';
import NewPassword from './NewPassword/NewPassword';
import Register from './Register/Register';
import ResetSuccess from './ResetSuccess/ResetSuccess';
import Success from './Success/Success';
import Home from "./Dashboard/Home/Home"
import Verification from './Verification/Verification';
import Menu from './Dashboard/Menu/Menu';
import TableManager from './Dashboard/TableManager/TableManager';
import TabHistory from './Dashboard/Tab History/TabHistory';
import ViewOrder from './Dashboard/ViewOrder/ViewOrder';
import ViewTab from './Dashboard/ViewTab/ViewTab';
import Users from './Dashboard/Users/Users';
import Accounts from './Dashboard/Accounts/Accounts';
import {PrivateRoute } from "../PrivateRoute";
import { history } from "../_helpers";
import {
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Settings from './Dashboard/Settings/Settings';
function Header() {

      history.navigate = useNavigate();
      history.location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/success" element={<Success />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/emailverify" element={<Email />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/resetsuccess" element={<ResetSuccess />} />
        <Route path="/404error" element={<Error />} />
        <Route path="/notifications" element={<Error />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }
        />
        <Route
          path="/tablemanager"
          element={
            <PrivateRoute>
              <TableManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/tabhistory"
          element={
            <PrivateRoute>
              <TabHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="/vieworder"
          element={
            <PrivateRoute>
              <ViewOrder />
            </PrivateRoute>
          }
        />
        <Route
          path="/viewTab"
          element={
            <PrivateRoute>
              <ViewTab />
            </PrivateRoute>
          }
        />
        <Route
          path="/Users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/Accounts"
          element={
            <PrivateRoute>
              <Accounts />
            </PrivateRoute>
          }
        />
        <Route
          path="/Settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default Header
