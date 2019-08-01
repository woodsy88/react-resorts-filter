import React, { Component } from 'react';
// import items from './data';
import Client from './contentful';


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

  // 5:30 - getData from contentful

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        // order: 'sys.createdAt'
        // order: '-fields.price' highest to lowest
        order: 'fields.price' //lowest to highest
      })

      // passing data from data.js as items to format the data in a more usable way
      let rooms = this.formatData(response.items);
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


    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount(){
   this.getData()
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

  // 3:53 - also 4:17 for latest code
  handleChange = (event) => {

    const target = event.target;
    // console.log('target: ', target);

    const value = target.type === "checkbox" ? target.checked : target.value;
    // console.log('value: ', value);
    // console.log(typeof value);

                  // <select name="type">
    const name = event.target.name;
    // console.log('name: ', name);
    // console.log(typeof name);
   
    
   this.setState({
    // [name] = type - check html on select name="type"
    // this is a dynamic way to update the state because the name and value are coming from variables
     [name]: value
   }, this.filterRooms)
  }

  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;
    
    let tempRooms = [...rooms];
    // console.log('tempRooms: ', tempRooms);
    
    // console.log(type);

    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type)
    }

    // console.log('tempRooms2: ', tempRooms);
    
    capacity = parseInt(capacity);
    
    if (capacity !== 1) {      
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);   
    }
    
    
    // filer by price
   if (price !== 0){ 
    price = parseInt(price);
    tempRooms = tempRooms.filter(room => room.price <= price);
  }

  if(minSize !== 0 || maxSize !== 0) {
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
  }

    // filter by breakfast
    if(breakfast) { 
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }
    // console.log('breaky', breakfast);
   

    
    
    // filter by pets
    if(pets) {
      console.log('pets ran');
      tempRooms = tempRooms.filter(room => room.pets === true)
    }

  console.log('temp final', tempRooms);

    this.setState({
      sortedRooms: tempRooms
    })
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