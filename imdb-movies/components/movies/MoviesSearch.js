import React, { Component } from "react";

export class MoviesSearch extends Component {
  render() {
    return (
      <div className="flex my-8 w-full items-center">
        <input
          type="text"
          className="w-full px-3 h-12 rounded-l-lg border border-transparent bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-600 text-white"
          placeholder="Search Movies"
        />
        <button className="border h-12 py-2 px-6 rounded-r-lg  bg-gray-900 text-white hover:border-transparent hover:bg-white hover:text-black">
          Search
        </button>
      </div>
    );
  }
}

export default MoviesSearch;
