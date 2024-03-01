import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGE0YTM3MDM1NTM2MWEyYTQ4MTQ1OWExMzU0NTc4MiIsInN1YiI6IjY1ZGU5Y2JjOGM0NGI5MDE3YzEzNzhjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Cov2tBmWdZO0wVVJnB0BAN5OMqJn3c_EyUSJoZKJZM',
};

export const getMoviesAPI = async () => {
  const { data } = await axios('trending/movie/day?language=en-US', {
    headers: headers,
  });
  return data.results;
};

export const getFilteredMoviesAPI = async queryString => {
  const { data } = await axios(
    `search/movie?include_adult=false&language=en-US&page=1&query=${queryString}`,
    { headers: headers }
  );
  return data.results;
};

export const getMovieDetailsAPI = async id => {
  const { data } = await axios(`movie/${id}?language=en-US&`, {
    headers: headers,
  });
  return data;
};

export const getMovieDetailsDataAPI = async path => {
  const { data } = await axios(`movie/${path}?language=en-US&`, {
    headers: headers,
  });
  return data;
};
