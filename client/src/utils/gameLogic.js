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
    let cow = -1
    let bull = -1    

    socket.once('cowsAndBullsScore', ({cowScore, bullScore}) =>{
        cow = cowScore;
        bull = bullScore;
        updateGuesses(guessWord, cow, bull)     
        console.log("cow and bull S1 =>",cow,bull)   
        
    });
    socket.emit("newGuess", guess, roomId);

    console.log("cow and bull =>",cow,bull)    
}