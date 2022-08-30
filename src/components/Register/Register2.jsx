import React from 'react'
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Button, Link } from "@mui/material";
import Arrow from '../../Assets/Images/arrow.png'
import WDot from "../../Assets/Images/wDot.png";
import Dot from "../../Assets/Images/Dot.png";
import './register2.css'
const Register2 = () => {
  return (
    <div>
      <Container maxWidth="xs">
        <div className="margin-top">
          <h5 className="title">Resturant Info</h5>
          <Link href="/signup">
            <img className="arrow-icon" src={Arrow} alt=""></img>
          </Link>
          <h5 className="left-1">Resturant Name</h5>

          <TextField
            fullWidth
            className="text-field"
            id="outlined-basic"
            label="Enter resturant name"
            variant="outlined"
            size="small"
          />

          <h5 className="left">Resturant Address</h5>
          <TextField
            fullWidth
            className="text-field"
            id="outlined-basic"
            label="Enter resturant address"
            variant="outlined"
            size="small"
          />

          <h5 className="left">Number of Tables</h5>
          <TextField
            fullWidth
            className="text-field"
            id="outlined-basic"
            label="Enter number"
            variant="outlined"
            size="small"
          />
          <div className='align-center'>
            <img className="wdot-icon" src={WDot} alt="wdot"></img>
            <img className="dot-icon" src={Dot} alt="dot"></img>
          </div>
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
            Create Account
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Register2
