import React, { Component } from "react";
import Link from "next/link";

export class MoviePoster extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link href={`/movies/${this.props.movie._id}`}>
        <div className="mx-2 w-44 cursor-pointer relative">
          <img
            className="rounded-md shadow-none hover:shadow-white"
            style={{ height: "265px" }}
            src={"https://image.tmdb.org/t/p/w200/" + this.props.movie.poster}
          ></img>
          <button className="absolute top-0 right-0">
            <svg
              className="h-8 w-8 text-pink-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <div className="font-contrail text-white">
            {this.props.movie ? this.props.movie.title : ""}
          </div>
          <div className="font-allerta text-white mb-2">
            {this.props.movie ? this.props.movie.release_date : ""}
          </div>
        </div>
      </Link>
    );
  }
}

export default MoviePoster;
