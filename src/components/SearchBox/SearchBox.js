import  React from 'react';
import { useState } from 'react';
import styles from './SearchBox.module.css'

function SearchBox({ onChangeQuery }) {
  const [userQuery, setUserQuery] = useState('');

  const onChange = event => {
    setUserQuery(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    onChangeQuery(userQuery);
    setUserQuery('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="userQuery"
        onChange={onChange}
        value={userQuery}
        placeholder="Search movies"
      />
      <button className={styles.button} type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
