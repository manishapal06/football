import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMatches } from "./redux/matchActions";
import SearchBar from "./components/SearchBar";
import MatchList from "./components/MatchList";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatches(1)); // Load first page initially
  }, [dispatch]);

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <h1>Football Match Tracker</h1>
      <SearchBar />
      <MatchList />
    </div>
  );
};

export default App;
