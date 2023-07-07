
import React from 'react';
import './SideMenu.css';
import { Grid,Typography} from '@mui/material';
import AboutLogo from './About.png';
import ControlLogo from './Control.png';
import StartLogo from './Start.png';
import FlappyBirdLogo from './flappy-bird-logo.png';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function Sidemenu() {
    return (
      <Grid  container item xs={3} className="sideMenuBox">
        <Grid item xs={3}>
            <Grid item xs={6}>
            <CircleOutlinedIcon className="progressBar"/>
            <CircleOutlinedIcon className="progressBar"/>
            <CircleOutlinedIcon className="progressBar"/>
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Grid item xs={6}>
            <InfoOutlinedIcon className="logo"/>
            <SportsEsportsOutlinedIcon className="logo"/>
            <PlayCircleOutlineOutlinedIcon className="logo"/>
            </Grid>
        </Grid>
        <Grid item xs={6}  className="sideMenuItem">
          <Typography sx={{fontSize:"1.5rem",fontFamily:"Segoe UI",marginBottom:"1rem"}}>About</Typography>
          <Typography sx={{fontSize:"1.5rem",fontFamily:"Segoe UI",marginBottom:"1rem"}}>Contorl</Typography>
          <Typography sx={{fontSize:"1.5rem",fontFamily:"Segoe UI",marginBottom:"1rem"}}>Start</Typography>
        </Grid>
      </Grid>
    );
  }

  export default Sidemenu;