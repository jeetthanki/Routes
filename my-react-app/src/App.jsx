import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Name from "./Components/Name";
import Info from "./Components/Info";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/info" element={<Info />} />
        <Route path="/name/:name" element={<Name />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
