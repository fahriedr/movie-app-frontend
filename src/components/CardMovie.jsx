import React from "react";
import "@fortawesome/fontawesome-svg-core";
import "../assets/custom_css/CardMovie.css";

var month_name = function (dt) {
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
  return mlist[dt.getMonth()];
};

function CardMovie({ movie }) {
  let date = new Date(movie.release_date);
  let month = date.getMonth() + 1;

  if (month < 10) {
    month = "0" + month;
  }

  console.log(month_name(date));

  // console.log(date);
  return (
    <div className="mb-4">
      <div className="card" style={{ width: 13 + "rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="">
        <div className="title-date">
          <p className="mt-2 title text-center">
            {movie.title}
            <span className="divider"></span>
            <span className="tanggal">{movie.release_date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardMovie;
