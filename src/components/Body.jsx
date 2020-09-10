import React from "react";
import { Route, Switch } from "react-router-dom";
import NowPlayingMovies from "./NowPlayingMovies";
import PopularMovies from "./PopularMovies";
import TopRated from "./TopRated";
import SearchMovie from "./SearchMovie";
import DetailMovie from "./DetailMovie";
import "../App.css";

function Body() {
  return (
    <div className="container container-body text-light">
      <Switch>
        <Route path="/home">
          <NowPlayingMovies />
        </Route>
        <Route path={`/popular&page=:page`} component={PopularMovies} />
        <Route path={`/top-rated&page=:page`} component={TopRated} />
        <Route path={`/search/:query&page=:page`} component={SearchMovie} />
        <Route path="/movie/:id" component={DetailMovie} />
      </Switch>
    </div>
  );
}

export default Body;
