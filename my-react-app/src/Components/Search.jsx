import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [searchName, setSearchName] = useState("");

  return (
    <div className="container">
      <h2>GitHub User Search</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />

      <br />
      <br />

      <Link to={`/user/${searchName}`}>
        <button disabled={!searchName}>Search</button>
      </Link>
    </div>
  );
}

export default Search;
