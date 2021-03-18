import { SHOW_HOUSES, ADD_HOUSE, DELETE_HOUSE } from "../actions/types";

const initialState = { loading: true, houses: { results: {} } };

function handleReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_HOUSES:
      return { ...state, loading: false, houses: action.payload };
    case ADD_HOUSE:
    case DELETE_HOUSE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
export default handleReducer;
