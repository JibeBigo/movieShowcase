import React, { Component } from "react";
import MoviePoster from "./MoviePoster";

export class MoviesList extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    const res = await fetch("http://localhost:3000/api/movies");
    const movies = await res.json();
    this.setState({ movies: movies.data });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div>
        <h1 className="font-fira my-2 text-xl text-yellow-300 overflow-hidden">Showcased movies</h1>
        <div className="flex flex-wrap mb-5">
          {this.state.movies.map((movie) => (
            <MoviePoster movie={movie} key={movie._id}></MoviePoster>
          ))}
        </div>
      </div>
    );
  }
}

export default MoviesList;
