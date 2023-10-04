
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCity } from "../redux/actions";

const Tabs = () => {
  const cities = Object.keys(useSelector((state) => state.properties));
  const activeCity = useSelector((state) => state.activeCity);
  const dispatch = useDispatch();

  const handleTabClick = (city) => {
    dispatch(setActiveCity(city));
  };

  return (
    <div className="tabs">
      {cities.map((city) => (
        <button
          key={city}
          className={city === activeCity ? "tab active" : "tab"}
          onClick={() => handleTabClick(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
