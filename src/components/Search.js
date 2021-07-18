import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchValue, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== undefined && searchValue !== "") {
      handleSearch(searchValue);
    } else {
      handleSearch("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
