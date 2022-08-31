import React from 'react'
import { Container } from "@mui/system";
import Arrow from "../../Assets/Images/arrow.png";
import Errorr from "../../Assets/Images/error.png";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <Container maxWidth="xs">
        <div>
          <img className="mail-icon" src={Errorr} alt=""></img>
          <h4 className="code-text">We can't find that page</h4>
          <p className="success-text">
            Sorry, the page you are looking for <br /> exist or has been moved.
            to login
          </p>
          <div className="mt-40">
            <Link style={{ textDecoration: "none" }} onClick={handleClick}>
              <img className="arrow-icon-verify" src={Arrow} alt=""></img>
              <span className="spacing">Back to log in</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Error
