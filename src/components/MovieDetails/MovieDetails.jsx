import { Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const MovieDetails = ({ details }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const genre = details.genres.map(el => el.name);

  return (
    <>
      <div className={`${styles.wrapper} ${styles.flexWrap}`}>
        <img
          className={styles.poster}
          src={
            details.poster_path
              ? `https://image.tmdb.org/t/p/w500/${details.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <div>
          <h1>{details.title}</h1>
          <p>{details.vote_average}</p>
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <p>{genre.join(', ')}</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
