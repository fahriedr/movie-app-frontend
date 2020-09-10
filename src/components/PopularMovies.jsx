import axios from "axios";
import CardMovie from "./CardMovie";
import BodyHeader from "./BodyHeader";
import Pagination from "./Pagination";

import React, { Component } from "react";

export class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const page = this.props.match.params.page;
    const response = await axios.get(
      "http://localhost:8000/movie/popular/" + page
    );

    this.setState({ movies: response.data, loading: false });
  };

  render() {
    const title = "Popular Movies";
    return (
      <div>
        <BodyHeader title={title} />
        <div className="row">
          {this.state.movies.map((movie) => (
            <div className="col">
              <CardMovie key={movie.id} movie={movie} />
            </div>
          ))}
        </div>
        <Pagination props={this.props} />
      </div>
    );
  }
}

export default PopularMovies;

// function Popular() {
//   const title = "Popular Movies";
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const response = axios
//       .get(`http://localhost:8000/movie/popular`)
//       .then((response) => setMovies(response.data));
//     return () => {
//       response();
//     };
//   }, []);
//   return (
//     <div>
//       <BodyHeader title={title} />
//       <div className="row">
//         {movies.map((movie) => (
//           <div className="col">
//             <CardMovie key={movie.id} movie={movie} />
//           </div>
//         ))}
//       </div>
//       <Pagination />
//     </div>
//   );
// }

// export default Popular;
