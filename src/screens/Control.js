import React,{ useState }from 'react';
import Header from '../components/Header';
import SideMenu_Step2 from '../components/SideMenu_Step2';
import {Link} from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Box,Grid,Typography,Button,Switch,FormControlLabel} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import SportsMartialArtsOutlinedIcon from '@mui/icons-material/SportsMartialArtsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MouseInsructionGif from '../components/mouseInstruction.gif';
import KeyboardInsructionGif from '../components/keyboardInstruction.gif';
import MotionInputInsructionGif from '../components/motionInputInstruction.gif';


function Control() {

    return (
      <div>
        <Header/>
        <Grid container item xs={12}>
          <Grid item xs={3}><SideMenu_Step2/></Grid>
          <Grid item xs={9}><HomeBody /></Grid>
        </Grid>
      </div> 
    );
  }
  
  export default Control;

  const styles = {
    homeBody:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      height: '100vh',
    },
    
    icon: {
      fontSize: '3rem', 
      margin: '0 0.5rem 0 0',
    },

    textBox:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height:'25rem',
      width:'35rem',
      borderRadius: '20px',
      backgroundColor: '#F5F5F5',
    },

    menuItem: {
      fontSize: '2.7rem',
      fontFamily: 'Segoe UI',
      display: 'flex',
      alignItems: 'center',
      margin: '2rem 0 2rem 0',
    },

    menuText: {
        fontSize: '2rem',
        fontFamily: 'Segoe UI',
        display: 'flex',
        alignItems: 'center',
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

    primebuttonactive:{
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

    primebuttondisabled:{
      backgroundColor:"white",
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

    helpPosition:{
      display: 'flex',
      flexDirection: 'row', 
      alignItems: 'center',
      margin:'0 0 0.5rem 0',
      }
  };

  function HomeBody(props) {
  
    // 各スイッチの状態を管理するための state
    const [isMouseSwitchOn, setMouseSwitchOn] = useState(false);
    const [isKeyboardSwitchOn, setKeyboardSwitchOn] = useState(false);
    const [isMotionSwitchOn, setMotionSwitchOn] = useState(false);
  
    // Dialog の開閉状態とメッセージを管理するための state
    const [open, setOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
  
    // 開かれたダイアログがどのスイッチに関連しているかを管理するための state
    const [activeSwitch, setActiveSwitch] = useState(null);
  
    // スイッチが切り替えられたときのハンドラ
    const handleSwitchChange = (event, setSwitch, message, switchName) => {
      setSwitch(event.target.checked);
  
      // スイッチが ON になったとき、Dialog を開く
      if (event.target.checked) {
        setDialogMessage(message);
        setActiveSwitch(switchName);
        setOpen(true);
      }
    };
  
    // 「はい」ボタンが押されたときのハンドラ
    const handleYesClick = () => {
      setOpen(false);
    };
  
    // 「いいえ」ボタンが押されたときのハンドラ
    const handleNoClick = () => {
      setOpen(false);
      // 「いいえ」ボタンが押されたボタンのみをOFFに戻す
      if (activeSwitch === 'mouse') {
        setMouseSwitchOn(false);
      } else if (activeSwitch === 'keyboard') {
        setKeyboardSwitchOn(false);
      } else if (activeSwitch === 'motion') {
        setMotionSwitchOn(false);
      }
    };
  

    return (
      <Box sx={styles.homeBody}>
        <Typography sx={styles.menuItem}>
          <SportsEsportsOutlinedIcon  sx={styles.icon} />Control
        </Typography>
        <Box sx={styles.textBox}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Typography sx={styles.menuText}>
            How to play?
            </Typography>
          </Box>
          <Grid container item xs={12} >
            <Grid item xs={3} sx={styles.iconPosition}>
                <MouseOutlinedIcon sx={styles.menuIcon} />
            </Grid>
            <Grid item xs={5} sx={styles.textPosition}>
                <Typography  sx={styles.description}>Mouse</Typography>
            </Grid>
            <Grid item xs={4} sx={styles.togglebuttonPosition}>
                <Typography  sx={styles.label}>OFF</Typography>
                <FormControlLabel control={<Switch checked={isMouseSwitchOn} onChange={(e) => handleSwitchChange(e, setMouseSwitchOn, <MouseInstruction/>, 'mouse')} />}/> 
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
                <FormControlLabel control={<Switch checked={isKeyboardSwitchOn} onChange={(e) => handleSwitchChange(e, setKeyboardSwitchOn, <KeyboardInstruction/>, 'keyboard')} />}/> 
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
                    <FormControlLabel control={<Switch checked={isMotionSwitchOn} onChange={(e) => handleSwitchChange(e, setMotionSwitchOn, <MotionInputInstruction/>, 'motion')}  />}/> 
                    <Typography  sx={styles.label}>ON</Typography></Grid>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row'}} >
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={5}>
              <Link to="/WhatIsMotionInput"><Button style={{textTransform: 'none'}}>
                <Typography sx={styles.helpPosition}>
                  <HelpOutlineOutlinedIcon/> 
                  What is MotionInput ?
                </Typography>
              </Button>
              </Link>
              </Grid>
              <Grid item xs={4}>
              </Grid>
            </Box>
            <Dialog open={open} onClose={handleNoClick}>
              <DialogContent sx={{padding:"1rem 1rem 0.5rem 1rem"}}>
                <Typography>{dialogMessage}</Typography>
              </DialogContent>
              <DialogActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                < Box sx={{ display: 'flex', flexDirection: 'column'}}>
                  <Box sx={{margin:"0 0 0.5rem 0"}}>
                    <Button onClick={handleYesClick} size="large" sx={styles.primebuttonactive}>
                    Yes
                    </Button>
                  </Box>
                  <Box sx={{margin:"0.5rem 0"}}>
                    <Button onClick={handleNoClick} size="large" variant="outlined" sx={styles.secondbutton}>
                      No
                    </Button>
                  </Box>
                </Box>
              </DialogActions>
      </Dialog>
        </Box>
        <Box sx={styles.buttonPosition}>
          <Grid item xs={6}>
            <Link to="/"><Button size="large" variant="outlined" sx={styles.secondbutton}>
              <ChevronLeftIcon sx={{margin:'0 0.5rem 0 0', padding:"0"}}/>Back
            </Button></Link>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            { (isMouseSwitchOn || isKeyboardSwitchOn || isMotionSwitchOn) ? (
              (isMouseSwitchOn || isKeyboardSwitchOn) ? (
              <Link to="/Start">
                <Button size="large" sx={styles.primebuttonactive}>
                  Next<ChevronRightIcon sx={{margin:'0 0 0 0.5rem', padding:"0"}}/>
                </Button>
              </Link>
            ) : (
              <Link to="/StartMotionInput">
                <Button size="large" sx={styles.primebuttonactive}>
                  Next<ChevronRightIcon sx={{margin:'0 0 0 0.5rem', padding:"0"}}/>
                </Button>
              </Link>
               )
               ) : (
              <Button size="large" sx={styles.primebuttondisabled} disabled>
                Next<ChevronRightIcon sx={{margin:'0 0 0 0.5rem', padding:"0"}}/>
              </Button>
            )}
          </Grid>
        </Box>
      </Box>
    );
}

function MouseInstruction() {
  return (
    <Box sx={{width:'35rem'}}>
      <Typography sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center',fontSize: '1.5rem',fontFamily: 'Segoe UI'}} >
      Right-click and the bird jumps
      </Typography>
      <Box  sx={{display: 'flex',flexDirection: 'row',justifyContent: 'center',margin:'1rem 0'}}>
        <img src={MouseInsructionGif} alt="gif"style={{width: "50%"}}/>
      </Box>
      <Typography sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center',fontSize: '1.5rem',fontFamily: 'Segoe UI'}} >
        Do you use  Mouse?
      </Typography>
    </Box>
  );
}

function KeyboardInstruction() {
  return (
    <Box sx={{width:'35rem'}}>
      <Typography sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center',fontSize: '1.5rem',fontFamily: 'Segoe UI'}} >
      Click on the space button, and the bird jumps
      </Typography>
      <Box  sx={{display: 'flex',flexDirection: 'row',justifyContent: 'center',margin:'1rem 0'}}>
        <img src={KeyboardInsructionGif} alt="gif" style={{width: "50%"}}/>
      </Box>
      <Typography sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center',fontSize: '1.5rem',fontFamily: 'Segoe UI'}} >
        Do you use  Keyboard?
      </Typography>
    </Box>
  );
}

function MotionInputInstruction() {
  return (
    <Box sx={{width:'35rem'}}>
      <Typography sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center',fontSize: '1.5rem',fontFamily: 'Segoe UI'}} >
      Move your arms up and down, and the bird jumps
      </Typography>
      <Box  sx={{display: 'flex',flexDirection: 'row',justifyContent: 'center',margin:'1rem 0'}}>
        <img src={MotionInputInsructionGif} alt="gif" style={{width: "50%"}} />
      </Box>
      <Typography sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center',fontSize: '1.5rem',fontFamily: 'Segoe UI'}} >
        Do you use  MotionInput?
      </Typography>
    </Box>
  );
}

