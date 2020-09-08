// import React, { useState, Component } from "react";
// import CardMovie from "./CardMovie";
// import axios from "axios";

// export class BodyMain extends Component {
//   const [movies, setMovies] = useState([])

//   async componentDidMount() {
//     await axios.get(`http://localhost:8000/movie`).then((response) => {
//       this.setState({ movie: response });
//     });
//   }

//   render() {
//     const movie = this.state.movie;
//     console.log(movie);
//     return (
//       <div>
//         {movie.map((movie) => (
//           <CardMovie />
//         ))}
//       </div>
//     );
//   }
// }

// export default BodyMain;

import React, { useState, useEffect } from "react";
import CardMovie from "./CardMovie";
import axios from "axios";

function BodyMain() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const response = axios
      .get(`http://localhost:8000/movie`)
      .then((response) => setMovies(response.data));
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
