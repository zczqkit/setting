import React from 'react';
import './Header.css';
import { Grid,Typography} from '@mui/material';

function Header() {
  return (
    <div>
      <Grid container alignItems="center" className="headerBox">
        <Grid item xs={3} className="headerFontContainer">
          <Typography className="headerFont" 
            sx={{fontSize:"30px",fontFamily:"Segoe UI",textAlign:"center"}}>
            Settings
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
