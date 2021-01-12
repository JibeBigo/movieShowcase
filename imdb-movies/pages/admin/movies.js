import styles from "../../styles/Home.module.css";
import MoviesSearch from "../../components/movies/MoviesSearch";
import PopularMoviesList from "../../components/movies/PopularMoviesList";

export default function Movies() {
  return (
    <div className={styles.container}>
      <MoviesSearch></MoviesSearch>
      <h1 className="font-fira mb-6 text-xl text-yellow-300">Popular movies</h1>
      <PopularMoviesList></PopularMoviesList>
    </div>
  );
}
