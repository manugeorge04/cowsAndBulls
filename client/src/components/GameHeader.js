import { makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'


const useStyles = makeStyles((theme) => ({
  textbox:{
    margin: theme.spacing(1),    
    width: '5rem',
    height:'5rem' ,   
    textAlign: 'center',
    '& .MuiInputBase-input':{
      fontSize: '3rem',     
      paddingLeft: '1.5rem' 
    },
    '& .MuiInputBase-root':{
      height:'5rem'      
    }     
  },
  cheer: {    
    width:'90%',    
  },
  Icon: {
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: "30%",            
    },
    height: 'auto'
  },
})
)

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

  const letter2Ref = useRef(null)
  const letter3Ref = useRef(null)
  const letter4Ref = useRef(null)
  const onlyAlphabets = new RegExp(/[a-zA-Z]/);
  
  const handleOnChange = (e) => {
    let letter = e.target.value.slice(-1).toUpperCase()    
    if (letter === guessWord[e.target.id]){
      letter = e.target.value[0].toUpperCase()
    }     
    if (onlyAlphabets.test(letter)) {
      setGuessWord ({...guessWord, [e.target.id]:letter})
      e.target.id === "letter1" ? letter2Ref.current.focus() : e.target.id === "letter2" ? letter3Ref.current.focus() : letter4Ref.current.focus()
    }
  }

  return(
    <div className="gameHeader">
      <div className="gameHeader__cheer">
        <Typography className={classes.cheer} variant="h5" align="center">
          Player,
        </Typography>
        <Typography className={classes.cheer} variant="h5" align="center">
          Your Moove!
        </Typography>
      </div>
      <div className="gameHeader__guess">
        <TextField   className={classes.textbox}
          id = "letter1"
          value = {guessWord.letter1}
          onChange = {handleOnChange}          
        />
        <TextField   className={classes.textbox}
          id = "letter2"
          value = {guessWord.letter2}
          onChange = {handleOnChange}
          inputRef	= {letter2Ref}
        />
        <TextField   className={classes.textbox}
          id = "letter3"
          value = {guessWord.letter3}
          onChange = {handleOnChange}
          inputRef	= {letter3Ref}
        />
        <TextField   className={classes.textbox}
          id = "letter4"
          value = {guessWord.letter4}
          onChange = {handleOnChange}
          inputRef	= {letter4Ref}
        />                
      </div>
      <div className="gameHeader__score">
        <embed  className={classes.Icon} src="images/cow.svg" />
        <embed  className={classes.Icon} src="images/bull.svg" />
      </div>
    </div>
  )  
}

export default GameHeader
