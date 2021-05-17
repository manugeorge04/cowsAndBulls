const host = require('./host');
const join = require('./join');

const rootSocket = (io) => (
    io.on('connection', (socket) => {
        console.log('a user connected'); 
        host(socket)  //user hosts a game
        join(socket)  //user joins a game
    })    
)

module.exports = rootSocket;

