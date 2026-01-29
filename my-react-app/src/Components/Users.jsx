import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/UsersInfo.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Hide All Users" : "Show All Users"}
      </button>

      <hr />

      {showAll ? (
        users.map((user) => (
          <div key={user.id} className="user-container">
            <p>
              <span>ID:</span> {user.id}
            </p>
            <p>
              <span>Name:</span> {user.name}
            </p>
            <p>
              <span>Email:</span> {user.email}
            </p>
            <p>
              <span>Phone:</span> {user.phone}
            </p>
            <p>
              <span>Website:</span> {user.website}
            </p>
          </div>
        ))
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
