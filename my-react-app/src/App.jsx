import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/dashboard";
import Netflix from "./Components/Netflix";
function App() {
  const [theme, setTheme] = React.useState("light");
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="/Netflix" element={<Netflix />} />
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
