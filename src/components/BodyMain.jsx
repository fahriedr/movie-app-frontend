import React, { useState, useEffect } from "react";
import CardMovie from "./CardMovie";
import axios from "axios";

function BodyMain() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const response = axios
      .get(`http://localhost:8000/movie`)
      .then((response) => setMovies(response.data.movies));
    return () => {
      response();
    };
  }, []);

  return (
    <div>
      <div className="row">
        {movies.map((movie) => (
          <div className="col">
            <CardMovie key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodyMain;
