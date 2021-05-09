import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '22.5rem',
    width: '50%',
    borderRight: '0.2rem solid #000',
    height: '40rem',
    padding: '2rem',
    position: 'relative'
  },
  team: {
    backgroundColor: '#f3f3f3ff',
    padding: '1.5rem'
  },
  players: {
    padding: '2rem'
  },
  playerDiv: {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));


const TeamOne = (props) => {
  const { teamA, swap, firstSwap } = props;
  const classes = useStyles();

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragStart = (e, player) => {
    firstSwap(player);
  }

  const drop = (e, val) => {
    swap(val);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.team}
      >Team A</Typography>
       <div className={classes.playerDiv}
       >
        {teamA.length > 0 && teamA.map((player, index) => (
        <Typography key={index} variant="h4" draggable
        onDragOver={(e)=> dragOver(e)}
       onDrop={(e) => drop(e,player)}
        onDragStart={(e) => dragStart(e, player)}
         className={classes.players}>{player}</Typography>
      ))}
      </div>
    </div>
  )
};

export default TeamOne;