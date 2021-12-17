import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
