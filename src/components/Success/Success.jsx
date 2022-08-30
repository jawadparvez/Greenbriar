import React from 'react'
import Tick from "../../Assets/Images/tick.png"
import { Container } from "@mui/system";
import { Button} from "@mui/material";
import "./success.css"
function Success() {
  return (
    <div>
      <Container maxWidth="xs">
        <div>
          <img className="mail-icon" src={Tick} alt=""></img>
          <h4 className="code-text">Phone Verified</h4>
          <p className="success-text">
            Your mobile phone has been successfully <br /> veirfied. Click below
            to login
          </p>
          <Button
            fullWidth
            className="verify-button"
            sx={{
              marginTop: "30px",
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Sign In
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Success
