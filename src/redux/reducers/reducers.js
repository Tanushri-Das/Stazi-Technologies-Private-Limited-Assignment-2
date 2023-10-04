
import { combineReducers } from "redux";
import data from "../../../public/data.json";
import { LOAD_MORE_PROPERTIES, SET_ACTIVE_CITY } from "../actions/actions";

const initialState = {
  activeCity: "New York", // Default active city
  properties: data,
};

const activeCityReducer = (state = initialState.activeCity, action) => {
  switch (action.type) {
    case SET_ACTIVE_CITY:
      return action.payload;
    default:
      return state;
  }
};

const propertiesReducer = (state = initialState.properties, action) => {
  switch (action.type) {
    case LOAD_MORE_PROPERTIES:
      // Implement logic to load more properties for the active city
      return state; // Update this part

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  activeCity: activeCityReducer,
  properties: propertiesReducer,
});

export default rootReducer;
