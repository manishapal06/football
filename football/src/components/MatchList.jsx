import React from "react";
import { useSelector } from "react-redux";

const MatchList = () => {
  const { footballMatches, loading, isError } = useSelector((state) => state);

  if (loading) return <p>Loading matches...</p>;
  if (isError) return <p>Something went wrong!</p>;
  if (!footballMatches.length) return <p>No matches found.</p>;

  return (
    <div>
      {footballMatches.map((match, index) => (
        <div key={index} style={{
          border: "1px solid #ddd",
          padding: "8px",
          marginBottom: "8px",
          borderRadius: "4px"
        }}>
          <h4>{match.team1} vs {match.team2}</h4>
          <p>Winner: {match.winner || "N/A"}</p>
          <p>Score: {match.team1goals ?? "N/A"} - {match.team2goals ?? "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
