import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Card from "@mui/material/Card";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import './menu.css'



function Menu() {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const stylee = {
      position: "absolute",
      paddingTop: "0px !important",
      paddingLeft: "15px !important",
      paddingRight: "15px !important",
      top: "32%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 350,
      height: "265px",
      bgcolor: "white",
      border: "1px solid black",
      borderRadius: "8px",
      boxShadow: 24,
      zIndex: "+1",
      p: 4,
    };
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
          height: "30px",
          borderRadius: "8px",
        }}
        onClick={handleOpen}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylee}>
          <p className="left">Catergory Name</p>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#667085" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#000000",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  border: "1px solid",
                  borderRadius: "8px",
                  height: "47px",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "#667085" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#000000",
                  border: "1px solid",
                },
              },
            }}
            label="Beverages"
            variant="outlined"
            size="small"
          />

          <Button
            fullWidth
            className="signin-button button"
            sx={{
              color: "white",
              backgroundColor: "#0077FF",
              borderColor: "black",
              marginTop: "40px!important",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Add
          </Button>
          <Button
            fullWidth
            className="button"
            sx={{
              color: "Grey",
              marginTop: "15px",
              backgroundColor: "White",
              borderColor: "black",
              borderRadius: "8px",
              border: "1px solid black",
              fontFamily: "Montserrat",
              height: "44px",
            }}
            variant="contained"
            // onClick={handleClickkk}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Menu
