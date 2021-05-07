import { makeStyles, Typography } from '@material-ui/core'
import React, { useState, useRef, Fragment, useEffect } from 'react'
import InputTextBoxes from './InputTextBoxes'


const useStyles = makeStyles((theme) => ({
  slNo: {    
    width:'90%',    
  },
}))

const UserGuess = ({slNo, handleOnKeyDown,disabled , word, bull, cow }) => {

  const [guessWord, setGuessWord] = useState(word)
  
  const guessRef = useRef(null)
    
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
      e.target.id.slice(-7) === "letter1" ? guessRef.current.focusBox2() : e.target.id.slice(-7) === "letter2" ? guessRef.current.focusBox3() : guessRef.current.focusBox4()
    }
  }  

  useEffect(() => {
    guessRef.current.focusBox1()
    guessRef.current.scrollToEnd()
  },[])

  const classes = useStyles()

  return(
    <div className = "gameBody">
      <div className="slNo">
        <Typography className={classes.slNo} variant="h4" align="center">
          {slNo}
        </Typography>
      </div>      
      <div className="userGuess">
        <InputTextBoxes                      //new user input
          id = {slNo}     
          handleOnChange={handleOnChange}
          variant = {"outlined"}
          ref = {guessRef}
          guessWord = {guessWord}
          disabled = {disabled}
          handleOnKeyDown = {(e) => handleOnKeyDown(guessWord)(e)}
        />       
      </div>

      <div className = "cowScore">
        <Typography className={classes.slNo} variant="h4" align="center">
          {cow}
        </Typography>
      </div>
      <div className = "bullScore">
        <Typography className={classes.slNo} variant="h4" align="center">
          {bull}
        </Typography>
      </div>
    </div>

  )
}

export default UserGuess