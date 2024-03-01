import { getMovieDetailsDataAPI } from 'api/moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllReviews = async () => {
      try {
        let data;
        data = await getMovieDetailsDataAPI(`${movieId}/reviews`);
        if (data.results.length === 0) {
          setError('There are no reviews for this movie yet.');
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
  }, [movieId]);

  return (
    <div>
      {loading && <h2>Loadimg</h2>}
      {error && <h5>{error}</h5>}
      {reviewData.length > 0 && (
        <ul className={styles.reviewsList}>
          {reviewData.map(el => {
            return (
              <li key={el.id} className={styles.reviewsListItem}>
                <h3>{el.author}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
