const host = require('./host');
const join = require('./join');
const createWord = require('./createWord');
const newGuess = require('./newGuess');

const rootSocket = (io) => (
    io.on('connection', (socket) => {
        console.log('a user connected'); 
        host(socket,io)  //user hosts a game
        join(socket,io)  //user joins a game
        createWord(socket)
        newGuess(socket)
    })    
)

module.exports = rootSocket;

