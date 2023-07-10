import React from 'react';
import Header from '../components/Header';
import SideMenu_Step3 from '../components/SideMenu_Step3';
import './StartGameMotionInput.css';
import goodplayexample from '../components/goodplayexample.png';
import badplayexample from '../components/badplayexample.png';
import { Box,Grid,Typography,Button} from '@mui/material';
import {Link} from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';



function StartGameMotionInput() {
  
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
  
  export default StartGameMotionInput;

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
      justifyContent: 'center', 
      margin:"3rem 0"  
      },
      primebutton:{
        backgroundColor:"#5B5FC7",
        color:"white",
        textTransform: "none",
        borderRadius:'1rem',
        margin:'0 0 2rem 0',
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
      <Box className="Homebody">
        <Typography sx={styles.menuItem}>
        <PlayCircleOutlineOutlinedIcon sx={styles.menuIcon} />Start
        </Typography>
       <Box className="textbox" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
       <Typography sx={styles.description}>
        Play and show whole body on the screen
       </Typography>
        <Box sx={{ display: 'flex',flexDirection: 'row'}}>
          <Grid item xs={6} sx={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <CheckCircleOutlineOutlinedIcon sx={{fontSize: '3rem', color:'green',margin:'1rem 0 0 0'}}/>
            <img src={goodplayexample} style={{height:'10rem',width:'15rem',margin:'1rem 0 2rem 0'}}/>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <NotInterestedOutlinedIcon  sx={{fontSize: '3rem', color:'red',margin:'1rem 0 0 2rem'} } />
            <img src={badplayexample} style={{height:'10rem',width:'15rem',margin:'1rem 0 2rem 2rem'}}/>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
          <Button size="large" sx={styles.primebutton}>
              Start Game
        </Button>
        </Box>
        </Box>
        
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