import styled from '@emotion/styled'
import { useEffect, useState } from 'react';

import { AiOutlineSearch } from "react-icons/ai"
import { useSearchParams } from 'react-router-dom';
const Container = styled.div`
  background-color: white;
  padding: 20px;

`
function Filters() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [filterValues, setFilterValues] = useState({
    specie: '',
    gender: '',
    name: '',
    status: '',
  });
  const serializeFilters = (filters) => {
    const params = new URLSearchParams();
    for (const key in filters) {
      if (filters[key]) {
        params.set(key, filters[key]);
      }
    }
    return params.toString();
  };
  const deserializeFilters = (searchParams) => {
    const filters = {};
    for (const key of searchParams.keys()) {
      filters[key] = searchParams.get(key);
    }
    return filters;
  };
  useEffect(() => {
    setFilterValues(deserializeFilters(searchParams));
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = serializeFilters(filterValues);
    setSearchParams(params);
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
    const params = serializeFilters({ ...filterValues, [name]: value });
    setSearchParams(params);
  };
  const handleInputTextChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });

  };

  return (
    <Container >

      <form 
        className='max-w-7xl flex justify-between m-auto'
        onSubmit={handleSubmit}>
          <div className='flex border border-gray-300 rounded-lg px-2 items-center'>
          
          <input 
            type="text"
            name="name"
            placeholder="Name..." 
            className="text-sm border-none  w-full max-w-xs "
            value={filterValues.name}
            onChange={handleInputTextChange}
            /> <AiOutlineSearch className="text-gray-400" size={24}/>
            </div>
          <div className='flex gap-3'>
            
            <select name="specie"
              className="select select-bordered w-full max-w-[160px]"
              value={filterValues.specie}  
              onChange={handleInputChange}
            >
              <option disabled={filterValues.gender}>Species...</option>
              <option>Cat</option>
              <option>Dog</option>
            </select>
            <select 
              name="gender"
              className="select select-bordered w-full max-w-[160px]"
              value={filterValues.gender}  
              onChange={handleInputChange}
            >
              <option disabled={filterValues.gender}>Gender...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            
          </div>
          <select 
            name="status" 
            className="select select-bordered w-full max-w-[160px]"
            value={filterValues.status}
            onChange={handleInputChange}
          >
            <option disabled={filterValues.status}>Status...</option>
            <option>Lost</option>
            <option>Found</option>
          </select>
        {/* <div className='flex items-center input gap-1 '>
        <AiOutlineSearch/>
        <input type="text" placeholder="Search by address.." className="border-none  w-full max-w-xs" /> 
        </div>
        <div className='flex gap-3'>
          
          <select name="specie"
            className="select select-bordered w-full max-w-[160px]"
            value={filterValues.specie}  
            onChange={handleInputChange}
          >
            <option disabled={filterValues.gender}>Species...</option>
            <option>Cat</option>
            <option>Dog</option>
          </select>
          <select 
            name="gender"
            className="select select-bordered w-full max-w-[160px]"
            value={filterValues.gender}  
            onChange={handleInputChange}
          >
            <option disabled={filterValues.gender}>Gender...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          
        </div> */}
        
        {/* <select 
          name="status" 
          className="select select-bordered w-full max-w-[160px]"
          value={filterValues.status}
          onChange={handleInputChange}
        >
          <option disabled={filterValues.status}>Status...</option>
          <option>Lost</option>
          <option>Found</option>
        </select> */}
      </form>
    
    </Container>
  )
}

export default Filters