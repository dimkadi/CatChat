import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoaderWrapper from './components/hoc/LoaderWrapper';
import HomePage from './components/pages/HomePage';
import FriendsPage from './components/pages/FriendsPage';
import ProtectedRoute from './components/hoc/ProtectedRoute';
import NavBar from './components/ui/NavBar';
import AuthPage from './components/pages/AuthPage';
import { checkAuth } from './redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { SOCKET_INIT } from './types/wsTypes';

function App(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user.id) {
      dispatch({ type: SOCKET_INIT });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  return (
    <Container>
      <LoaderWrapper>
        <>
          <NavBar />
          {!user.loading ? (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<ProtectedRoute isAllowed={!!user?.id} />}>
                <Route path="/friends" element={<FriendsPage />} />
              </Route>
              <Route element={<ProtectedRoute isAllowed={!user?.id} />}>
                <Route path="/:auth" element={<AuthPage />} />
              </Route>
            </Routes>
          ) : (
            <div />
          )}
        </>
      </LoaderWrapper>
    </Container>
  );
}

export default App;
