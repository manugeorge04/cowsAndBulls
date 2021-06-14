const randomWords = require('random-words')
const { addAnswerWord } = require("../serverStorage/globalStorage");

const hasRepeatingLetter = (word) => {
    const letters = word.split("")    
    const setLetters = [...new Set(letters)]    
    return letters.length !== setLetters.length
}

const createWord = (socket) => {
    socket.on('createWord', (roomId) => {
        let word =""
        do {
            word = randomWords({exactly: 1, maxLength: 4})[0]
        }
        while (word.length !== 4 || hasRepeatingLetter(word))    
        addAnswerWord(roomId, word) 
    })
}

module.exports = createWord