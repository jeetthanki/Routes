import React from "react";
import { Link, useLocation } from "react-router-dom";
const Info = () => {
  const location = useLocation();
  const { name, age, city, role } = location.state || {};
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>City: {city}</h3>
      <h4>Role: {role}</h4>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Info;
