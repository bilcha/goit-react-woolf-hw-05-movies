import MainLayout from 'layouts/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'page/HomePage/HomePage';
import MoviesPage from 'page/MoviesPage/MoviesPage';

const App = () => {
  return (
    <>
      <MainLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
export default App;
