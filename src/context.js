import React, { Component } from 'react';
import items from './data';

// https://www.youtube.com/watch?v=ScDWrogElmo&t=3023s - 1:36 mark

const RoomContext = React.createContext();

class RoomProvider extends Component {
  
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  }

  componentDidMount(){
    // passing data from data.js as items to format the data in a more usable way
    let rooms = this.formatData(items);
    // console.table(rooms);

    let featuredRooms = rooms.filter(room => room.featured === true);

    let maxPrice = Math.max(...rooms.map(room => room.price));
   
    let maxSize = Math.max(...rooms.map(room => room.size));
   
    
    this.setState({
      rooms, 
      featuredRooms, 
      sortedRooms: rooms, 
      loading: false,
      maxPrice,
      maxSize
    })
    
  }

  // this formats the data from data.js in a more useable way and returns each room in an object
  formatData (items){
    let tempItems = items.map((item) => {
      
      let id = item.sys.id;

      let images = item.fields.images.map(image => image.fields.file.url);
      
      let room = {...item.fields, images, id};

      return room;
    });

    return tempItems;
  }


  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
  
    const room = tempRooms.find(room => room.slug === slug);
    
    return room;  
  }

  // 3:53
  handleChange = (event) => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type, name, value); 
  }

  filterRooms = () => {
    console.log("hello");
    
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, 
                                      getRoom: this.getRoom,
                                      handleChange: this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// 3:36 min - for functional components - higher order component means it returns another component
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
    <RoomConsumer>
      {value => <Component {...props} context={value} />}
    </RoomConsumer>
    )
  }
}

export { RoomProvider, RoomConsumer, RoomContext };