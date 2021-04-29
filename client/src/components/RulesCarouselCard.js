import React from'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    display:'flex',
    width: "50%",
    height:'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],    
    top: '25%',
    left: '25%'
  },
  content: {
    flexGrow:'2',
    padding:'2rem 0 2rem'
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
          <Typography variant="h1">
            {props.btnId}
          </Typography>
          <Typography variant="h1">
            {props.btnId}
          </Typography>
          <Typography variant="h1">
            {props.btnId}
          </Typography>
          <Typography variant="h1">
            {props.btnId}
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