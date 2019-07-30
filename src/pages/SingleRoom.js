import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
 
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
                  // react-router dom props
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }

  // access context.js
  static contextType = RoomContext;

  // componentDidMount(){}
  

  render() {
      const { getRoom } = this.context;
      const room = getRoom(this.state.slug);
    console.log('room', room); 
   

      // if room undefined
      if (!room) {
        return  (
        <div className="error">
          <h3> No room could be found</h3>
          <Link to="/rooms" className="btn-primary">Back to rooms</Link>
        </div>
        );
      } 

      const { name, description, capacity, size, price, extras, breakfast, pets, images} = room;

      const [mainImg, ...defaultImages] = images;
      console.log(mainImg)
      console.log(defaultImages)
      
      return (
        <>
          <StyledHero images={mainImg || this.state.defaultBcg}>
            <Banner title={`${name} room`}>
              <Link to="/rooms" className="btn-primary">
                Back to rooms
              </Link>
            </Banner>
          </StyledHero>
          <section className="single-room">
          <div className="single-room-images">
            {
                defaultImages.map((image, index) => <img key={index} className="thumbnail" src={image} alt={name}/>)   
            }
          </div>
          <div className="single-room-info">
            <article className="des">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity : {
                  capacity > 1 ? `${capacity} people` : `$capacity person`
                }
              </h6>
              <h6>
                { pets ? 'pets allowed' : 'pets not allowed'}
              </h6>
              <h6>
                { breakfast && 'breakfast included' }
              </h6>
            </article>
          </div>
          </section>
          <section className="room-extras">
            <h3>Extras</h3>
            <ul className="extras">
              {extras.map((extra, index) => <li key={index}> - {extra}</li> )}
            </ul>
          </section>
        </>
      )
    
  }
}

export default SingleRoom;