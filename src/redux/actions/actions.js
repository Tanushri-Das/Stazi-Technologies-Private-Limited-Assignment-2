
export const SET_ACTIVE_CITY = "SET_ACTIVE_CITY";
export const LOAD_MORE_PROPERTIES = "LOAD_MORE_PROPERTIES";

export const setActiveCity = (city) => ({
  type: SET_ACTIVE_CITY,
  payload: city,
});

export const loadMoreProperties = () => ({
  type: LOAD_MORE_PROPERTIES,
});
