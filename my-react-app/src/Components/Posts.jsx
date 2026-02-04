import React from "react";

const Posts = () => {
  const post = {
    id: 1,
    title: "Test Title",
    content: "Test Content",
    author_id: 1,
    comments: [
      { id: 1, user_id: 1, comment: "Test Comment" },
      { id: 2, user_id: 2, comment: "Nice post! Learned something new." },
      { id: 3, user_id: 3, comment: "Can you share the source for this?" },
      {
        id: 4,
        user_id: 4,
        comment: "I disagree with this point — here's why.",
      },
      { id: 5, user_id: 5, comment: "Great explanation, thanks for sharing!" },
      {
        id: 6,
        user_id: 6,
        comment: "Where can I find more examples like this?",
      },
      {
        id: 7,
        user_id: 7,
        comment: "This helped me solve a tricky bug — much appreciated.",
      },
      {
        id: 8,
        user_id: 8,
        comment: "There's a small typo in the second paragraph.",
      },
      {
        id: 9,
        user_id: 9,
        comment: "Looking forward to follow-up posts on this topic.",
      },
      { id: 10, user_id: 10, comment: "Brilliant — concise and clear." },
      {
        id: 11,
        user_id: 11,
        comment: "Could you provide a short code snippet for this?",
        likes: [],
      },
    ],
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <ul>
        {post.comments &&
          post.comments.map((comment) => (
            <>
              <li key={comment.id}>{comment.comment}</li>
              {comment.likes &&
                comment.likes.map((like) => <p key={like.id}>{like.count}</p>)}
            </>
          ))}
      </ul>
    </div>
  );
};

export default Posts;
