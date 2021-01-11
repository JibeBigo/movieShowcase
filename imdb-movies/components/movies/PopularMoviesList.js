import React, { Component } from "react";
import MoviePoster from "./MoviePoster";

export class PopularMoviesList extends Component {
  state = {
    popular_movies: [],
  };

  fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=beddfc03d4e9041b7938fd3654c3131a",
    );
    const popular_movies = await res.json();
    this.setState({ popular_movies: popular_movies.results });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="flex flex-wrap container mb-5">
        {this.state.popular_movies.map((movie) => (
          <MoviePoster movie={movie} key={movie.id}></MoviePoster>
        ))}
      </div>
    );
  }
}

export default PopularMoviesList;
