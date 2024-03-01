import { getMovieDetailsAPI } from 'api/moviesAPI';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './MovieDetailPage.module.css';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        let data;
        data = await getMovieDetailsAPI(movieId);

        setDetails(data);
      } catch (error) {
        console.log(error);
        setError('Oops... Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    movieId && getMovieDetails(movieId);
  }, [movieId]);
  const handleBack = () => {
    navigate(location.state?.from ?? '/');
  };
  return (
    <div>
      <button className={styles.goBackBtn} onClick={handleBack}>
        Go Back
      </button>
      {loading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {details && (
        <div>
          <MovieDetails details={details} />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
