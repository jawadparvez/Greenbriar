import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from "@mui/material/Card";
import { Link } from "@mui/material";
import './menu.css'

function Menu() {
  return (
    <div>
      <Navbar />
      <h4 className="bolderr text-color">Menu</h4>

      <Card
        style={{
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "20px",
          width: "max-content",
          paddingTop: "3px",
          paddingLeft: "10px",
          paddingRight: "15px",
          justifyContent: "end",
          border: "1px solid black",
          fontFamily: "Montserrat",
          height: "30px",
          borderRadius: "8px",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          + Category
        </Link>
      </Card>

      <h4 className="bolder-menu text-color">
        Add your first menu category. Example “Appetizers”.
      </h4>
    </div>
  );
}

export default Menu
