import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const styles = {
  sideMenuBox: {
    height: '100vh',
    background: '#C7C7C7',
  },
  sideMenuItem: {
    height: '100%',
  },
  dottedCircle: {
    width: '24px',
    height: '24px',
    border: '2px dotted #000',
    borderRadius: '50%',
    margin: '0.1rem 0',
  },
  menuIcon: {
    fontSize: '2rem', 
    margin: '0 0.5rem 0 0',
  },
  menuItem: {
    fontSize: '1.5rem',
    fontFamily: 'Segoe UI',
    display: 'flex',
    alignItems: 'center',
    margin: '0.65rem 0 1rem',
  },
};

function Sidemenu() {
  return (
    <Grid container item xs={12} sx={styles.sideMenuBox}>
      <Grid item xs={3}>
        <DottedLineWithCircles />
      </Grid>
      <Grid item xs={9} sx={styles.sideMenuItem}>
        <Typography sx={styles.menuItem}>
          <InfoOutlinedIcon sx={styles.menuIcon} />About
        </Typography>
        <Typography sx={styles.menuItem}>
          <SportsEsportsOutlinedIcon sx={styles.menuIcon} />Contorl
        </Typography>
        <Typography sx={styles.menuItem}>
          <PlayCircleOutlineOutlinedIcon sx={styles.menuIcon} />Start
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Sidemenu;

function DottedLineWithCircles() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'0.5rem'}}>
      <CheckCircleIcon sx={{ height: '2rem', width: '2rem', margin: '0.2rem 0 0 0', color: '#13A10E' }} />
      <div style={{ width: '2px', height: '1.3rem', background: 'black' }}></div>
      <CircleOutlinedIcon sx={{ height: '2rem', width: '2rem', margin: '0 0 0 0', color: '#5B5FC7' }} />
      <div style={{ width: '2px', height: '1.3rem', background: 'black' }}></div>
      <div style={styles.dottedCircle}></div>
    </Box>
  );
}