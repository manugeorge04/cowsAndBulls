import React, {useContext} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Button, Icon, makeStyles} from "@material-ui/core";
import MyContext from '../context/MyContext';



const useStyles = makeStyles(() => ({
    root: {
        textTransform: 'none',
        background: 'transparent',
        '& .MuiButton-label': {
            fontSize:'1.2rem',
            fontWeight:'bolder',
            color: 'black'            
        }
    },
    rootError: {
      textTransform: 'none',
      background: 'transparent',
      '& .MuiButton-label': {
          fontSize:'1.2rem',
          fontWeight:'bolder',
          color: 'white'            
      }
  }
}))

const Footer = () => {

  const {subHeader} = useContext(MyContext)

  const BehanceIcon = (
    <Icon>
      <img className='behanceImage' src={subHeader==='Error Page'? "images/behance-white.png": "images/behance.svg"} />
    </Icon>
  );

  const classes = useStyles()    
    
  return (
    <div className='footer'>
      <Button
        target="_blank" 
        href="https://github.com/mahathiamencherla"
        variant="contained"  
        disableElevation={true}
        className={subHeader === 'Error Page'?classes.rootError:classes.root}
        startIcon={<GitHubIcon />}
      >
      Mahathi Amencherla</Button>
      <Button
        target="_blank" 
        href="https://github.com/manugeorge04"
        variant="contained"   
        disableElevation={true}   
        className={subHeader === 'Error Page'?classes.rootError:classes.root}
        startIcon={<GitHubIcon />}
      >
      Manu George</Button>
      <Button
        target="_blank" 
        href="https://behance.net/rn15"
        variant="contained"   
        disableElevation={true} 
        className={subHeader === 'Error Page'?classes.rootError:classes.root}
        startIcon={BehanceIcon}
      >
      Rahul Nagaraj</Button>
    </div>
  )
};

export default Footer;

