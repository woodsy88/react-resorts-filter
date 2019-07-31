import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from '../components/Loading';



function RoomContainer ({ context }) {
   
  // roughly 3:40 - may have to go up and down to find
  const {loading, sortedRooms, rooms} = context;

  if (loading) {
    return <Loading />
  } else {
    return (
      <>
        Rooms Container
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
      </>
    )
  }     
}

export default withRoomConsumer(RoomContainer);


// import { RoomConsumer } from '../context';

// const RoomsContainer = () => {
//    return ( 
//    <RoomConsumer>
//       {
//         (value) => {
//           console.log('room consumer value', value);
//           const { loading, sortedRooms, rooms } = value;
          
//           if (loading) {
//             return <Loading />
//           } else {
//             return (
//               <>
//                 Rooms Container
//                 <RoomsFilter rooms={rooms} />
//                 <RoomsList rooms={sortedRooms} />
//               </>
//             )
//           }
//         }
//       }
//     </RoomConsumer>
//     )
// };

// export default RoomsContainer;