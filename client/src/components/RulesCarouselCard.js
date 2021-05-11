import React from'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import {Cowputer, Herds, Bullfight, ScoringRules} from '../utils/rulesContent'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    display:'flex',
    width: "50%",    
    height:'80%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],    
    top: '10%',
    left: '25%',
    [theme.breakpoints.down('sm')]: {
      width: "100%",      
      top: '10%',
      left: '0%'
    },
  },
  content: {
    flexGrow:'2',
    padding:'2rem 0 2rem'
  },
  closeButton: {
    position:'absolute',
    top:"1%",
    left:'93%',
    height:'20%',
    zIndex:'20',
    [theme.breakpoints.down('sm')]: {
      left:'86%',
    },    
  }
}));

const RulesCarouselCard = (props) => {
  const classes= useStyles()  

  return(
    <Slide
      direction={props.direction}
      in={props.in}      
      mountOnEnter
      unmountOnExit
    >
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
        <ScoringRules />
      </div>        

      <div className={classes.closeButton}>
      <IconButton color="primary" onClick={props.handleOnClose}>
        <CloseIcon fontSize="large"/>
      </IconButton>
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