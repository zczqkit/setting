import React from 'react';
import Header from '../components/Header';
import SideMenu_Step1 from '../components/SideMenu_Step1';
import logo from '../components/flappy-bird-logo.png';
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
      margin: '0 0 1rem 0',
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

  const description = "tsed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu"

  function HomeBody() {
    return (
      <Box className="Homebody">
        <Typography sx={styles.menuItem}>
          <InfoOutlinedIcon sx={styles.menuIcon} />About
        </Typography>
        <img src={logo} alt="logo" className="logo"/>
        <Box className="textbox">
          <Typography  sx={styles.description}>
            {description}
          </Typography>
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