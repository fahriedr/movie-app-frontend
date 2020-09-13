import { Link } from "react-router-dom";
import React, { Component } from "react";

export class Pagination extends Component {
  render() {
    const page = parseInt(this.props.props.match.params.page);
    const url = this.props.props.match.url;
    const base_url = url.slice(0, url.length - 1);
    // console.log(page + 1);

    return (
      <div className="pb-4 d-flex justify-content-between">
        <Link
          onClick={() =>
            page === 1
              ? (window.location = base_url + page)
              : (window.location = base_url + (page - 1))
          }
        >
          Previous
        </Link>
        <Link onClick={() => (window.location = base_url + (page + 1))}>
          Next
        </Link>
      </div>
    );
  }
}

export default Pagination;
