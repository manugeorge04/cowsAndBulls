import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
    display: 'flex',
    height: '50rem',
  },
  team: {
    backgroundColor: '#f3f3f3ff',
    padding: '1.5rem'
  },
  players: {
    padding: '3.5rem'
  },
  playerDiv: {
    width: '50%',
  }
}));


const BullfightPlayerList = (props) => {
  const { players } = props;
  const classes = useStyles();


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