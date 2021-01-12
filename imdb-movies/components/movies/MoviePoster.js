import React, { Component } from "react";
import Link from 'next/link'

export class MoviePoster extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link href={`/movies/${this.props.movie._id}`}>
        <div className="mx-2 w-44 cursor-pointer">
          <img
            className="rounded-md shadow-none hover:shadow-white"
            style={{ height: "265px" }}
            src={"https://image.tmdb.org/t/p/w200/" + this.props.movie.poster}
          ></img>
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
