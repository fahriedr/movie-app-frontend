import React from "react";
import "../assets/custom_css/Genre.css";

function Genre({ genre }) {
  console.log(genre);
  return <span className="genre">{genre.name}</span>;
}

export default Genre;
