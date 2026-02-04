import React from "react";

const Post = () => {
  const [like, SetLike] = React.useState(0);
  const [likeColor, SetLikeColor] = React.useState("grey");
  const [comment, SetComment] = React.useState("");
  const [input, SetInput] = React.useState("");

  const onToggle = () => {
    SetLikeColor(likeColor === "grey" ? "red" : "grey");

    SetLike(like === 0 ? 1 : 0);
  };
  const onClick = () => {
    SetComment(input);
    SetInput("");
  };
  return (
    <>
      <div>
        <button onClick={onToggle} style={{ color: likeColor }}>
          ♡
        </button>
      </div>
      <div>
        <h1>Comment Box</h1>
        <label>Write Here</label>
        <input
          type="comment"
          value={input}
          placeholder="Enter Text Here"
          onChange={(e) => SetInput(e.target.value)}
        ></input>
        <br />
        <button onClick={onClick}>Post</button>
        <p>{comment}</p>
      </div>
    </>
  );
};

export default Post;
