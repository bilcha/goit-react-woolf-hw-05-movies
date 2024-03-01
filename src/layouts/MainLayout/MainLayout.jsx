import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<h2>loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
