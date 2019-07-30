import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

const RoomsContainer = () => {
  return (
    <>
      <RoomsFilter/>
      <RoomsList/>
    </>
  );
};

export default RoomsContainer;