import React, { Component } from "react";
import axios from "axios";
import CardMovie from "./CardMovie";
import BodyHeader from "./BodyHeader";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

export class TopRated extends Component {
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
      "http://localhost:8000/movie/top-rated/" + page
    );

    this.setState({ movies: response.data, loading: false });
  };

  render() {
    const title = "Top Rated";
    if (this.state.loading === true) {
      return <Spinner />;
    }
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

export default TopRated;
