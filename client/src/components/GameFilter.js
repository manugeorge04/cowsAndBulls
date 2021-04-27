import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    borderBottom: '0.1rem solid #000'
  },
  game: {
    padding: '0.8rem',
    color: '#000',
    marginBottom: '1.2rem',
    fontFamily: 'Comfortaa',
    fontWeight: 300
  },
  active: {
    fontWeight: 700
  }
}));

const GameFilter = () => {
  const classes = useStyles();

  const url = window.location.href.replace(/\/$/, '');

  return (
    <div className={classes.root}>
      <NavLink to="/" exact={true} 
       style={{textDecoration: 'none'}}>
        <Typography className={url.substr(url.lastIndexOf('/') + 1) === '#' ? `${classes.game} ${classes.active}` : `${classes.game}`}
        style={{borderRight: '0.1rem solid #000', paddingRight: '1.2rem'}}
        variant="h4">Create Game</Typography>
      </NavLink>
      <NavLink to="/join" 
      style={{textDecoration: 'none'}}>
        <Typography className={url.substr(url.lastIndexOf('/') + 1) === 'join' ? `${classes.game} ${classes.active}` : `${classes.game}`} style={{paddingLeft: '1.2rem'}}
        variant="h4">Join Game</Typography>
      </NavLink>
    </div>
  )
};

export default GameFilter;
