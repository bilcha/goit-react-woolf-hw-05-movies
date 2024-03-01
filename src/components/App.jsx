import MainLayout from 'layouts/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'page/HomePage/HomePage';
import MoviesPage from 'page/MoviesPage/MoviesPage';
import { Suspense } from 'react';
import MovieDetailPage from 'page/MovieDetailPage/MovieDetailPage';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route
            path="movies/:movieId"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <MovieDetailPage />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
