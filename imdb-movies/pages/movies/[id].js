import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Comments from "../../components/comments/Comments";
import StarsRating from "../../components/movies/StarsRating";

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
    <div>
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
            />
          </div>
          <div className="flex mt-4">
            <img
              className="rounded-md"
              style={{ height: "280px" }}
              src={"https://image.tmdb.org/t/p/w200/" + movie.poster}
            />
            <div className="flex-col text-white px-4">
              <div className="flex">
                <div className="flex-none font-contrail text-3xl mr-4">
                  {movie.title}
                </div>
                <StarsRating
                  movie={movie}
                  getMovieFromId={getMovieFromId}
                ></StarsRating>
              </div>
              <h1 className="font-fira my-2 text-xl text-yellow-300">
                Synopsis
              </h1>
              <div className="text-white font-allerta">{movie.overview}</div>
              <div className="flex flex-row justify-between max-w-2xl">
                <div className="flex flex-col">
                  <h1 className="font-fira mt-2 text-lg text-yellow-200">
                    Release Date
                  </h1>
                  <div className="text-white font-mono">
                    {new Date(movie.release_date).toLocaleDateString()}
                  </div>
                  <h1 className="font-fira mt-2 text-lg text-yellow-200">
                    Genres
                  </h1>
                  <div className="text-white font-mono">
                    {movie.genres.map((genre) => {
                      return <p>{genre}</p>;
                    })}
                  </div>
                </div>
                <div>
                  <h1 className="font-fira mt-2 text-lg text-yellow-200">
                    Director
                  </h1>
                  <div className="text-white font-mono">{movie.director}</div>
                </div>
                <div>
                  <h1 className="font-fira mt-2 text-lg text-yellow-200">
                    Main Actors
                  </h1>
                  <div className="text-white font-mono">
                    {movie.actors.map((actor) => {
                      return <p>{actor}</p>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  COMMENTS RENDERING */}
          <Comments movieId={id} />
        </div>
      </div>
    </div>
  ) : (
    <div> Loading </div>
  );
}
