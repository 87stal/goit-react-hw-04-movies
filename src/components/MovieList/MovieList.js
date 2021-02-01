import  React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

import { BASE_URL_POSTER } from '../../services/themoviedbApi';

function MovieList({ books }) {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {books &&
        books.map(movie => (
          <li key={movie.id} className={styles.item}>
            <Link
              to={{
                pathname: `/movie/${movie.id}`,
                state: { from: location },
              }}
              className={styles.link}
            >
              <img
                className={styles.poster}
                src={`${BASE_URL_POSTER}${movie.poster_path}`}
                alt={movie.original_name || movie.original_title || movie.title}
              />
              <h3 className={styles.title}>
                {movie.original_name || movie.original_title || movie.title}
              </h3>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default MovieList;
