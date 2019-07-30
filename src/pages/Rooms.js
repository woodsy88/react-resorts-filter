import React from 'react';
import HeroBanner from "../components/HeroBanner";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
  return (
    <>
    <HeroBanner hero="roomsHero">
      <Banner title="our rooms" subtitle="find your rooms">
        <Link to="/" className="btn-primary">Return Home</Link>
      </Banner>
    </HeroBanner>
    <RoomContainer />
    </>
  );
};

export default Rooms;