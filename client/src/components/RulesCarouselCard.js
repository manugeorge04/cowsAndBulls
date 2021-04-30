import React from'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import {Cowputer, Herds, Bullfight} from '../utils/rulesContent'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    display:'flex',
    width: "50%",    
    height:'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],    
    top: '10%',
    left: '25%',
    [theme.breakpoints.down('sm')]: {
      width: "90%",      
      top: '15%',
      left: '5%',      
    },
  },
  content: {
    flexGrow:'2',
    padding:'2rem 0 2rem'
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  },
  Icon: {
    width: '10%',
    [theme.breakpoints.down('sm')]: {
      width: "15%",            
    },
    height: 'auto'
  }  
}));

const RulesCarouselCard = (props) => {
  const classes= useStyles()  

  return(
    <Slide direction={props.direction} in={props.in} timeout={700} mountOnEnter unmountOnExit>
    <Paper 
    variant="outlined" 
    className={classes.paper}
    >
      <IconButton 
      className={classes.button}
      onClick={props.handleOnBackClick}
      >
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>      

      <div className={classes.content}>
        {props.btnId===3 && <Cowputer />}
        {props.btnId===2 && <Bullfight/>}
        {props.btnId===1 && <Herds />}
        <Typography variant="h4" align="center" paragraph={true}>
            Enter a word and you will be told how many COWS and BULLS lie in it. Words having repeated letters will be considered invalid.
            Eg: HOOF, EYES    
        </Typography>        
        <Typography variant="h4" align="center" paragraph={true} className={classes.wrapIcon} >
          <embed  className={classes.Icon} src="images/cow.svg" />
          COW is a correct letter
          in the wrong position.
          Eg: Ans- HIDE Guess- SKIN
          I is a COW          
        </Typography>
        <Typography variant="h4" align="center"  className={classes.wrapIcon} >
        <embed  className={classes.Icon} src="images/bull.svg" /> BULL is a correct letter
          in the correct position.
          Eg: Ans- CALF Guess- MILK
          L is a BULL          
        </Typography>

      </div>        

      <IconButton 
      className={classes.button}
      onClick={props.handleOnForwardClick}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Paper>
    </Slide>
  )
}

export default RulesCarouselCard



//className={classes.wrapIcon}