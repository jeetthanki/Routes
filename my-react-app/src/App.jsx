import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Search from "./Components/Search";
import Profile from "./Components/Profile";
import Form from "./Components/Form";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Search />} />
        <Route path="/user/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

//<Router>
//<Routes>
///<Route path="/users" element={<Users />} />
//<Route path="/users/:id" element={<UsersInfo />} />
//<Route path="*" element={<h1>404 Not Found</h1>} />
//</Routes>
//</Router>//
