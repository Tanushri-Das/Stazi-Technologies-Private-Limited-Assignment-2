// src/redux/store.js
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  // Add any middleware or enhancers if needed
);

export default store;
