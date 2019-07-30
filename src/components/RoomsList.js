import React from 'react';
import Rooms from '../pages/Rooms';
import Room from '../components/Room';

const RoomsList = ({rooms}) => {
  
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>no rooms matched your search</h3>
      </div>    
    )
  };
  
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
          rooms.map(item => {
            return <Room key={item.id} room={item} />;
          })
        }
      </div>
    </section>
  );
};

export default RoomsList;