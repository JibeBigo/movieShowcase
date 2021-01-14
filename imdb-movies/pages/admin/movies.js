import styles from "../../styles/Home.module.css";
import MoviesSearch from "../../components/movies/MoviesSearch";
import PopularMoviesList from "../../components/movies/PopularMoviesList";

export default function Movies() {
  return (
    <div className={styles.container}>
      <div className="flex space-x-10 mt-8">
        <h1 className="font-fira text-xl text-yellow-300">
          Popular movies
        </h1>
        <div className="font-fira text-xl text-white"> | </div>
        <a
          className="font-fira text-xl text-white"
          href="/admin/showcasedMovies"
        >
          Showcased movies
        </a>
      </div>
      <MoviesSearch></MoviesSearch>
      <PopularMoviesList></PopularMoviesList>
    </div>
  );
}
