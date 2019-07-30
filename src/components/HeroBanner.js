import React from 'react';

const HeroBanner = ({ children, hero }) => {
  return (
    <>
      <header className={hero}>
        {children}
      </header>    
      
    </>
  );
};

HeroBanner.defaultProps = {
  hero: "defaultHero"
}

export default HeroBanner;