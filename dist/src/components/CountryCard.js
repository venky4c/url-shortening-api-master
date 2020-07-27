import React from "react";
import * as services from "../redux/services";

const CountryCard = (props) => {
  //console.log(props);
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = props;
  // currencies.map((value) => {
  //   return console.log("currency value is ", value.name);
  //   //console.log('index is ', index);
  // });
  const baseUrl = "https://restcountries.eu/data/";
  const flagName = flag.slice(baseUrl.length, flag.length);

  return (
    <div className="country-card">
      <img src={`${baseUrl.concat(flagName)}`} alt="dummy" />
      <h2>{name}</h2>
      <div className="country-details">
        <section className="part1">
          <p>
            <label htmlFor="">Native Name: </label>:{nativeName}
          </p>
          <p>
            <label htmlFor="">Population: </label>
            {population}
          </p>
          <p>
            <label htmlFor="">Region: </label>
            {region}
          </p>

          <p>
            <label htmlFor="">Sub Region: </label>
            {subregion}
          </p>

          <p>
            <label>Capital: </label>
            {capital}
          </p>
        </section>
        <section className="part2">
          <p>
            <label htmlFor="">Top Level Domain: </label>
            {topLevelDomain}
          </p>
          {/* <p>
            <label htmlFor="">Currency: </label>
            {currencies[1]}
          </p> */}
        </section>
        <section>
          <span className="span-arr">
            <span className="currencies">Currencies:</span>
            {currencies.map((value, index) => (
              <p>{value.name}</p>
            ))}
            <span className="languages">Languages:</span>
            {languages.map((value, index) => (
              <p>{value.name}</p>
            ))}
          </span>
        </section>
        <section className="borders">Borders</section>

        <p>
          <span>Borders: </span>
          {borders.map((value) => (
            <p>{services.getCountryNameByCode(value)}</p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
