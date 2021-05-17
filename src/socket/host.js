const randomstring = require("randomstring");
const roomId = randomstring.generate({
    length: 6,
    charset: 'alphabetic'
  }).toUpperCase();

const host  = (socket) => (
    socket.on('host', ({userName, mode, rounds}) => {
       console.log(userName, mode, rounds, roomId) 
       socket.join(roomId)
       socket.broadcast.to(roomId).emit('message',`${userName} created a room`)
       socket.broadcast.to(roomId).emit('message',`${userName} joined`)
    })
)

module.exports = host;