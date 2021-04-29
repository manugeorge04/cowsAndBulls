import React,{useEffect, useContext} from 'react';

import GameFilter from '../components/GameFilter';
import CreateJoinContainer from '../components/CreateJoinContainer';
import MyContext from '../context/MyContext';

const Join = () => {

  const { subHeader, setSubHeader } = useContext(MyContext);  
  useEffect(() => {
    setSubHeader("Join Page");
  }, [subHeader]);

  return (
    <div>
      <GameFilter/>
      <CreateJoinContainer type="join"/>
    </div>
  )
};

export default Join;