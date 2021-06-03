import React, { useEffect, useContext, useState } from 'react';
import Alert from '../components/Alert';
import GameHeader from '../components/GameHeader';
import UserGuess from '../components/UserGuess';
import MyContext from '../context/MyContext';
import {hasRepeatingLetter, getCowsAndBulls} from '../utils/gameLogic'


const Cowputer = (props) => {

  const {subHeader, setSubHeader, socket, setCurrentGame, currentGame} = useContext(MyContext)

  const [alert, setAlert] = useState({open:false})  
  const [guesses,setGuesses] = useState([]) //slNo, word, bull, cow

  const handleOnClose = () => {    
    setAlert({...alert, open:false});
  };

  useEffect(() => {
    socket.emit('createWord', currentGame.roomId)
    setSubHeader(`Playing ${currentGame.mode} (${currentGame.currentRound}/${currentGame.rounds})`);
  }, [currentGame.currentRound])

  const updateGuesses = (guessWord,cowScore, bullScore) => {
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
        bull: bullScore,
        cow: cowScore
      }
    ])
    
    if(cowScore === 0 && bullScore === Object.keys(guessWord).length) {
      if(currentGame.rounds == currentGame.currentRound) {
          if(currentGame.winCount + 1 >= Math.ceil(currentGame.rounds/2)) {
              handleResults("end", true)
          } else {
              handleResults("end", false)
          }
      } else {
          setCurrentGame({
              ...currentGame, 
              currentRound: currentGame.currentRound + 1,
              winCount: currentGame.winCount + 1,
              noOfGuesses: 0,
              maxGuesses: currentGame.maxGuesses - 2
          })
          handleResults("round", true)
      }
  } else if(currentGame.noOfGuesses + 1 === currentGame.maxGuesses) {
      if(currentGame.rounds == currentGame.currentRound) {
          if(currentGame.winCount + 1 >= Math.ceil(currentGame.rounds/2)) {
              handleResults("end", true)
          } else {
              handleResults("end", false)
          }
      } else {
          setCurrentGame({
              ...currentGame, 
              currentRound: currentGame.currentRound + 1,
              noOfGuesses: 0,
              maxGuesses: currentGame.maxGuesses + 2
          })
          handleResults("round", false)
      }
  } else {
          setCurrentGame({
              ...currentGame,
              noOfGuesses: currentGame.noOfGuesses + 1
            });   
      
  }
  };

  const handleResults = (type, result) => {
    setGuesses([]);
    if(type === 'round') {

      setAlert({
        open:true,
        message: result ? 'You won this round!' : 'You lost this round!',
        severity: "info"
      })    

     } else if (type === 'end') {
      setAlert({
        open:true,
        message: result ? 'You won!' : 'You lost!',
        severity: result ? "success" : 'warning'
      })  
      // popup 

    }
  }

  const handleOnKeyDown = (guessWord) => (e) => {
    if (e.key === "Enter"){
      let word = [guessWord.letter1, guessWord.letter2, guessWord.letter3, guessWord.letter4].join("")    
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
        getCowsAndBulls(word, props.match.params.roomId, socket, 
          updateGuesses, guessWord)             
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
      {guesses.map((guess, index) =>                 
        <UserGuess
          key= {index}
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