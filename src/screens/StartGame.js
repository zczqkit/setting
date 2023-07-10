import React from 'react';
import Header from '../components/Header';
import SideMenu_Step3 from '../components/SideMenu_Step3';
import './StartGame.css';
import { Box,Grid,Typography,Button} from '@mui/material';
import {Link} from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



function StartGame() {
  
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
    menuIcon: {
      fontSize: '3rem', 
      margin: '0 0.5rem 0 0',
    },
    menuItem: {
      fontSize: '2.7rem',
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
      justifyContent: 'center', 
      marginTop:"2rem"  
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


  function HomeBody() {
    return (
      <Box className="Homebody">
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