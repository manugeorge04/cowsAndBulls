import React,{ useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';

import RoundUpRoom from '../components/RoundUpRoom';
import LobbyCard from '../components/LobbyCard';

const Lobby = (props) =>{
  const { subHeader, setSubHeader } = useContext(MyContext); 

  useEffect(() => {

    setSubHeader(`Playing ${props.match.params.mode}`);

  }, [subHeader]);


  return (
    <div>
      <RoundUpRoom data={'Round Up Room'}/>
      <LobbyCard noOfPlayers={1} mode={props.match.params.mode}/>
    </div>
  );
}

export default Lobby;