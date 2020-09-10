import React, { useState, useEffect } from "react";
import CardMovie from "./CardMovie";
import BodyHeader from "./BodyHeader";
import axios from "axios";

function NowPlayingMovies() {
  const title = "Now Playing";
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
      <BodyHeader title={title} />
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

export default NowPlayingMovies;
