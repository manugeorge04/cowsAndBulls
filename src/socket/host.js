const randomstring = require("randomstring");
const { initRoom, getUsersFromRoom, roomIdIsNotUnique } = require("../serverStorage/globalStorage");

const host  = (socket,io) => {
    let roomId = ""
    do {
        roomId = randomstring.generate({
        length: 6,
        charset: 'alphabetic'
      }).toUpperCase();
    }while (roomIdIsNotUnique(roomId))    

    socket.on('host', ({userName, mode, rounds}) => {
       console.log(userName, mode, rounds, roomId) 
       initRoom(roomId, rounds, mode, userName)
       socket.emit('newRoom', roomId)
       socket.join(roomId)    
       const usersList = getUsersFromRoom(roomId)   
       io.to(roomId).emit('newUser',usersList)
    })
}

module.exports = host;