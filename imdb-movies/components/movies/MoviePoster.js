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
          />
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
          <div className="flex font-allerta text-white mb-2 justify-between items-center">
            <div>{this.props.movie ? this.props.movie.release_date : ""}</div>
            <div className="flex text-sm">
              {this.props.movie.ratings.length
                ? Math.round(
                    (this.props.movie.ratings.reduce((a, b) => a + b, 0) /
                      this.props.movie.ratings.length) *
                      100,
                  ) / 100
                : "N/A"}
              <svg
                className="h-5 w-5 text-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default MoviePoster;
