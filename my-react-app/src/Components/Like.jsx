import React, { useState } from "react";

function Like() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setLiked(true);
    setCount(count ? 0 : +1);
  };

  return (
    <div>
      <svg
        onClick={handleClick}
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill={liked ? "red" : "gray"}
        style={{ cursor: "pointer" }}
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                 2 5.42 4.42 3 7.5 3
                 9.24 3 10.91 3.81 12 5.08
                 13.09 3.81 14.76 3 16.5 3
                 19.58 3 22 5.42 22 8.5
                 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>

      <p>Likes: {count}</p>
    </div>
  );
}

export default Like;
