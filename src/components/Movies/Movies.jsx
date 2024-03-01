import MoviesList from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();
  const [moviesListIsShowing, setMoviesListIsShowing] = useState(false);
  const searchMovieHandler = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
    // setSearchQuery('');
    setMoviesListIsShowing(true);
  };
  const handleChange = e => {
    let filter = e.target.value.trim();
    filter.length > 0 && setSearchQuery(filter);
  };
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={searchMovieHandler}>
        <label htmlFor="movieSearch"></label>
        <input
          className={styles.inputField}
          id="movieSearch"
          type="search"
          name="name"
          required
          value={searchQuery}
          onChange={handleChange}
        />
        <button className={styles.searchBtn}>Search</button>
      </form>
      {moviesListIsShowing && <MoviesList />}
    </div>
  );
};

export default Movies;
