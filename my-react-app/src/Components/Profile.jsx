import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (res.status === 404) {
          setError(true);
          setLoading(false);
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setUser(data);
          setLoading(false);
        }
      });
  }, [username]);

  if (loading) return <h2>Searching...</h2>;
  if (error) return <h2>User Not Found </h2>;

  return (
    <div className="container">
      <img src={user.avatar_url} width="100" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers}</p>
    </div>
  );
}

export default Profile;
