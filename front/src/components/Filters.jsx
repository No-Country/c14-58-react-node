import styled from '@emotion/styled'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
const Container = styled.div`
  background-color: white;
  padding: 20px;

`
function Filters() {
  return (
    <Container >
      <div className='max-w-7xl flex justify-between m-auto'>
        <div className='flex items-center input gap-1 '>
        <AiOutlineSearch/>
        <input type="text" placeholder="Search by address.." className="border-none  w-full max-w-xs" /> 
        </div>
          <div className='flex gap-3'>
          
          <select className="select select-bordered w-full max-w-[160px]">
            <option disabled selected>Species...</option>
            <option>Gato</option>
            <option>Perro</option>
          </select>
          <select className="select select-bordered w-full max-w-[160px]">
            <option disabled selected>Gender...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <div className='flex items-center input gap-1 p-1'>
          <AiOutlineSearch/>
          <input type="text" placeholder="Name..." className="text-sm border-none  w-full max-w-xs " /> 
          </div>
        </div>
        <select className="select select-bordered w-full max-w-[160px]">
            <option disabled selected>Status...</option>
            <option>Lost</option>
            <option>Found</option>
          </select>
      </div>
    
    </Container>
  )
}

export default Filters