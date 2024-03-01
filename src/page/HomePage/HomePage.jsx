import { getMoviesAPI } from 'api/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [error, setError] = useState('');
  const [moviesItems, setMoviesItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        let data;
        data = await getMoviesAPI();

        if (data.length === 0) {
          setError("Sorry, we didn't find anything for your request.");
        } else {
          setMoviesItems(data);
        }
      } catch (error) {
        console.log(error);
        setError('Oops... Something went wrong. Please try again later.');
      } finally {
      }
    };
    getMovies();
  }, []);
  return (
    <div className={styles.homePageWrapper}>
      <h2>Trending today</h2>
      <MoviesList data={moviesItems} />
      {error && <h4>{error}</h4>}
    </div>
  );
};

export default HomePage;
