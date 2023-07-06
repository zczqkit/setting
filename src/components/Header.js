import React from 'react';
import './Header.css';
import { Box,Typography} from '@mui/material';

function Header() {
  return (
    <Box className="headerBox">
      <Box className="headerFontContainer">
        <Typography className="headerFont" sx={{fontSize:"30px",fontFamily:"Segoe UI"}}>Settings</Typography>
      </Box>
    </Box>
  );
}

export default Header;