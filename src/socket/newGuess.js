const { getAnswerWord } = require("../serverStorage/globalStorage")

const newGuess = (socket) => {
    let cowScore = 0
    let bullScore = 0
    socket.on('newGuess', (guess, roomId) => {
        console.log("newGuess")
        const answer = getAnswerWord(roomId)
        console.log("answer",answer)
        if (answer === guess){
            console.log("win")
            socket.emit('cowsAndBullsScore',{
                bullScore:answer.length,
                cowScore:0
            })
        }else {   
            console.log("else")
            answer.split("").forEach((letter, index) => {
                if(letter === guess[index]){
                    bullScore = bullScore + 1
                }else if(guess.split("").includes(letter)){
                    cowScore = cowScore + 1
                }
            });        
            console.log("else",bullScore,cowScore)
            socket.emit('cowsAndBullsScore',{bullScore, cowScore})            
        }
    })
}

module.exports = newGuess