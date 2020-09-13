import "../assets/custom_css/Navbar.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handlerChange = (e) => {
    this.setState({
      query: e.target.value,
    });

    console.log(this.state);
  };

  handlerSubmit = () => {
    window.event.preventDefault();
    // const page = 2;
    window.location = "/search/" + this.state.query + "&page=" + 1;
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Movie App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  onClick={() => (window.location = "/now-playing&page=" + 1)}
                >
                  Now Playing <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => (window.location = "/popular&page=" + 1)}
                >
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => (window.location = "/top-rated&page=" + 1)}
                >
                  Top Rated
                </Link>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={this.handlerSubmit}
            >
              <input
                className="form-control input-rounded mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handlerChange}
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
