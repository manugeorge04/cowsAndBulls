import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

import TeamOne from './TeamOne';
import TeamTwo from './TeamTwo';
import BullfightPlayerList from './BullfightPlayerList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: props => props.isPC ? '50%' : '90%',
    margin: '2rem auto',
    boxShadow: '0px 0px 17px 1px #1D1F26',
    backgroundColor: '#fff',
    border: '0.1rem solid #000',
    height: props => props.isPC ? '50rem' : '48rem',
    position: 'relative'
  },
  button: {
    fontSize: '2.4rem',
    width: props => props.isPC ? '15%' : '50%',
    backgroundColor: '#0b5394',
    boxShadow: '0px 0px 11px 1px #1D1F26',
    color: "#fff",
    margin: '0 auto',
    marginBottom: '1.2rem',
    fontWeight: 300,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#073763ff'
    },
  },
  cowputer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  herds: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0
  },
  teamDiv: {
    borderBottom: '0.2rem solid #000',
    display: 'flex',
  }
}));

const teamPlayers = 
["Player 1","Player 2", "Player 3", "Player 4",
"Player 5", "Player 6", "Player 7", "Player 8"]

const EachModeContent = (mode, isPC) => {

  const props = {
    isPc: isPC
  }
  const classes = useStyles(props);
  const [players, setPlayers] = useState(teamPlayers);
  const [swappableFirstItem, setSwappableFirstItem] = useState("");

  const swap = (swappableSecondItem) => {
    const firstIndex = players.indexOf(swappableFirstItem);
    const secondIndex = players.indexOf(swappableSecondItem);
    let newPlayers = [...players];
    [newPlayers[firstIndex], newPlayers[secondIndex]] = [newPlayers[secondIndex], newPlayers[firstIndex]];
    setPlayers(newPlayers)
  }

  const randomize = () => {
    let randomPlayers = [...players];
    for (let i = randomPlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomPlayers[i], randomPlayers[j]] = [randomPlayers[j], randomPlayers[i]];
    }

    setPlayers(randomPlayers)
  }


  if(mode === 'cowputer') {
    return (
      <CardContent className={classes.cowputer}>
        <Typography variant="h2">All players ready!</Typography>
        <Typography variant="h4">(It's just you)</Typography>
      </CardContent>
    )
  } else if (mode === 'herds') {
    return (
      <CardContent className={classes.herds}>
        <div className={classes.teamDiv}>
          <TeamOne teamA={players.slice(0,4)} swap={swap}
          firstSwap={setSwappableFirstItem} isPC={isPC}/>
          <TeamTwo teamB={players.slice(4,8)} swap={swap}
          firstSwap={setSwappableFirstItem} isPC={isPC}/>
        </div>
        <Button className={classes.button} onClick={randomize}
        style={{width: isPC ? '40%' : '80%', boxShadow: 'none',
        marginTop: isPC ? '2rem' : '1rem'}}>Randomize Herds</Button>
      </CardContent>
    )
  } else if (mode === 'bullfight') {
    return (
      <CardContent>
         <BullfightPlayerList players={players} isPC={isPC}/>
      </CardContent>
    )
  } else {
    return (
      <CardContent className={classes.cowputer}>
        <Typography variant="h2">Uh oh! Looks like you've navigated to a page that doesn't exist.</Typography>
        <NavLink to="/join" exact={true} 
       style={{textDecoration: 'none'}}>
         <Typography variant="h4">Go back</Typography>
         </NavLink>
      </CardContent>
    )
  }
}

const LobbyCard = (props) => {
  const { noOfPlayers, mode } = props;
  const isPC = useMediaQuery("(min-width:768px)", {noSsr:true})  
  const classes = useStyles({...props,isPC});
  

  return (
    <Fragment>
      <Card className={classes.root}>
        {EachModeContent(mode, isPC)}
      </Card>
      <Button className={classes.button}>
        Start Game</Button>
    </Fragment>
  )
};

export default LobbyCard;