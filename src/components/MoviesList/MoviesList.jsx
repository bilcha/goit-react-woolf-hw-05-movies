import { getFilteredMoviesAPI, getMoviesAPI } from 'api/moviesAPI';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = () => {
  const [moviesItems, setMoviesItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        let data;
        const query = searchParams.get('query');
        if (query) {
          data = await getFilteredMoviesAPI(query);
        } else {
          data = await getMoviesAPI();
        }
        if (data.length === 0) {
          setError("Sorry, we didn't find anything for your request.");
        } else {
          setMoviesItems(data);
        }
      } catch (error) {
        console.log(error);
        setError('Oops... Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [searchParams]);

  return (
    <>
      {loading && <h2>Loadimg</h2>}
      {error && <h4>{error}</h4>}
      <ul className={styles.moviesList}>
        {moviesItems.map(el => {
          return (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={{ from: location }}>
                {el.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MoviesList;
