const { addUserToRoom, getUsersFromRoom, getModeOfRoom } = require("../serverStorage/globalStorage")

const join  = (socket,io) => (
    socket.on('join', ({userName, roomId}) => {
       console.log("In join Socket",userName, roomId) 
       addUserToRoom(roomId, userName)
       socket.join(roomId)
       const usersList = getUsersFromRoom(roomId)
       socket.emit('joinRoom', getModeOfRoom(roomId))
       io.to(roomId).emit('newUser',usersList)
    })
)

module.exports = join;