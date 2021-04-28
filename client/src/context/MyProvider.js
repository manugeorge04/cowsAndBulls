import React, {useState} from 'react';
import MyContext from './MyContext';

const MyProvider = (props) => {
    
    const [subHeader, setSubHeader] = useState("Hello")

    return (
        <MyContext.Provider
            value={{
                subHeader, setSubHeader
            }}
        >
            {props.children}    { //you can use props.children on components that represent ‘generic boxes’ 
                                 //and that don’t know their children ahead of time
                                }
        </MyContext.Provider>
    );
}


export default MyProvider