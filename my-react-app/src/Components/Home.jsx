import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/name/Thanki Jeet Ashwinbhai">Go to Name</Link>
      <br />
      <Link
        to="/info"
        state={{
          name: "Thanki Jeet Ashwinbhai",
          age: 20,
          city: "Ahmedabad",
          role: "Student",
        }}
      >
        Go to Info
      </Link>
    </div>
  );
};

export default Home;
