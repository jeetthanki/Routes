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
        shows.map((show) => <img src={show.image.medium} alt={shows.name} />)}
      <p>{shows.name}</p>
    </div>
  );
};

export default Netflix;
