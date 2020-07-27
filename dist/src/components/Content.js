import React, { useState } from "react";
import * as actions from "../redux/actions";
import { useDispatch } from "react-redux";
import CountryMiniCard from "./CountryMiniCard";

function Content() {
  const urlAll = "https://restcountries.eu/rest/v2/all";
  const urlRegion = "https://restcountries.eu/rest/v2/region/{region}";
  const [userInput, setUserInput] = useState("");

  const handleOnChange = async (event) => {
    const searchBy = event.target.value;
    setUserInput(searchBy);
  };
  const dispatch = useDispatch();
  function handleClick() {
    console.log("country is ", userInput);
    dispatch(actions.searchCountry(userInput));
  }
  return (
    <div className="content">
      <input
        type="text"
        className="search"
        placeholder="Search for a country"
        onChange={(event) => handleOnChange(event)}
      />
      <button onClick={() => handleClick()}>Fetch</button>
      <select name="continents" id="">
        <option value="Filter by Region" selected>
          Filter by Region
        </option>
        <option value="africana">Africana</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      {/* <CountryMiniCard {...country} /> */}
    </div>
  );
}

export default Content;
