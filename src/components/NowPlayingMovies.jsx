import React, { useState, useEffect } from "react";
import CardMovie from "./CardMovie";
import BodyHeader from "./BodyHeader";
import axios from "axios";
import Pagination from "./Pagination";

function NowPlayingMovies(props) {
  const title = "Now Playing";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const page = props.match.params.page;
    const response = axios
      .get(`http://localhost:8000/movie/now-playing/${page}`)
      .then((response) => setMovies(response.data.movies));
    return () => {
      response();
    };
  }, []);

  console.log(props.match.params);

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
      <Pagination props={props} />
    </div>
  );
}

export default NowPlayingMovies;
