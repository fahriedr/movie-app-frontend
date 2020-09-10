import "../assets/custom_css/DetailMovie.css";
import axios from "axios";
import React, { Component } from "react";

export class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const id = this.props.match.params.id;
    const response = await axios.get("http://localhost:8000/movie/" + id);
    this.setState({
      movie: response.data,
      loading: false,
    });
  };

  month_name = function (dt) {
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

  render() {
    const year = new Date(this.state.movie.release_date).getFullYear();

    const date = new Date(this.state.movie.release_date);
    const month = this.month_name(date);

    const fullDate = date.getDate() + " " + month + ", " + date.getFullYear();

    const {
      genres = [],
      genreName = genres.map((item) => item.name),
    } = this.state.movie;

    console.log(genreName);

    if (this.state.loading === true) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <div className="detail-movie mt-4">
          <div className="row">
            <div className="col-4 ">
              <img
                src={`https://image.tmdb.org/t/p/w400/${this.state.movie.poster_path}`}
                className="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div className="col-7 ml-4 pt-2">
              <h3>
                {this.state.movie.title} ({year})
              </h3>
              <div className="row">
                <div className="col ">
                  <i className="fas fa-star fa-xs rating"></i>
                  <span className="persen">
                    {this.state.movie.vote_average}
                  </span>
                  <span> | </span>
                  {fullDate}
                  <span> | </span>
                  {genreName + " "}
                </div>
              </div>
              <div className="mt-2">
                <p>{this.state.movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default DetailMovie;

// function DetailMovie(props) {
//   console.log(this.props);
//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     const { id } = this.props.match.params.id;
//     const response = axios
//       .get("http://localhost:8000/movie/" + id)
//       .then((response) => console.log(response));
//     return () => {};
//   }, []);

//   return (
//     <div className="detail-movie">
//       <div className="row">
//         <div className="col-4 bg-primary">
//           <img src="..." class="img-fluid" alt="Responsive image" />
//         </div>
//         <div className="col-8 bg-success">
//           <h1>Wo</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetailMovie;
