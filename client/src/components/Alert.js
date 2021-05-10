import { makeStyles } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root :{
    "& .MuiAlert-message" :{
      fontSize:'1.2rem'
    }
  }
}))


const Alert = ({severity, message, open, handleOnClose}) => {
  const classes= useStyles()

  return(
    <Snackbar open={open} autoHideDuration={5000} onClose={handleOnClose}>
      <MuiAlert className={classes.root}  severity={severity} elevation={6} variant="filled">
        {message}
      </MuiAlert>
    </Snackbar>
  )  
}

export default Alert

//onClose={handleOnClose} add this as prop to MuiAlert if you want a dedicated close button