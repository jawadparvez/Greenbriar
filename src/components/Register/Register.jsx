import React from 'react'
import Container from '@mui/material/Container';
import { Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText } from '@mui/material'
import TextField from '@mui/material/TextField';
const Register = () => {
  return (
    <div>
          <Container maxWidth='xs'>
              <div className='margin-top'>
                  <Typography>
                      <h4 className='title'>Personal Info</h4>
                  </Typography>
                  <Typography>
                      <h5 className='left'>First & Last Name</h5>
                      <TextField fullWidth className='text-field' floatingLabelStyle={{ color: "black" }} id="outlined-basic" label="Enter your first and last name" InputProps={{ disableUnderline: true }} variant="outlined" size='small' />
                  </Typography>
                  <Typography>
                      <h5 className='left'>Mobile Number</h5>
                      <TextField fullWidth className='text-field' floatingLabelStyle={{ color: "black" }} id="outlined-basic" label="Enter your phone number" InputProps={{ disableUnderline: true }} variant="outlined" size='small' />
                  </Typography>
                  <Typography>
                      <h5 className='left'>Email</h5>
                      <TextField fullWidth className='text-field' floatingLabelStyle={{ color: "black" }} id="outlined-basic" label="Enter your email" InputProps={{ disableUnderline: true }} variant="outlined" size='small' />
                  </Typography>
                  <Typography>
                      <h5 className='left'>Password</h5>
                      <TextField fullWidth className='text-field' floatingLabelStyle={{ color: "black" }} id="outlined-basic" label="Enter your password" InputProps={{ disableUnderline: true }} variant="outlined" size='small' />
                  </Typography>
                  <Typography>
                      <h5 className='left'>Confirm Password</h5>
                      <FormControl fullWidth={true} >
                      <TextField fullWidth className='text-field' floatingLabelStyle={{ color: "black" }} id="outlined-basic" label="Confirm password" InputProps={{ disableUnderline: true }} variant="outlined" size='small' />
                      <FormHelperText id="standard-weight-helper-text">passwords must match</FormHelperText>
                      </FormControl>
                  </Typography>
                  <Typography>
                    <Link className='float'>
                    Next
                    </Link>
                  </Typography>
                  <Typography className='already-account'>
                      <Grid container spacing={0}>
                          <Grid item xs={8}>
                              <p className='text-account'>Already have an account?</p>
                          </Grid>
                          <Grid item xs={4}>
                              <Link className='Sign-Up'>Log In</Link>
                          </Grid>
                      </Grid>


                  </Typography>
                  </div>
                  </Container>
    </div>
  )
}

export default Register
