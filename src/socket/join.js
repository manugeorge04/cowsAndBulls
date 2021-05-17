
const join  = (socket) => (
    socket.on('join', ({userName, roomId}) => {
       console.log(userName, roomId) 
       socket.join(roomId)
       socket.broadcast.to(roomId).emit('message',`${userName} joined`)
    })
)

module.exports = join;