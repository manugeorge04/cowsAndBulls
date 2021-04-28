import React,{useEffect, useContext} from 'react';

import GameFilter from '../components/GameFilter';
import MyContext from '../context/MyContext';

const Join = () => {

  const { subHeader, setSubHeader } = useContext(MyContext);  
  useEffect(() => {
    setSubHeader("Join Page");
  }, [subHeader]);

  return (
    <div>
      <GameFilter/>
    </div>
  )
};

export default Join;