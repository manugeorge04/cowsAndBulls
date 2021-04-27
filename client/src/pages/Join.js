import React from 'react';

import GameFilter from '../components/GameFilter';
import CreateJoinContainer from '../components/CreateJoinContainer';

const Join = () => {
  return (
    <div>
      <GameFilter/>
      <CreateJoinContainer type="join"/>
    </div>
  )
};

export default Join;