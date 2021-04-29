import React, { useEffect, useContext } from 'react';

import GameFilter from '../components/GameFilter';
import MyContext from '../context/MyContext';

const Home = () => {

  const {subHeader, setSubHeader} = useContext(MyContext)
  useEffect(() => {
    setSubHeader("Home Page");
  }, [subHeader]);

  return (
    <div>
      <GameFilter/>
    </div>
  )
};

export default Home;