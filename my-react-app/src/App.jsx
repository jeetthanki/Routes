import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import Users from "./Components/Users";
import UsersInfo from "./Components/UsersInfo";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersInfo />} />
        <Route path="/" element={<Post />} />
        <Route path="/post" element={<Posts />} />
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
