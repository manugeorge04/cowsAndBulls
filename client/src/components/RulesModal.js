import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


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
    flexGrow:'2'    
  }  
}));

const RulesModal = (props) => {  
  const classes = useStyles();
  const [btnId, setBtnId] = useState(0)

  useEffect(() => {
    console.log("Hi")
    setBtnId(props.Open_BtnId.btnId)
  },[props.Open_BtnId.btnId])  

  return(
    <Modal
      open={props.Open_BtnId.open}
      onClose={props.handleOnClose}      
    >
      <Paper 
      variant="outlined" 
      className={classes.paper}
      >
        <IconButton className={classes.button}>
            <ArrowBackIosIcon fontSize="large" />
        </IconButton>      
          <div className={classes.content}>
            <Typography variant="h1">
              {btnId}
            </Typography>
            <Typography variant="h1">
              {btnId}
            </Typography>
            <Typography variant="h1">
              {btnId}
            </Typography>
            <Typography variant="h1">
              {btnId}
            </Typography>
          </div>        
        <IconButton className={classes.button}>
            <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Paper>
    </Modal>
  )
}

export default RulesModal