import styles from "../../styles/Home.module.css";
import { MoviesList } from "../../components/movies/MoviesList";

export default function Movies() {
  return (
    <div className="mx-44 mt-5">
      <MoviesList></MoviesList>
    </div>
  );
}
