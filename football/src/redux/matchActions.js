export const fetchMatches = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_MATCHES_REQUEST" });
    try {
      const res = await fetch(
        `https://jsonmock.hackerrank.com/api/football_matches?page=${page}`
      );
      const data = await res.json();
      dispatch({ type: "FETCH_MATCHES_SUCCESS", payload: data.data || [] });
    } catch (error) {
      dispatch({ type: "FETCH_MATCHES_FAILURE" });
    }
  };
};
