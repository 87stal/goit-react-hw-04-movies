import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { popularFetch } from '../../services/themoviedbApi';

function HomeView() {
  const [popularMovieList, setPopularMovieList] = useState(null);
  const location = useLocation();


  const searchParams = new URLSearchParams(location.search);
  const pageNumber = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    popularFetch(pageNumber).then(res => {
      setPopularMovieList(res.results);
    });
  }, [pageNumber]);



  return (
    <section>
      <h2>Popular movies</h2>
      {popularMovieList?.length > 0 && (
        <>
          <MovieList books={popularMovieList} />
        </>
      )}
    </section>
  );
}

export default HomeView;
