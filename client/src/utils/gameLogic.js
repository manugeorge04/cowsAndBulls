import { useContext } from "react"
import MyContext from "../context/MyContext"

export const hasRepeatingLetter = (word) => {
    const letters = word.split("")    
    const setLetters = [...new Set(letters)]    
    return letters.length !== setLetters.length
}

//bull - same location; cow - letter is present
export const getCowsAndBulls = (guess, roomId, socket, updateGuesses, guessWord) => {    
    guess = guess.toLowerCase()    

    socket.once('cowsAndBullsScore', ({cowScore, bullScore}) =>{        
        updateGuesses(guessWord, cowScore, bullScore)     
        console.log("cow and bull S1 =>",cowScore,bullScore)   
        
    });
    socket.emit("newGuess", guess, roomId);    
}