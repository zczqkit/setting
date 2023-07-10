import React from 'react';
import Header from '../components/Header';
import SideMenu_Step1 from '../components/SideMenu_Step1';
import motionInputLogo from '../components/motioninput.jpg';
import uclLogo from '../components/ucl_logo.svg';
import logo from '../components/logo.png';
import './About.css';
import { Box,Grid,Typography,Button} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link} from 'react-router-dom';


function About() {
  
    return (
      <div>
        <Header/>
        <Grid container item xs={12}>
          <Grid item xs={3}><SideMenu_Step1/></Grid>
          <Grid item xs={9}><HomeBody/></Grid>
        </Grid>
      </div> 
    );
  }
  
  export default About;

  const styles = {
    menuIcon: {
      fontSize: '3rem', 
      margin: '0 0.5rem 0 0',
    },
    menuItem: {
      fontSize: '2.7rem',
      fontFamily: 'Segoe UI',
      display: 'flex',
      alignItems: 'center',
      margin: '2rem 0 2rem 0',
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
      width: '8rem',  
      '&:hover': {
        backgroundColor: '#464775',
      },
    },
  };

  // <img src={logo} alt="logo" className="logo"/>

  function HomeBody() {
    return (
      <Box className="Homebody">
        <Typography sx={styles.menuItem}>
          <InfoOutlinedIcon sx={styles.menuIcon} />About
        </Typography>
        <Box className="textbox" sx={{ display: 'flex',flexDirection: 'row'}}>
          <Grid item xs={6} sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <img src={motionInputLogo} alt="logo" className="logo"style={{height:'15rem',width:'15rem'}}/>
          </Grid>
          <Grid item xs={6} sx={{ position: 'relative', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Typography sx={{fontSize: '1.5rem',fontFamily: 'Segoe UI',}}>Set up, dive into fun!<br /> <br />
              With MotionInput, by waving or jumping,<br />you can explore a new world of gaming!<br /><br />
              </Typography>
              <Box sx={{position: 'absolute', right: '11.5rem', bottom: '1.7rem'}}>
              <img src={uclLogo} alt="logo" style={{height:'1.2rem',width:'4rem',margin:'0 0'}}/>
              </Box>
              <Box sx={{position: 'absolute', right: "0.5rem", bottom: '1.5rem'}}>
              <img src={logo} alt="logo" style={{height:'1.5rem',width:'10.5rem',margin:'0 0'}}/>
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