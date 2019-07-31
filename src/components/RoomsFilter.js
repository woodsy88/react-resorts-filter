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
  console.log( 'context from RoomFilter component',context);
  
  const { handleChange,type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, rooms } = context;
  
  
  // get unique types
  let types = getUnique(rooms, 'type');
  console.log('types 1', types);
  
  // add all types (unique values)
  types = ['all', ...types];
  console.log('types 2', types);

  // map to jsx
  types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
  })

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
      <label htmlFor="type">room type</label>
      <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
      </form>
    </section>
  );
};

export default RoomsFilter;