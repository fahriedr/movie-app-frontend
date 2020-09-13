import React, { Component } from "react";
import axios from "axios";
import CardMovie from "./CardMovie";
import BodyHeader from "./BodyHeader";
import Pagination from "./Pagination";

export class SearchMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const query = this.props.match.params.query;
    const page = this.props.match.params.page;
    const response = await axios.get(
      "http://localhost:8000/movie/find/" + query + "/" + page
    );

    this.setState({
      movie: response.data,
      loading: false,
    });
  };

  render() {
    const query = this.props.match.params.query;
    const title = "Search Movies for " + query;

    if (this.state.loading === true) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
    return (
      <div>
        <BodyHeader title={title} />
        <div className="row">
          {this.state.movie.map((movie) => (
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

export default SearchMovie;
