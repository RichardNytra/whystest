import React, { useState } from "react";
import Article from "./Article";
import Comment from "./Comment";
import { __comments, __moreComments } from "../data/Data";

const Application = () => {
  const [comments, setComments] = useState(__comments);

  const addComment = () => {
    setComments([...comments, ...__moreComments]);
  };

  const commentsStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "50px",
  };

  const commentListStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  };

  const commentListItemStyle = {
    margin: "10px 0",
  };

  const commentAuthorStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const commentTextStyle = {
    lineHeight: 1.5,
  };

  const commentDateStyle = {
    fontSize: "12px",
    color: "#666",
  };

  const sortedComments = [...comments].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="App">
      <Article />
      <div style={commentsStyle}>
      <h2>Comments</h2>
        <ul style={commentListStyle}>
          {sortedComments.map((comment, index) => (
            <li key={index} style={commentListItemStyle}>
              <div style={commentAuthorStyle}>{comment.author}</div>
              <div style={commentTextStyle}>{comment.text}</div>
              <div style={commentDateStyle}>
                {comment.date.substring(0, 10)}
              </div>
            </li>
          ))}
        </ul>
        <button onClick={addComment}>More Comments</button>
      </div>
    </div>
  );
};

export default Application;
