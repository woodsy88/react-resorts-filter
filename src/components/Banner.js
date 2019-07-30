import React from 'react';

const Banner = ({children, title, subtitle}) => {
  return (
    <section className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </section>
  );
};

export default Banner;