import { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";

export default function Select({ options }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const [filterValues, setFilterValues] = useState({
    specie: "",
    gender: "",
    name: "",
    status: "",
  });

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    setFilterValues({
      ...filterValues,
      status: [...selectedOptions, option].join("-"),
    });
    setSearchParams(
      serializeFilters({
        ...filterValues,
        status: [...selectedOptions, option].join("-"),
      })
    );
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
    const data = selectedOptions.filter((item) => item !== option);
    if (data.length === 1) {
      setSearchParams(serializeFilters({ ...filterValues, status: data }));
    }
    if (data.length === 0) {
      const values = filterValues;
      delete values.status;
      setSearchParams(serializeFilters({ ...values }));
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
    if (!deserializeFilters(searchParams).status) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(deserializeFilters(searchParams).status.split("-"));
    }
  }, [searchParams]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="w-full z-50 ">
      <div className="relative" ref={dropdownRef}>
        <div
          className="w-full lg:w-[200px] p-2 border rounded cursor-pointer flex justify-between items-center"
          onClick={toggleDropdown}
        >
          {selectedOptions.length === 0 ? (
            "Status..."
          ) : (
            <div className="space-x-2">
              {selectedOptions.map((option, index) => (
                <button
                  key={index}
                  className="text-sm text-gray-600 px-2 py-1 rounded"
                  onClick={() => handleRemoveOption(option)}
                >
                  {option} x
                </button>
              ))}
            </div>
          )}
          <RiArrowDownSLine />
        </div>
        {showDropdown && (
          <div className="absolute mt-2 bg-white border rounded p-2 space-y-1">
            <label className="cursor-pointer w-20">
              <input
                type="checkbox"
                checked={selectedOptions.length === options.length}
                onChange={() => {
                  if (selectedOptions.length === options.length) {
                    setSelectedOptions([]);
                  } else {
                    setSelectedOptions([...options]);
                  }
                }}
              />
              Select All
            </label>
            {options.map((option, index) => (
              <label
                key={index}
                className="cursor-pointer flex items-center justify-between"
              >
                <div>
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
