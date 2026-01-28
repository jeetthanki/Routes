import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Name = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>My Name Is {name}</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Name;
