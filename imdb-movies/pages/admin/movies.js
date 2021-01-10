import styles from "../../styles/Home.module.css";
import PopularMoviesList from "../components/movies/PopularMoviesList";

export default function Movies() {
  return (
    <div className={styles.container}>
      <PopularMoviesList></PopularMoviesList>
    </div>
  );
}
