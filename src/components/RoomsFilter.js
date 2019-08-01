import React from 'react';
import { useContext } from 'react';
import { RoomContext } from "../context";
import Title from "../components/Title";

// 4:06
const getUnique = (items, value) => {
  return [...new Set(items.map( item => item[value]))]
};

// 3:56
const RoomsFilter = () => {
  // 3:57 getting context using hooks
  const context = useContext(RoomContext);
  // console.log( 'context from RoomFilter component',context);
  
  const { handleChange,type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, rooms } = context;

  
// TYPES
  // get unique types
  let types = getUnique(rooms, 'type');

  // add 'all' to the array of unique values
  types = ['all', ...types];

  // map to jsx/html to render each in a option tag
  types = types.map((type,index) => {
    return <option value={type} key={index}>{type}</option>
  })

  // CAPACITY
  // get list of unique capacity ammounts - no duplicates
  let people = getUnique(rooms, 'capacity');
 
  people = people.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* TYPE OF ROOM */}
        <div className="form-group">
          <label htmlFor="type">room type</label>                            
          <select name="type" 
                  id="type" 
                  // value={type} is 'all' from state
                  value={type} 
                  className="form-control" 
                  onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* # OF GUESTS */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select 
            name="capacity"
            id="capacity"
            // value={capacity} is 1 from state
            value={capacity}
            className="form-control"
            onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* PRICE */}
        <div className="form-group">
          <label htmlFor="price"> ${price}</label>
          <input 
              type="range" 
              name="price" 
              min={minPrice} 
              max={maxPrice} 
              id="price" 
              value={price}
              onChange={handleChange}
              className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="size">Room Size</label>  
          <div className="size-inputs">
            <input type="number" 
                   name="minSize" 
                   id="size" 
                   value={minSize} 
                   onChange={handleChange} 
                   className="size-input" />
  
            <input type="number"
                  name="maxSize"
                  id="size"
                  value={maxSize}
                  onChange={handleChange}
                  className="size-input" />    
            </div>             
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" 
                   name="breakfast" 
                   id="breakfast" 
                   checked={breakfast} 
                   onChange={handleChange} />  
            <label htmlFor="breakfast">breakfast</label>
          </div>  
          <div className="single-extra">
            <input type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>            
        </div>             
      </form>
    </section>
  );
};

export default RoomsFilter;