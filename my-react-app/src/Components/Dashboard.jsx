import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  const OnLogout = () => {
    localStorage.clear("role");
    navigate("/login");
  };
  return (
    <div className={`dashboard-container ${theme}`}>
      <>
        <h1>Welcome To Dashboard</h1>
        <button onClick={OnLogout}>LogOut</button>
        <button onClick={toggleTheme}>Mod Change</button>
      </>
    </div>
  );
};

export default Dashboard;
