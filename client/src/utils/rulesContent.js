import React, {Fragment} from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
  
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  },  
  Icon: {
    width: '10%',
    [theme.breakpoints.down('sm')]: {
      width: "15%",            
    },
    height: 'auto'
  },

}))

export const Cowputer = () => {return(
  <Fragment>
    <Typography variant="h1" >
       Cowputer
    </Typography>
    <Typography variant="h3" paragraph={true}>
      Friends being unreliabull!
    </Typography>
    <Typography variant="h4" align="center" paragraph={true}>
    The computer provides the 4-letter word that you, the player must guess. Guess it within 12 turns and you get the round!
    </Typography>    
  </Fragment>  
)}


export const Bullfight = () => {return(
  <Fragment>
    <Typography variant="h1" >
       Bullfight
    </Typography>
    <Typography variant="h3" paragraph={true}>
       Get ready for udder chaos!
    </Typography>
    <Typography variant="h4" align="center" paragraph={true}>
    One player selected at random provides the 4-letter word that all other players must guess. It’s a race to the finish as all the players rush to guess the word first, but be careful, each player gets 12 guesses only!
    </Typography>    
  </Fragment>  
)}


export const Herds = () => {return(
  <Fragment>
    <Typography variant="h1" >
       Herds
    </Typography>
    <Typography variant="h3" paragraph={true}>
       Time for a cowoperation!
    </Typography>
    <Typography variant="h4" align="center" paragraph={true}>
    One random player from each team provides the 4-letter word that the other team must guess. The team that guesses the answer first wins the round. Each team gets 12 guesses in total distributed equally.
    </Typography>    
  </Fragment>    
)}

export const ScoringRules = () => {
  
  const classes= useStyles()

  return(
  <Fragment>
    <Typography variant="h4" align="center" paragraph={true}>
        Enter a word and you will be told how many COWS and BULLS lie in it. Words having repeated letters will be considered invalid.
        Eg: HOOF, EYES    
    </Typography>     
    <div className={classes.wrapIcon}>
      <embed  className={classes.Icon} src="images/cow.svg" />
      <Typography variant="h4" align="center" paragraph={true}  >        
        COW is a correct letter
        in the wrong position.
        Eg: Ans- HIDE Guess- SKIN
        I is a COW          
      </Typography>
    </div>   
    <div className={classes.wrapIcon}>
      <embed  className={classes.Icon} src="images/bull.svg" /> 
      <Typography variant="h4" align="center"   >      
        BULL is a correct letter
        in the correct position.
        Eg: Ans- CALF Guess- MILK
        L is a BULL          
      </Typography>      
    </div>
  </Fragment>
)}