import React from 'react';
import Header from '../components/Header';
import SideMenu_Step3 from '../components/SideMenu_Step3';
import logo from '../components/flappy-bird-logo.png';
import { Box,Grid,Typography,Button} from '@mui/material';
import {Link} from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';



function StartGame(props) {
  
    return (
      <div>
        <Header/>
        <Grid container item xs={12}>
          <Grid item xs={3}><SideMenu_Step3/></Grid>
          <Grid item xs={9}><HomeBody/></Grid>
        </Grid>
      </div> 
    );
  }
  
  export default StartGame;

  const styles = {
    homeBody:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      height: '100vh',
    },
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
      justifyContent: 'center', 
      margin:"5rem 0"  
      },
      primebutton:{
        backgroundColor:"#5B5FC7",
        color:"white",
        textTransform: "none",
        borderRadius:'1rem',
        margin:'0 0 0 0rem',
        fontSize: '1.5rem', 
        padding: '1rem', 
        height: '4rem',  
        width: '15rem',  
        '&:hover': {
          backgroundColor: '#464775',
        },
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
  };


  function HomeBody(props) {
    return (
      <Box sx={styles.homeBody}>
        <Typography sx={styles.menuItem}>
        <PlayCircleOutlineOutlinedIcon sx={styles.menuIcon} />Start
        </Typography>
        <img src={logo} alt="logo" className="logo"style={{height:'10rem',width:'30rem',margin:'3rem 0 5rem 0'}}/>
        <Button size="large" sx={styles.primebutton}>
              Start Game
        </Button>
        <Box sx={styles.buttonPosition}>
          <Grid item xs={6}>
            <Link to="/Control"><Button size="large" variant="outlined" sx={styles.secondbutton}>
              <ChevronLeftIcon sx={{margin:'0 0.5rem 0 0', padding:"0"}}/>Back
            </Button></Link>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Box>
      </Box>
    );
}