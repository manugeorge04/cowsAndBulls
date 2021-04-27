import React from 'react';

import GameFilter from '../components/GameFilter';
import CreateJoinContainer from '../components/CreateJoinContainer';

const Home = () => {
  return (
    <div>
      <GameFilter/>
      <CreateJoinContainer type="create"/>
    </div>
  )
};

export default Home;