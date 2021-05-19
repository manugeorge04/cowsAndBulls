import React, { useEffect, useContext, useState } from 'react';
import Alert from '../components/Alert';
import GameHeader from '../components/GameHeader';
import UserGuess from '../components/UserGuess';
import MyContext from '../context/MyContext';
import {hasRepeatingLetter, getCowsAndBulls} from '../utils/gameLogic'


const Cowputer = (props) => {

  const {subHeader, setSubHeader, socket} = useContext(MyContext)
  useEffect(() => {
    setSubHeader("Playing Cowputer");
  }, [subHeader]);

  const [alert, setAlert] = useState({open:false})  
  const [guesses,setGuesses] = useState([]) //slNo, word, bull, cow
  const handleOnClose = () => {    
    setAlert({...alert, open:false});
  };

  const updateGuesses = (guessWord,cow, bull) => {
    setGuesses([
      ...guesses,
      {
        slNo: guesses.length + 1,
        word: {
          letter1 : guessWord.letter1,
          letter2 : guessWord.letter2,
          letter3 : guessWord.letter3,
          letter4 : guessWord.letter4,
        },
        bull: bull,
        cow: cow
      }
    ])
  }

  const handleOnKeyDown = (guessWord) => (e) => {
    if (e.key === "Enter"){
      let word = [guessWord.letter1, guessWord.letter2, guessWord.letter3, guessWord.letter4].join("")
      console.log(word)
      console.log([guessWord.letter1, guessWord.letter2, guessWord.letter3, guessWord.letter4].join("").length)
      console.log(word.includes(" ") , (word.length < 4), word.length)
      if (word.includes(" ") || (word.length<4)){        
        setAlert({
          open:true,
          message: "Please enter a 4 letter word",
          severity: "error"
        })        
      }else if (hasRepeatingLetter(word)) {
        setAlert({
          open:true,
          message: "Please enter a word with non-repeating characters",
          severity: "error"
        })        
      }else{
        getCowsAndBulls(word, props.match.params.roomId, socket, updateGuesses, guessWord)                
      }
    }
  }

  const emptyGuess = {
    letter1:"",
    letter2:"",
    letter3:"",
    letter4:"",
  }

  return (
    <div className="container">
      <GameHeader />  
      {guesses.map((guess) =>                 
        <UserGuess
          key= {guess.slNo}
          slNo = {guess.slNo}          
          word = {guess.word}
          bull = {guess.bull}
          cow = {guess.cow}
          disabled = {true}
        />
      )}    
      <UserGuess
        key={guesses.length+1}
        slNo = {guesses.length+1}
        handleOnKeyDown = {handleOnKeyDown}
        word = {emptyGuess}
        bull = {""}
        cow = {""}
        disabled = {false}
      />
    <Alert severity={alert.severity} message = {alert.message} open={alert.open} handleOnClose={handleOnClose}/>
    </div>
  )
};

export default Cowputer;