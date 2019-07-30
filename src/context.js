import React, { Component } from 'react';
import items from './data';

// https://www.youtube.com/watch?v=ScDWrogElmo&t=3023s - 1:36 mark

const RoomContext = React.createContext();

class RoomProvider extends Component {
  
  state = {
    rooms: [],
    sorted: [],
    featuredRooms: [],
    loading: true
  }

  componentDidMount(){
    // passing data from data.js as items to format the data in a more usable way
    let rooms = this.formatData(items);
    // console.table(rooms);

    let featuredRooms = rooms.filter(room => room.featured === true);

    this.setState({
      rooms, 
      featuredRooms, 
      sortedRooms: rooms, 
      loading: false
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

  
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };