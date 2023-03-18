import React, { useEffect, useState } from "react";
import { __article } from "../data/Data";

function Article() {
  const articleStyle = {
    backgroundColor: "#f9f9f9",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "50px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  const articleTitleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const articleTextStyle = {
    lineHeight: 1.5,
  };

  const articleFooterStyle = {
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
    textAlign: "right",
  };

  return (
    <div style={articleStyle}>
      <article>
        <h1 style={articleTitleStyle}>{__article.title}</h1>
        <p style={articleTextStyle}>{__article.text}</p>
        <footer style={articleFooterStyle}>
          Written by {__article.author} <br/>on {__article.date.substring(0, 10)}
        </footer>
      </article>
    </div>
  );
}

export default Article;
