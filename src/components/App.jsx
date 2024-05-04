import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { GlobalStyle } from 'styles/GlobalStyles';

const Home = lazy(() => import('../Pages/Home/Home'));
const Catalog = lazy(() => import('../Pages/Catalog/Catalog'));
const Favorite = lazy(() => import('../Pages/Favorite/Favorite'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              This page was not found. Back to{' '}
              <NavLink to="/catalog">Catalog</NavLink>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};
