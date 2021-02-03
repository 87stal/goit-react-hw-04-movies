import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { searchMoviesByKeyword } from '../../services/themoviedbApi';

const MoviesView = () => {
  const [movieList, setMovieList] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);
  const pageNumber = Number(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('searchQuery') || null;

  useEffect(() => {
    if (searchQuery !== null){
    searchMoviesByKeyword(searchQuery, pageNumber).then(res => {
      setMovieList(res.results);
    });
  }}, [pageNumber, searchQuery]);

  function setSearch(query, page = 1) {
    history.push({
      ...location,
      search: `searchQuery=${query}&page=${page}`,
    });
  }

  function onChangeQuery(query) {
    setSearch(query);
  }

  return (
    <section>
      <h2>Find movie</h2>
      <SearchBox onChangeQuery={onChangeQuery} />
      {searchQuery && movieList?.length > 0 && <MovieList books={movieList} />}
    </section>
  );
};

export default MoviesView;
