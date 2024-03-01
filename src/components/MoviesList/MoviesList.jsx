import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <>
      <ul className={styles.moviesList}>
        {data.map(el => {
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
