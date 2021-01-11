import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
    <div className="flex-col justify-start items-center mx-48">
      <div className="flex justify-center" style={{ height: "350px" }}>
        <img
          src={"http://image.tmdb.org/t/p/w1280" + movie.backdrop}
          className="w-full rounded-b-xl object-cover object-center"
        />
      </div>
      <div className="flex-col text-white mt-4 px-4">
        <div className="flex-none font-contrail text-3xl">{movie.title}</div>
        <div className="flex items-center">
          {movie.ratings
            ? movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length
            : 0}
          <svg
            className="h-6 w-6 text-gray-100 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
        <div className="text-white">{movie.overview}</div>
      </div>
    </div>
  ) : (
    <div> Loading </div>
  );
}
