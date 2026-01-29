import React from "react";
import { useParams, Link } from "react-router-dom";
import "../Styles/UsersInfo.css";

const UsersInfo = () => {
  const { id } = useParams();
  const [User, setUser] = React.useState();

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const userData = await response.json();
      setUser(userData);
    };
    fetchUser();
  }, [id]);

  return (
    <div>
      {User ? (
        <div className="user-container">
          <p>
            <span>ID:</span> {User.id}
          </p>
          <p>
            <span>Name:</span> {User.name}
          </p>
          <p>
            <span>Email:</span> {User.email}
          </p>
          <p>
            <span>Phone:</span> {User.phone}
          </p>
          <p>
            <span>Website:</span> {User.website}
          </p>

          <Link className="back-link" to="/users">
            Back to Users List
          </Link>
        </div>
      ) : (
        <h1 className="loading">Loading User Info...</h1>
      )}
    </div>
  );
};

export default UsersInfo;
