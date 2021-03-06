import { makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import React, { Fragment, useRef, useState } from 'react'
import InputTextBoxes from './InputTextBoxes'


const useStyles = makeStyles((theme) => ({  
  cheer: {    
    width:'90%',    
  },
  Icon: {
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: "30%",            
    },
    height: 'auto'
  },
})
)

const GameHeaderCheer = () => {
  const classes = useStyles()

  return(
    <div className="gameHeader__cheer">
      <Typography className={classes.cheer} variant="h4" align="center">
        Player,
      </Typography>
      <Typography className={classes.cheer} variant="h4" align="center">
        Your Moove!
      </Typography>
    </div>
  )
}

const GameHeaderCheerMobile = () => {
  const classes = useStyles()

  return(
    <div className="gameHeader__cheer__mobile">
      <Typography className={classes.cheer} variant="h5" align="center">
        
      </Typography>      
    </div>
  )
}

const GameHeader = () => {

  const classes = useStyles()

  const [guessWord, setGuessWord] = useState(
    {
      letter1:"",
      letter2:"",
      letter3:"",
      letter4:"",
    }
  )

  const inputRef = useRef(null)
    
  const onlyAlphabets = new RegExp(/[a-zA-Z]/);
  
  const handleOnChange = (e) => {
    let letter = e.target.value.slice(-1).toUpperCase()    
    if (letter === guessWord[e.target.id.slice(-7)]){
      letter = e.target.value[0].toUpperCase()
    }     
    if (onlyAlphabets.test(letter) || letter === "") {
      setGuessWord ({...guessWord, [e.target.id.slice(-7)]:letter})      
    }
    if (letter !== ""){
      e.target.id.slice(-7) === "letter1" ? inputRef.current.focusBox2() : e.target.id.slice(-7) === "letter2" ? inputRef.current.focusBox3() : inputRef.current.focusBox4()
    }
  }
  
  const isPC = useMediaQuery("(min-width:45rem)", {noSsr:true})
  
  return(
    <Fragment>          
    <div className="gameHeader">      
      {isPC ?<GameHeaderCheer/> : <GameHeaderCheerMobile/> }
    <div className="gameHeader__guess">          
      <InputTextBoxes    
        id = "gameHeader"     
        handleOnChange={handleOnChange}
        variant = {"standard"}
        ref = {inputRef}
        guessWord = {guessWord}
        disabled = {false}
        handleOnKeyDown = {() => {}}
      />            
    </div>  
      <div className="gameHeader__score">
        <embed  className={classes.Icon} src="images/cow.svg" />
        <embed  className={classes.Icon} src="images/bull.svg" />
      </div>
    </div>
    </Fragment>
  )  
}

export default GameHeader
