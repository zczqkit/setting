import React,{ useState }from 'react';
import Header from '../components/Header';
import SideMenu_Step2 from '../components/SideMenu_Step2';
import Switches from '../components/Switches';
import './Control.css';
import {Link} from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
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
    primebuttonactive:{
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
      <Box className="Homebody">
        <Typography sx={styles.menuItem}>
          <SportsEsportsOutlinedIcon  sx={styles.icon} />Control
        </Typography>
        <Typography sx={styles.menuText}>
          How to play ?
        </Typography>
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
                <FormControlLabel control={<Switch checked={isMouseSwitchOn} onChange={(e) => handleSwitchChange(e, setMouseSwitchOn, 'Mouse switch message', 'mouse')} />}/> 
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
                <FormControlLabel control={<Switch checked={isKeyboardSwitchOn} onChange={(e) => handleSwitchChange(e, setKeyboardSwitchOn, 'Keyboard switch message', 'keyboard')} />}/> 
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
                    <FormControlLabel control={<Switch checked={isMotionSwitchOn} onChange={(e) => handleSwitchChange(e, setMotionSwitchOn, 'Motion switch message', 'motion')}  />}/> 
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
            <Dialog open={open} onClose={handleNoClick}>

              <DialogTitle>{"注意"}</DialogTitle>

              <DialogContent>
                <Typography>{dialogMessage}</Typography>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleYesClick} color="primary">
                  はい
                </Button>
                <Button onClick={handleNoClick} color="primary">
                  いいえ
                </Button>
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
              <Link to="/">
                <Button size="large" sx={styles.primebuttonactive}>
                  Next<ChevronRightIcon sx={{margin:'0 0 0 0.5rem', padding:"0"}}/>
                </Button>
              </Link>
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
