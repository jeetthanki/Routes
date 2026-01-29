import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Users from "./Components/Users";
import UsersInfo from "./Components/UsersInfo";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersInfo />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
