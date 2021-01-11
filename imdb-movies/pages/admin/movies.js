import styles from "../../styles/Home.module.css";
import MoviesSearch from "../../components/movies/MoviesSearch";
import PopularMoviesList from "../../components/movies/PopularMoviesList";

export default function Movies() {
  return (
    <div className={styles.container}>
      <MoviesSearch></MoviesSearch>
      <PopularMoviesList></PopularMoviesList>
    </div>
  );
}
