import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
    top:'38vh',
    right:'10vh'
  },
  bottom: {
    color: '#a6a6a6ff',
    position: 'absolute',    
  },
  top: {
    color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',    
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

const FallbackCircularProgress = (props) => {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={150}
        thickness={4}
        {...props}
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
        {...props}
      />
    </div>
  );
}

export default FallbackCircularProgress