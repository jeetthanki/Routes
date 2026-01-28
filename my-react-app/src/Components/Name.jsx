import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Name = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>My Name Is {name}</h1>
      <Link to="/">Go to Hone</Link>
    </div>
  );
};

export default Name;
