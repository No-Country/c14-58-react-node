import { useState, useEffect, useRef } from "react";
import {RiArrowDownSLine} from "react-icons/ri"

export default function Select({ options, setSearchParams }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    
    const statusParams = selectedOptions.join(";");
    setSearchParams({ status: statusParams });
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
    <div className="max-w-lg z-50 ">
      <div className="relative" ref={dropdownRef}>
        <div
          className="p-2 border rounded cursor-pointer flex justify-between items-center"
          style={{ width: "200px" }}
          onClick={toggleDropdown}
        >
          {selectedOptions.length === 0 ? "Select options..." : (
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
              <label key={index} className="cursor-pointer flex items-center justify-between">
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
