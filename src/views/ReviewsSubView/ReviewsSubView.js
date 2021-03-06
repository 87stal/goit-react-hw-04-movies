import React from 'react';
import Notification from '../../components/Notification/Notification';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/themoviedbApi';

function ReviewsSubView() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsById(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <div>
          <h3>Reviews</h3>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <div>{review.author}</div>
                <div>{review.created_at}</div>
                <div>{review.content}</div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Notification message="We don't have any reviews for this movie." />
      )}
    </>
  );
}

export default ReviewsSubView;
