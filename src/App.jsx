import * as PAGE from './pages';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Wrapper from './layouts';

export default function App() {
  const unprotectedRoutes = [
    {
      pathname: '/registration',
      element: <h1>Registration</h1>
    },
    {
      pathname: '/login',
      element: <h1>Login</h1>
    }
  ];

  const protectedRoutes = [
    {
      pathname: '/',
      element: PAGE.Menu
    },
    {
      pathname: '/menu',
      element: PAGE.Menu
    }
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state).access_token !== undefined;

  useEffect(() => {
    const isAuthRoutes = unprotectedRoutes.find(route => route.pathname === location.pathname);

    if (isLoggedIn && isAuthRoutes) {
      navigate('/');
    };

    if (!isLoggedIn && !isAuthRoutes) {
      navigate('/login');
    };
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <Wrapper>
          <Routes>
            {protectedRoutes.map((route, id) => (
              <Route
                key={id}
                exact
                path={route.pathname}
                element={<route.element />}
              />
            ))}
          </Routes>
        </Wrapper>
      ) : (
        <Routes>
          {unprotectedRoutes.map((route, id) => (
            <Route
              key={id}
              exact
              path={route.pathname}
              element={<route.element />}
            />
          ))}
        </Routes>
      )}
    </>
  );
}