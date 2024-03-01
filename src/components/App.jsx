import MainLayout from 'layouts/MainLayout/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const MoviesPage = lazy(() => import('page/MoviesPage/MoviesPage'));
const MovieDetailPage = lazy(() =>
  import('page/MovieDetailPage/MovieDetailPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<MovieDetailPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
