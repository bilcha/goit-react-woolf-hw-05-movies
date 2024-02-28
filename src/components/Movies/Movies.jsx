const Movies = () => {
  const searchMovieHandler = e => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={searchMovieHandler}>
        <label htmlFor="movieSearch"></label>
        <input
          // className={styles.inputField}
          id="movieSearch"
          type="text"
          name="name"
          required
          // value={name}
          // onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Movies;
