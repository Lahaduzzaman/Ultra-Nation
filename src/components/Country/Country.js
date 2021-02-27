import React from "react";

const Country = (props) => {
  const { name, population, region, flag } = props.country;
  const flagStyle = { height: "100px" };
  const countryStyle = {
    border: "1px solid green",
    padding: "10px",
    margin: "10px",
  };
  const handleAddCountry = props.handleAddCountry;

  return (
    <div style={countryStyle}>
      <h4>Country Name: {name}</h4>
      <img style={flagStyle} src={flag} alt="" />
      <p>Population: {population}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <button onClick={() => handleAddCountry(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
