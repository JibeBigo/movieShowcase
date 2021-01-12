import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Movie() {
  const router = useRouter();
  const [movie, setMovie] = useState(null);
  const id = router.query.id;

  const getMovieFromId = async () => {
    const res = await fetch(`http://localhost:3000/api/movies/${id}`);
    const movie = await res.json();
    setMovie(movie.data);
  };

  useEffect(() => {
    if (id) {
      getMovieFromId();
    }
  }, [id]);

  return movie ? (
    <div className="flex items-start">
      <Link href="/">
        <div className=" flex flex-none m-4 p-2 cursor-pointer text-yellow-300 bg-gray-600 rounded-md border border-yellow-300 hover:bg-gray-900">
          <svg
            className="h-6 w-6 text-yellow-300 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
          Showcased movies
        </div>
      </Link>
      <div className="flex-col justify-start items-center mr-44">
        <div className="flex justify-center" style={{ height: "350px" }}>
          <img
            src={"http://image.tmdb.org/t/p/w1280" + movie.backdrop}
            className="w-full rounded-b-xl object-cover object-center"
          ></img>
        </div>
        <div className="flex mt-4">
          <img
            className="rounded-md"
            style={{ height: "280px" }}
            src={"https://image.tmdb.org/t/p/w200/" + movie.poster}
          ></img>
          <div className="flex-col text-white px-4">
            <div className="flex">
              <div className="flex-none font-contrail text-3xl mr-4">
                {movie.title}
              </div>
              <div className="flex items-center font-fira">
                {movie.ratings.length
                  ? movie.ratings.reduce((a, b) => a + b, 0) /
                    movie.ratings.length
                  : "No rating"}
                <svg
                  className="h-6 w-6 text-yellow-300 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <a
                  href="#"
                  className="ml-3 px-2 py-1 text-yellow-300 bg-gray-600 rounded-md border border-yellow-300 hover:bg-gray-900"
                >
                  Rate this movie
                </a>
              </div>
            </div>
            <h1 className="font-fira my-2 text-xl text-yellow-300">Synopsis</h1>
            <div className="text-white font-allerta">{movie.overview}</div>
            <h1 className="font-fira mt-2 text-lg text-yellow-200">
              Release Date
            </h1>
            <div className="text-white font-mono">
              {new Date(movie.release_date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div> Loading </div>
  );
}
