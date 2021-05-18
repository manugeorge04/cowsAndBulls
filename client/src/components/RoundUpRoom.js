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
    fontFamily: 'Comfortaa',
    fontWeight: 300
  },
  active: {
    fontWeight: 700
  }
}));

const RoundUpRoom = (props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography className={`${classes.game}`}
        variant="h4">{data}</Typography>
    </div>
  )
};

export default RoundUpRoom;
