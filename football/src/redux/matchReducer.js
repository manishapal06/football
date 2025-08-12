const initialState = {
  loading: false,
  isError: false,
  footballMatches: []
};

export const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MATCHES_REQUEST":
      return { ...state, loading: true, isError: false };
    case "FETCH_MATCHES_SUCCESS":
      return { ...state, loading: false, footballMatches: action.payload };
    case "FETCH_MATCHES_FAILURE":
      return { ...state, loading: false, isError: true };
    default:
      return state;
  }
};
