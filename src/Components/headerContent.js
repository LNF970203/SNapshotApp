import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

const HeaderContent = (props) => {
  const [fieldValue, SetFieldValue] = useState(null);

  const handleChange = (event) => {
    const filedValue = event.target.value;
    SetFieldValue(filedValue);
  };

  const handleClick = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <div className="container-fluid">
        <h1 className="main-heading">SnapShot</h1>
        <form className="mb-4">
          <div className="container-fluid w-75 mx-auto p-0">
            <input
              className="input-text"
              type="text"
              name="keyword"
              placeholder="Enter the Keyword"
              value={fieldValue || ""}
              onChange={handleChange}
            />
            <button 
            disabled={fieldValue ? false : true} 
            className="input-search"
            onClick={handleClick}
            >
              <FontAwesomeIcon icon="fa-magnifying-glass" />
            </button>
          </div>
        </form>
        <div id="button-holder">
          <div className="container-fluid w-75 mx-auto p-0 d-flex justify-content-between">
            <div className="button-div">
                <button className="nav-button">Mountain</button>
            </div>
            <div className="button-div">
                <button className="nav-button">Beaches</button>
            </div>
            <div className="button-div">
                <button className="nav-button">Birds</button>
            </div>
            <div className="button-div">
                <button className="nav-button">Foods</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
