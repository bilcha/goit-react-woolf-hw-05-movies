import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Movies.module.css';
import SearchForm from 'components/SearchForm/SearchForm';
import { getFilteredMoviesAPI } from 'api/moviesAPI';

const Movies = () => {
  const [moviesItems, setMoviesItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesListIsShowing, setMoviesListIsShowing] = useState(false);
  const [error, setError] = useState('');

  const getMoviesByName = queryParam => {
    setSearchParams({ query: queryParam });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      debugger;
      const getMovies = async () => {
        try {
          let data;
          data = await getFilteredMoviesAPI(query);
          if (data.length === 0) {
            setError("Sorry, we didn't find anything for your request.");
          } else {
            setMoviesListIsShowing(true);
            setMoviesItems(data);
          }
        } catch (error) {
          console.log(error);
          setError('Oops... Something went wrong. Please try again later.');
        } finally {
        }
      };
      getMovies();
    }
  }, [searchParams]);

  return (
    <div className={styles.formWrapper}>
      <SearchForm getMoviesByName={getMoviesByName} />
      {moviesListIsShowing && <MoviesList data={moviesItems} />}
      {error && <h5>{error}</h5>}
    </div>
  );
};

export default Movies;
