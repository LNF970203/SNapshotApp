import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass)

const HomePage = (props) => {
  const [fieldValue, SetFieldValue] = useState(null);

  const handleChange = (event) => {
    const filedValue = event.target.value;
    SetFieldValue(filedValue);
  };

  return (
    <div>
      <h1>SnapShot</h1>
      <form>
        <input
          type="text"
          name="keyword"
          placeholder="Enter the Keyword"
          value={fieldValue || ""}
          onChange={handleChange}
        />
        <button disabled={fieldValue ? false : true}>
            <FontAwesomeIcon icon="fa-magnifying-glass" />
        </button>
      </form>
      <div>
        <button>
            Mountain
        </button>
        <button>
            Beaches
        </button>
        <button>
            Birds
        </button>
        <button>
            Foods
        </button>
      </div>
    </div>
  );
};

export default HomePage;
