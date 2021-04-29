import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Button, Icon, makeStyles} from "@material-ui/core";


const useStyles = makeStyles(() => ({
    root: {
        textTransform: 'none',
        backgroundColor: '#a8a8a8',
        '& .MuiButton-label': {
            fontSize:'1.2rem',
            fontWeight:'bold'
        }
    }
}))

const Footer = () => {
  const BehanceIcon = (
    <Icon>
      <img className='behanceImage' src="images/behance.svg" />
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
        className={classes.root}
        startIcon={<GitHubIcon />}
      >
      Mahathi Amencherla</Button>
      <Button
        target="_blank" 
        href="https://github.com/manugeorge04"
        variant="contained"   
        disableElevation={true}   
        className={classes.root}
        startIcon={<GitHubIcon />}
      >
      Manu George</Button>
      <Button
        target="_blank" 
        href="https://behance.net/rn15"
        variant="contained"   
        disableElevation={true} 
        className={classes.root}
        startIcon={BehanceIcon}
      >
      Rahul Nagaraj</Button>
    </div>
  )
};

export default Footer;
