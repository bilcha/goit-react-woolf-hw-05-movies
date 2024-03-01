import { getMovieDetailsDataAPI } from 'api/moviesAPI';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const path = location.pathname.slice(8);
    const getAllReviews = async () => {
      try {
        let data;
        data = await getMovieDetailsDataAPI(path);
        if (data.results.length === 0) {
          setError('There is no reviews for this movie yet.');
        } else {
          setReviewData(data.results);
        }
      } catch (error) {
        console.log(error);
        setError('Oops... Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getAllReviews();
  }, [location]);

  return (
    <div>
      {loading && <h2>Loadimg</h2>}
      {error && <h5>{error}</h5>}
      <ul className={styles.reviewsList}>
        {reviewData &&
          reviewData.map(el => {
            return (
              <li key={el.id} className={styles.reviewsListItem}>
                <h3>{el.author}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Reviews;
