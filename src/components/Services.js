import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends Component {
  state={
    services: [
      {
        icon: <FaCocktail/>,
        title: "free cocktails",
        info: "Et minim cillum ex cillum anim reprehenderit consequat consequat nisi exercitation enim in excepteur officia."
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info: "Et minim cillum ex cillum anim reprehenderit consequat consequat nisi exercitation enim in excepteur officia."
      },
      {
        icon: <FaShuttleVan />,
        title: "ShuttleVan",
        info: "Et minim cillum ex cillum anim reprehenderit consequat consequat nisi exercitation enim in excepteur officia."
      },
      {
        icon: <FaBeer />,
        title: "free Beer",
        info: "Et minim cillum ex cillum anim reprehenderit consequat consequat nisi exercitation enim in excepteur officia."
      },
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
              return (
                   <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                     </article>)
          })}
        </div>
      </section>
    );
  }
}

export default Services;