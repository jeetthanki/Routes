import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Like from "./Components/Like";
import Stock from "./Components/Stock";
function App() {
  const [input, setInput] = React.useState("");
  const [list, setList] = React.useState([]);

  return (
    <div>
      <Stock />
      <Like />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setList([...list, input])}>POST</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
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
