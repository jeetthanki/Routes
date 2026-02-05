import React from "react";
import { useEffect } from "react";
import "../Styles/Netflix.css";
const Netflix = () => {
  const [shows, setShows] = React.useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();

      setShows(data);
    };
    fetchShows();
  }, []);

  return (
    <div className="container">
      {shows &&
        shows.map((show) => (
          <div className="card" key={show.id}>
            <img src={show.image.medium} alt={show.name} />
            <p>{show.name}</p>
            <p>Rating: {show.rating.average}</p>
            <button>Add To WatchList</button>
          </div>
        ))}
    </div>
  );
};

export default Netflix;
