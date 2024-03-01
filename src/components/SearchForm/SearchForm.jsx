import { useState } from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ getMoviesByName }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchMovieHandler = e => {
    e.preventDefault();
    searchQuery.length > 0 && getMoviesByName(searchQuery);
  };
  const handleChange = e => {
    setSearchQuery(e.target.value.trim());
  };
  return (
    <form onSubmit={searchMovieHandler}>
      <label htmlFor="movieSearch"></label>
      <input
        className={styles.inputField}
        id="movieSearch"
        type="search"
        name="name"
        required
        value={searchQuery}
        onChange={handleChange}
      />
      <button className={styles.searchBtn}>Search</button>
    </form>
  );
};

export default SearchForm;
