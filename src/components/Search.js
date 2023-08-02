import React from "react";

function Search({ hint, setHint }) {
  function handleSearch(e) {
    const inputValue = e.target.value;
    setHint(inputValue);
  }

  return (
    <div className="input-group mb-3">
      <input
        type="search"
        value={hint}
        onChange={handleSearch}
        className="form-control"
        placeholder="Search your recent transactions"
        aria-label="Search your recent transactions"
        aria-describedby="search-button"
      />
      <button
        className="btn btn-primary"
        type="button"
        id="search-button"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
