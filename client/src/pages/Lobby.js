import React,{ useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';

import RoundUpRoom from '../components/RoundUpRoom';
import LobbyCard from '../components/LobbyCard';

const Lobby = (props) =>{
  const { subHeader, setSubHeader, users } = useContext(MyContext); 

  useEffect(() => {
    setSubHeader(`Playing ${props.match.params.mode}`);
  }, [subHeader]);

  // useEffect(() => {

  // }, [users])


  return (
    <div>
      <RoundUpRoom data={'Round Up Room'}/>
      <LobbyCard players={users} mode={props.match.params.mode}/>
    </div>
  );
}

export default Lobby;
