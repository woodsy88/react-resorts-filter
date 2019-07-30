import React from 'react';
import Banner from "../components/Banner";
import HeroBanner from "../components/HeroBanner";
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <HeroBanner>
      <Banner title="404" subtitle="page not foound">
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
      </Banner>
    </HeroBanner>
  );
};

export default Error;