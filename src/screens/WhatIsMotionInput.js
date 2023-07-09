import React from 'react';
import Header from '../components/Header';
import SideMenu_Step2 from '../components/SideMenu_Step2';
import motionInputLogo from '../components/motioninput.jpg';
import uclLogo from '../components/ucl_logo.svg';
import logo from '../components/logo.png';
import './About.css';
import { Box,Grid,Typography,Button} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link} from 'react-router-dom';


function WhatISMotionInput() {
  
    return (
      <div>
        <Header/>
        <Grid container item xs={12}>
          <Grid item xs={3}><SideMenu_Step2/></Grid>
          <Grid item xs={9}><HomeBody/></Grid>
        </Grid>
      </div> 
    );
  }
  
  export default WhatISMotionInput;

  const styles = {

    menuItem: {
      fontSize: '2.5rem',
      fontFamily: 'Segoe UI',
      display: 'flex',
      alignItems: 'center',
      margin: '0 0 4.5rem 0',
    },
    description: {
      fontSize: '1.5rem',
      fontFamily: 'Segoe UI',
      margin:"0.5rem 0.5rem"
    },

    buttonPosition:{
      width: "35rem",
      display: 'flex', 
      flexDirection: 'row' , 
      marginTop:"2rem"
      },
    primebutton:{
      backgroundColor:"#5B5FC7",
      color:"white",
      textTransform: "none",
      borderRadius:'1rem',
      margin:'0 0 0 0rem',
      fontSize: '1.5rem', 
      padding: '1rem', 
      height: '3rem',  
      width: '8rem'  
    },
  };

  // <img src={logo} alt="logo" className="logo"/>

  function HomeBody() {
    return (
      <Box className="Homebody">
        <Typography sx={styles.menuItem}>
            What is MotionInput ?
        </Typography>
        <Box className="textbox" sx={{ display: 'flex',flexDirection: 'row'}}>
          <Grid item xs={6} sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <img src={motionInputLogo} alt="logo" className="logo"style={{height:'15rem',width:'15rem'}}/>
          </Grid>
          <Grid item xs={6} sx={{ position: 'relative', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Typography sx={{fontSize: '1.5rem',fontFamily: 'Segoe UI',}}>Set up, dive into fun!<br /> <br />
              With MotionInput, by waving or jumping,<br />you can explore a new world of gaming!
              </Typography>
              <Box sx={{position: 'absolute', right: '14.5rem', bottom: '0.3rem'}}>
              <img src={uclLogo} alt="logo" style={{height:'1.5rem',width:'5rem',margin:'0 0'}}/>
              </Box>
              <Box sx={{position: 'absolute', right: 0, bottom: 0}}>
              <img src={logo} alt="logo" style={{height:'2rem',width:'14.5rem',margin:'0 0'}}/>
              </Box>
          </Grid>
        </Box>
        
        <Box sx={styles.buttonPosition}>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/Control"><Button size="large" sx={styles.primebutton}>
              Next<ChevronRightIcon sx={{margin:'0 0 0 0.5rem', padding:"0"}}/>
            </Button></Link>
          </Grid>
        </Box>
      </Box>
    );
}