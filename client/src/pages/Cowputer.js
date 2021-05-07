import React, { useEffect, useContext, useState } from 'react';
import GameHeader from '../components/GameHeader';
import UserGuess from '../components/UserGuess';
import MyContext from '../context/MyContext';
import {hasRepeatingLetter, generateWord, getCowsAndBulls} from '../utils/gameLogic'


const Cowputer = () => {

  const {subHeader, setSubHeader} = useContext(MyContext)
  useEffect(() => {
    setSubHeader("Playing Cowputer");
  }, [subHeader]);

  const [answerWord, setAnswerWord] = useState(generateWord())
  const [guesses,setGuesses] = useState([]) //slNo, word, bull, cow
  
  const handleOnKeyDown = (guessWord) => (e) => {
    if (e.key === "Enter"){
      let word = [guessWord.letter1, guessWord.letter2, guessWord.letter3, guessWord.letter4].join("")
      let {bull, cow} = getCowsAndBulls(answerWord, word)
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
  }

  const emptyGuess = {
    letter1:" ",
    letter2:" ",
    letter3:" ",
    letter4:" ",
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
    </div>
  )
};

export default Cowputer;