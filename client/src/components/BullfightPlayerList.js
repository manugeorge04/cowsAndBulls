import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: props => props.isPC ? '2rem' : '0',
    display: 'flex',
    height: '50rem',
  },
  players: {
    padding: props => props.isPC ? '3.5rem' : '4rem 3.5rem'
  },
  playerDiv: {
    width: '50%',
  }
}));

// const players = ['mahathi amencherla', "fknldgeklg"]
const BullfightPlayerList = (props) => {
  const { players, isPC } = props;
  const classes = useStyles(props);


  return (
    <div className={classes.root}>
      <div className={classes.playerDiv}>
      {players.length > 0 && players.slice(0,Math.ceil(players.length/2)).map((player, index) => (
        <Typography key={index} variant="h3" 
         className={classes.players}>{player}</Typography>
      ))}
      </div>
      <div className={classes.playerDiv}>
      {players.length > 0 && players.slice(Math.ceil(players.length/2), players.length).map((player, index) => (
        <Typography key={index} variant="h3" 
         className={classes.players}>{player}</Typography>
      ))}
      </div>
    </div>
  )
};

export default BullfightPlayerList;