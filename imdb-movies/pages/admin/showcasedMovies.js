import styles from "../../styles/Home.module.css";
import MoviesSearch from "../../components/movies/MoviesSearch";
import MoviesListAdmin from "../../components/movies/MoviesListAdmin";

export default function Movies() {
  return (
    <div className={styles.container}>
      {/* <MoviesSearch></MoviesSearch> */}
      <div className="flex space-x-10 mt-8">
        <a className="font-fira mb-6 text-xl text-white" href="/admin/movies">
          Popular movies
        </a>
        <div className="font-fira mb-6 text-xl text-white"> | </div>
        <h1 className="font-fira mb-6 text-xl text-yellow-300">
          Showcased movies
        </h1>
      </div>
      <MoviesListAdmin></MoviesListAdmin>
    </div>
  );
}
