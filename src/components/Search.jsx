import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [term, setValue] = useState(query || "");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams((prev) => ({ ...prev, q: term }));
  };
  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={term}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {query && <p>Results for {query}</p>}
    </>
  );
};

export default Search;
