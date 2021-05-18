const initRoom = (roomId, rounds, mode, creator) => {
    gameStorage = {
        ...gameStorage,
        [roomId]: {
            rounds,
            mode,
            users:[creator]
        }
    }       
}

const addUserToRoom = (roomId, userName) => {
    gameStorage[roomId].users.push(userName)    
}

const getUsersFromRoom = (roomId) => gameStorage[roomId].users;

const getModeOfRoom = (roomId) => gameStorage[roomId].mode;

const roomIdIsNotUnique = (roomId) => Object.keys(gameStorage).includes(roomId)


module.exports = {
    initRoom,
    addUserToRoom,
    getUsersFromRoom,
    getModeOfRoom,
    roomIdIsNotUnique,

}
