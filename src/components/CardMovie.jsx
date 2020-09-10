import React from "react";
import "@fortawesome/fontawesome-svg-core";
import "../assets/custom_css/CardMovie.css";
import { Link } from "react-router-dom";

var month_name = function (dt) {
  let newDt = new Date(dt);
  let mlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return mlist[newDt.getMonth()];
};

function CardMovie({ movie }) {
  let date = new Date(movie.release_date);
  let month = month_name(date);

  let fullDate = date.getDate() + " " + month + ", " + date.getFullYear();

  return (
    <div className="mb-4">
      <div className="card" style={{ width: 13 + "rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="info">
        <span className="mt-2 title">
          <Link onClick={() => (window.location = "/movie/" + movie.id)}>
            <strong>{movie.title}</strong>
          </Link>
        </span>
        <div>
          <i className="fas fa-star rating fa-xs"></i>
          <span className="persen">{movie.vote_average}</span>
          <span>|</span>
          <span className="tanggal">{fullDate}</span>
        </div>
      </div>
    </div>
  );
}

export default CardMovie;
