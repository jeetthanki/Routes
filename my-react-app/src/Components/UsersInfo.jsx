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

      console.log(userData);

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
            <span>username:</span> {User.username}
          </p>
          <p>
            <span>Email</span> {User.email}
          </p>
          {User.address && (
            <>
              <p>
                <span>street:</span> {User.address.street}
              </p>
              <p>
                <span>suite:</span> {User.address.suite}
              </p>
              <p>
                <span>city:</span> {User.address.city}
              </p>
              <p>
                <span>zipcode:</span> {User.address.zipcode}
              </p>
            </>
          )}
          {User.address.geo && (
            <>
              <p>
                <span>lat:</span> {User.address.geo.lat}
              </p>
              <p>
                <span>lng:</span> {User.address.geo.lng}
              </p>
            </>
          )}
          <p>
            <span>phone:</span> {User.phone}
          </p>
          <p>
            <span>website:</span> {User.website}
          </p>
          {User.company && (
            <>
              <p>
                <span>company's name:</span> {User.company.name}
              </p>
              <p>
                <span>catchphrase:</span> {User.company.catchPhrase}
              </p>
              <p>
                <span>bs:</span> {User.company.bs}
              </p>
            </>
          )}
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
