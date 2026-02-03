import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Post from "./Components/Post";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Post />} />
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
