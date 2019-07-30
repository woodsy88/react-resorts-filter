import React from 'react';
import HeroBanner from "../components/HeroBanner";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
// import StyledHero from "../components/StyledHero";

const Home = () => {
  return (
    <>
      <HeroBanner>
        <Banner title="rent rooms" subtitle="delux rooms and fun times">
            <Link to="/rooms" className="btn-primary">See Rooms</Link>
        </Banner>
      </HeroBanner>
      <Services />
      <FeaturedRooms />
    </>
  );
};



export default Home;