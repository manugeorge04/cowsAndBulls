import React, { useEffect, useContext } from 'react';
import GameHeader from '../components/GameHeader';
import MyContext from '../context/MyContext';


const Cowputer = () => {

  const {subHeader, setSubHeader} = useContext(MyContext)
  useEffect(() => {
    setSubHeader("Playing Cowputer");
  }, [subHeader]);

  return (
    <div className="container">
      <GameHeader />
    </div>
  )
};

export default Cowputer;