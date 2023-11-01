/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import Select from "../ui/Select";
const Container = styled.div`
  background-color: white;
  padding: 20px;
`;
function Filters({ setPage, setPetsData, petsData }) {
  const statusOptions = ["Lost", "Found"];
  let [searchParams, setSearchParams] = useSearchParams();
  const [filterValues, setFilterValues] = useState({
    specie: "",
    gender: "",
    name: "",
    status: "",
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
    setPage(1);
    e.preventDefault();
    console.log(filterValues)
    const params = serializeFilters(filterValues);
    setSearchParams(params);
  };

  const handleInputChange = (e) => {
    setPage(1);
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
    const params = serializeFilters({ ...filterValues, [name]: value });
    setSearchParams(params);
    console.log(
      "filter",
      petsData.filter((pet) => pet[e.target.name] === e.target.value)
    );
    setPetsData(
      petsData.filter((pet) => pet[e.target.name] === e.target.value)
    );
  };

  const handleInputTextChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  function handleReset() {
    console.log(petsData);
    setPage(1);
    setPetsData(petsData);
  }

  return (
    <Container>
      <form
        className="max-w-7xl  m-auto flex flex-col gap-2 md:flex-row md:justify-between"
        onSubmit={handleSubmit}
      >
        <div className="dropdown md: bg-red-400">
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="flex border justify-between p-2 border-gray-300 rounded-lg px-2 items-center">
          <input
            type="text"
            name="name"
            placeholder="Name..."
            className="text-sm border-none  w-full max-w-xs "
            value={filterValues.name}
            onChange={handleInputTextChange}
          />{" "}
          <AiOutlineSearch className="text-gray-400" size={24} />
        </div>
        <div className="flex justify-between gap-3">
          <select
            name="specie"
            className="select select-bordered w-full md:max-w-[160px] bg-white"
            value={filterValues.specie}
            onChange={handleInputChange}
          >
            <option disabled={filterValues.specie}>Species...</option>
            <option name="specie" value="cat">
              Cat
            </option>
            <option name="specie" value="dog">
              Dog
            </option>
          </select>

          <select
            name="gender"
            className="select select-bordered w-full md:max-w-[160px] bg-white"
            value={filterValues.gender}
            onChange={handleInputChange}
          >
            <option disabled={filterValues.gender}>Gender...</option>
            <option name="genre" value="male">
              Male
            </option>
            <option name="genre" value="female">
              Female
            </option>
          </select>
        </div>
        <Select
          className="w-full"
          options={statusOptions}
          filterValues={filterValues}
          setFilterValues={setFilterValues}
          serializeFilters={serializeFilters}
          deserializeFilters={deserializeFilters}
        />

        <button onClick={handleReset}>Reset</button>
      </form>
    </Container>
  );
}

export default Filters;
