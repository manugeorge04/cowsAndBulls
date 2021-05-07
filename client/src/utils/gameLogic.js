import randomWords from 'random-words'

export const hasRepeatingLetter = (word) => {
    const letters = word.split("")    
    let checkArr = []    
    letters.forEach((letter) => {
        if (!checkArr.includes(letter)){
            checkArr.push(letter)  
        }                   
    })
    if (checkArr.length === letters.length)
        return (false)
    else    
        return true         
}

export const generateWord = (wordLength = 4) => {      
    let word =""
    do {
        word = randomWords({exactly: 1, maxLength: wordLength})[0]
      }
    while (word.length !== wordLength || hasRepeatingLetter(word))    
    return(word)  
}

//bull - same location; cow - letter is present
export const getCowsAndBulls = (answer, guess) => {
    guess = guess.toLowerCase()
    let cow = 0
    let bull = 0
    if (answer === guess){
        return ({
            bull:answer.length,
            cow:0
        })
    }else {   
        answer.split("").forEach((letter, index) => {
            if(letter === guess[index]){
                bull = bull + 1
            }else if(guess.split("").includes(letter)){
                cow = cow + 1
            }
        });        
        return ({
            bull,
            cow
        })
    }
}