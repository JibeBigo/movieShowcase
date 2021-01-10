import React, { Component } from "react";

export class MoviePoster extends Component {
  constructor(props) {
    super(props);
  }

  addMovieToShowcase = (movie) => {
    let {id, title, poster_path, release_date, genres} = movie
    let movieToInsert = {
      id_movieDb: id,
      rating: [],
      title: title,
      poster: poster_path,
      release_date: release_date,
      genres: genres,
    };
    console.log(movie)
    fetch("http://localhost:3000/api/movies", {
      method: "POST",
      body: JSON.stringify(movieToInsert),
      headers: {
        "Content-Type": "application/json",
      },
    })
  };

  render() {
    return (
      <div className="ml-4 w-44 relative">
        <button
          className="absolute top-0 right-0"
          onClick={() => this.addMovieToShowcase(this.props.movie)}
        >
          <svg
            className="h-8 w-8 text-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <img
          className="rounded-md shadow-none hover:shadow-white"
          src={
            "https://image.tmdb.org/t/p/w200/" + this.props.movie.poster_path
          }
        ></img>
        <div className="font-contrail text-white">
          {this.props.movie ? this.props.movie.title : ""}
        </div>
        <div className="font-allerta text-white mb-2">
          {this.props.movie ? this.props.movie.release_date : ""}
        </div>
      </div>
    );
  }
}

export default MoviePoster;
