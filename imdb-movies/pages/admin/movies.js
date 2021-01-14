import styles from "../../styles/Home.module.css";
import MoviesSearch from "../../components/movies/MoviesSearch";
import PopularMoviesList from "../../components/movies/PopularMoviesList";
import auth0 from '../../utils/auth0';

export default function Movies({ user }) {
  return (
    <div className={styles.container}>
      <MoviesSearch></MoviesSearch>
      <h1 className="font-fira mb-6 text-xl text-yellow-300">Popular movies</h1>
      <PopularMoviesList></PopularMoviesList>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  
  return {
      props: {
        user: session?.user || null,
      },
  };
}
