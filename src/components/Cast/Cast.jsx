import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsDataAPI } from 'api/moviesAPI';
import styles from './Cast.module.css';

const Cast = () => {
  const [castData, setCastData] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const getCast = async () => {
      try {
        let data;
        data = await getMovieDetailsDataAPI(`${movieId}/credits`);
        if (data.cast.length === 0) {
          setError('There is no cast data for this movie.');
        } else {
          setCastData(data.cast);
        }
      } catch (error) {
        console.log(error);
        setError('Oops... Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {loading && <h2>Loadimg</h2>}
      {error && <h5>{error}</h5>}

      {castData.length > 0 && (
        <ul className={styles.castList}>
          {castData.map(el => {
            return (
              <li key={el.id} className={styles.castListItem}>
                <img
                  className={styles.castListImage}
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                      : defaultImg
                  }
                  width={100}
                  alt="Actor"
                />
                <h3 className={styles.actorName}>{el.name}</h3>
                {el.character && (
                  <p className={styles.charachterField}>
                    <b>Character: </b>
                    {el.character}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
