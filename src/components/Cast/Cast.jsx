import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieDetailsDataAPI } from 'api/moviesAPI';
import styles from './Cast.module.css';

const Cast = () => {
  const [castData, setCastData] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const path = location.pathname.slice(8).replace('cast', 'credits');
    const getCast = async () => {
      try {
        let data;
        data = await getMovieDetailsDataAPI(path);
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
  }, [location]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {loading && <h1>Loadimg</h1>}
      {error && <h5>{error}</h5>}
      <ul className={styles.castList}>
        {castData &&
          castData.map(el => {
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
    </div>
  );
};

export default Cast;
