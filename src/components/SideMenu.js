
import React from 'react';
import './SideMenu.css';
import { Grid,Typography} from '@mui/material';

function Sidemenu() {
    return (
      <Grid  container item xs={3} className="sideMenuBox">
        <Grid item xs={3}>
            <Grid item xs={6}>
            <Typography sx={{fontSize:"20px",fontFamily:"Segoe UI"}}>Ab</Typography>
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Grid item xs={6}>
            <Typography sx={{fontSize:"20px",fontFamily:"Segoe UI"}}>Ab</Typography>
            </Grid>
        </Grid>
        <Grid item xs={6}  className="sideMenuItem">
          <Typography sx={{fontSize:"20px",fontFamily:"Segoe UI"}}>About</Typography>
          <Typography sx={{fontSize:"20px",fontFamily:"Segoe UI"}}>Contorl</Typography>
          <Typography sx={{fontSize:"20px",fontFamily:"Segoe UI"}}>Start</Typography>
        </Grid>
      </Grid>
    );
  }

  export default Sidemenu;