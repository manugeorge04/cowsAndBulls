import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    top:'38vh',
    right:'10vh'
  },
  bottom: {
    color: '#D3D3D3',
    position: 'absolute',    
  },
  top: {
    color: theme.palette,
    animationDuration: '550ms',
    position: 'absolute',    
    animationDuration: '1550ms'
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

const FallbackCircularProgress = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={150}
        thickness={4}        
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={150}
        thickness={4}        
      />
    </div>
  );
}

export default FallbackCircularProgress