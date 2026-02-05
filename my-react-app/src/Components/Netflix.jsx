import React from "react";
import { useEffect } from "react";

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
    <div>
      {shows &&
        shows.map((show) => (
          <div key={show.id}>
            <p>{show.name}</p>
            <img src={show.image.medium} alt={show.name} />
          </div>
        ))}
    </div>
  );
};

export default Netflix;
