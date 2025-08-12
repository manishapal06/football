import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMatches } from "../redux/matchActions";

const SearchBar = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleLoad = () => {
    dispatch(fetchMatches(Number(page) || 1));
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <label>
        Page:
        <input
          type="number"
          min="1"
          value={page}
          onChange={(e) => setPage(e.target.value)}
          style={{ marginLeft: "6px", padding: "4px" }}
        />
      </label>
      <button onClick={handleLoad} style={{ marginLeft: "8px" }}>
        Load Matches
      </button>
    </div>
  );
};

export default SearchBar;
