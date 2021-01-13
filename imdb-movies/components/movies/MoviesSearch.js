import React, { Component } from "react";
import MoviePosterAdmin from "./MoviePosterAdmin";
import {getDirector, getActors, getGenres} from './MoviesFunctions';

export class MoviesSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      movies: [],
    };
  }

    render() {
    return (
      <div className="flex-col w-full">
        <div className="flex my-8 w-full items-center">
          <input
            name="search"
            value={this.state.inputValue}
            onChange={(e) => this.updateInputValue(e)}
            onKeyPress={(e) => this.handleKeyPress(e)}
            type="text"
            className="w-full px-3 h-12 rounded-l-lg border border-transparent bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-600 text-white"
            placeholder="Search Movies"
          />
          <button
            className="border h-12 py-2 px-6 rounded-r-lg  bg-gray-900 text-white hover:border-transparent hover:bg-white hover:text-black"
            onSubmit={() => this.onSubmit()}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap">
          {this.state.movies.map((movie) => (
            <MoviePosterAdmin movie={movie} key={movie.id}></MoviePosterAdmin>
          ))}
        </div>
      </div>
    );
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  onSubmit = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie/?api_key=beddfc03d4e9041b7938fd3654c3131a&query=${this.state.inputValue}&page=1`,
    );
    const movies = await res.json();

    for (let i = 0; i < movies.results.length; i++) {
        movies.results[i].genres = await getGenres(movies.results[i].genre_ids)
        movies.results[i].director = await getDirector(movies.results[i].id)
        movies.results[i].actors = await getActors(movies.results[i].id)
    }
    this.setState({movies: movies.results})
      console.log(movies)
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onSubmit();
    }
  };
}

export default MoviesSearch;
