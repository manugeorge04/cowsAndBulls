import React, {useState} from 'react';
import MyContext from './MyContext';

import { io } from "socket.io-client";
const socketio = io('http://localhost:3000', { transports: ['websocket', 'polling', 'flashsocket'] });  //tries these in order; whichever works.

const MyProvider = (props) => {
    
    const [subHeader, setSubHeader] = useState("Hello")
    const [socket, setSocket] = useState(socketio)   
    const [users, setUsers] = useState([])
    socket.on('newUser', (userList) => setUsers(userList))

    return (
        <MyContext.Provider
            value={{
                subHeader, setSubHeader,
                socket,
                users
            }}
        >
            {props.children}    { //you can use props.children on components that represent ‘generic boxes’ 
                                 //and that don’t know their children ahead of time
                                }
        </MyContext.Provider>
    );
}


export default MyProvider