import { useNavigate } from "react-router-dom";
import React from "react";

const Login = ({ theme, toggleTheme }) => {
  const [data, setData] = React.useState({ name: "" });
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.name.trim() === "") {
      alert("Name is required");
      return;
    }
    if (data.name !== "admin") {
      alert("Not allowed");
      return;
    }
    localStorage.setItem("role", "admin");

    navigate("/dashboard");
  };

  return (
    <div className={`login-container ${theme}`}>
      <h1>Login User</h1>
      <label>Enter Your Username</label>
      <input
        type="text"
        name="username"
        value={data.name}
        onChange={(e) => setData({ name: e.target.value })}
      ></input>
      <button onClick={handleClick}>Submit</button>
      <button onClick={toggleTheme}>Mod Change</button>
    </div>
  );
};

export default Login;
