import React from 'react';
import Header from '../components/Header';
import SideMenu_Step2 from '../components/SideMenu_Step2';
import Switches from '../components/Switches';
import './Control.css';
import {Link} from 'react-router-dom';
import { Box,Grid,Typography,Button,Switch,FormControl,FormControlLabel} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';


function Control() {
  
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
  
  export default Control;

  const styles = {
    icon: {
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
    menuText: {
        fontSize: '2rem',
        fontFamily: 'Segoe UI',
        display: 'flex',
        alignItems: 'center',
        margin: '0 0 0.5rem 0',
      },
    iconPosition:{
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center',
      },
    menuIcon: {
        fontSize: '2.5rem', 
        margin: '0 0 0 0',
      },

    textPosition:{
        display: 'flex',
        flexDirection: 'row',  
        alignItems: 'center'
      },  

    description: {
        fontSize: '2rem',
        fontFamily: 'Segoe UI', 
        display: 'flex',
        alignItems: 'center',
    },
    label: {
        fontSize: '1rem',
        fontFamily: 'Segoe UI', 
        display: 'flex',
        alignItems: 'center',
        margin: '0 2rem 0 0',
    },
    togglebuttonPosition:{
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center',
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
    secondbutton:{
      backgroundColor:"white",
      color:"black",
      textTransform: "none",
      borderColor:"#E0E0E0",
      borderRadius:'1rem',
      margin:'0 0 0 0rem',
      fontSize: '1.5rem', 
      padding: '1rem', 
      height: '3rem',  
      width: '8rem'  
    },
    helpPosition:{
      display: 'flex',
      flexDirection: 'row', 
      alignItems: 'center',
      margin:'0 0 0.5rem 0',
      }
  };

  function HomeBody() {
    return (
      <Box className="Homebody">
        <Typography sx={styles.menuItem}>
          <SportsEsportsOutlinedIcon  sx={styles.icon} />Control
        </Typography>
        <Typography sx={styles.menuText}>
          How to play ?
        </Typography>
        {/* <Box className="textbox" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}} > */}
        <Box className="textbox" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}  >
          <Grid container item xs={12} >
            <Grid item xs={3} sx={styles.iconPosition}>
                <MouseOutlinedIcon sx={styles.menuIcon} />
            </Grid>
            <Grid item xs={5} sx={styles.textPosition}>
                <Typography  sx={styles.description}>Mouse</Typography>
            </Grid>
            <Grid item xs={4} sx={styles.togglebuttonPosition}>
                <Typography  sx={styles.label}>OFF</Typography>
                <FormControlLabel control={<Switch />}/> 
                <Typography  sx={styles.label}>ON</Typography>
            </Grid>
            <Grid item xs={3} sx={styles.iconPosition}>
                <KeyboardOutlinedIcon sx={styles.menuIcon} />   
            </Grid>
            <Grid item xs={5} sx={styles.textPosition}>
              <Typography  sx={styles.description}>Keyboard</Typography>
            </Grid>
            <Grid item xs={4} sx={styles.togglebuttonPosition}>
              <Typography  sx={styles.label}>OFF</Typography>
                <FormControlLabel control={<Switch />}/> 
                <Typography  sx={styles.label}>ON</Typography>
            </Grid>
            <Grid item xs={3} sx={styles.iconPosition}>
              <SportsMartialArtsOutlinedIcon sx={styles.menuIcon} />
            </Grid>
            <Grid item xs={5} sx={styles.textPosition}>
              <Typography  sx={styles.description}>
                Motion Input
              </Typography>
            </Grid>
            <Grid item xs={4} sx={styles.togglebuttonPosition}><Typography  sx={styles.label}>OFF</Typography>
                    <FormControlLabel control={<Switch />}/> 
                    <Typography  sx={styles.label}>ON</Typography></Grid>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row'}} >
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={styles.helpPosition}>
                  <HelpOutlineOutlinedIcon/> 
                  What is Motion Input ?
                </Typography>
              </Grid>
              <Grid item xs={4}>
              </Grid>
            </Box>
        </Box>
        <Box sx={styles.buttonPosition}>
          <Grid item xs={6}>
            <Link to="/"><Button size="large"  variant="outlined" sx={styles.secondbutton}>
            <ChevronLeftIcon sx={{margin:'0 0.5rem 0 0', padding:"0"}}/>Back
            </Button></Link>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/"><Button size="large" sx={styles.primebutton}>
              Next<ChevronRightIcon sx={{margin:'0 0 0 0.5rem', padding:"0"}}/>
            </Button></Link>
          </Grid>
        </Box>
      </Box>
    );
}
