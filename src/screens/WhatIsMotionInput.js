import React from 'react';
import Header from '../components/Header';
import SideMenuStep2 from '../components/SideMenuStep2';
import motionInputLogo from '../components/motioninput.jpg';
import { Box,Grid,Typography,Button} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {Link} from 'react-router-dom';


function WhatISMotionInput() {
  
    return (
      <div>
        <Header/>
        <Grid container item xs={12}>
          <Grid item xs={3}><SideMenuStep2/></Grid>
          <Grid item xs={9}><HomeBody/></Grid>
        </Grid>
      </div> 
    );
  }
  
  export default WhatISMotionInput;

  const styles = {
    homeBody:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      height: '100vh',
    },

    menuItem: {
      fontSize: '2.5rem',
      fontFamily: 'Segoe UI',
      display: 'flex',
      alignItems: 'center',
      margin: '2rem 0 0 0',
    },

    textBox:{
      display: 'flex',
      flexDirection: 'row',
      height:'23rem',
      width:'35rem',
    },

    description: {
      fontSize: '1.5rem',
      fontFamily: 'Segoe UI',
      margin:"0.5rem 0.5rem"
    },

    secondbutton:{
        backgroundColor:"white",
        color:"black",
        textTransform: "none",
        borderColor:"black",
        borderRadius:'1rem',
        margin:'0 0 0 0rem',
        fontSize: '1.5rem', 
        padding: '1rem', 
        height: '3rem',  
        width: '8rem',
        '&:hover': {
            borderColor:"#5B5FC7",
            color:"#5B5FC7",
            backgroundColor: 'white',
          },  
      }, 
    buttonPosition:{
      width: "35rem",
      display: 'flex', 
      flexDirection: 'row' ,
      marginTop:"3rem", 
      },
    primebutton:{
      backgroundColor:"#5B5FC7",
      color:"white",
      textTransform: "none",
      borderRadius:'1rem',
      margin:'0 0 0 0rem',
      fontSize: '1rem', 
      padding: '1rem', 
      height: '3rem',  
      width: '10rem',
      '&:hover': {
        backgroundColor: '#464775',
      },
    },
  };

  // <img src={logo} alt="logo" className="logo"/>

  function HomeBody() {
    return (
      <Box sx={styles.homeBody}>
        <Typography sx={styles.menuItem}>
            What is MotionInput ?
        </Typography>
        <Box sx={styles.textBox}>
          <Grid item xs={6} sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <img src={motionInputLogo} alt="logo" className="logo" style={{height:'15rem',width:'15rem'}}/>
          </Grid>
          <Grid item xs={6} sx={{ position: 'relative', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Typography sx={{fontSize: '1.3rem',fontFamily: 'Segoe UI',}}>Play games by moving! <br /><br />With MotionInput, moving brings games to life for an exciting,<br /> immersive experience like never before! <br />
              </Typography>
          </Grid>
        </Box>
        <Button size="large" sx={styles.primebutton}>
              Download Now
        </Button>
        
        <Box sx={styles.buttonPosition}>
          <Grid item xs={6}>
                <Grid item xs={6}>
                    <Link to="/Control">
                        <Button size="large" variant="outlined" sx={styles.secondbutton}>
                            <ChevronLeftIcon sx={{margin:'0 0.5rem 0 0', padding:"0"}}/>Back
                        </Button></Link>
                </Grid>
          </Grid>
        </Box>
      </Box>
    );
}