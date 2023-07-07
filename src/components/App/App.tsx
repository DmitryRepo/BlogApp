import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ArticlesPage } from '../../pages/ArticlesPage/ArticlesPage';
import { Layout } from '../Layout/Layout';
import { Article } from '../../pages/ArticlePage/ArticlePage';
import { SignUpPage } from '../../pages/SignUpPage/SignUpPage';
import { SignInPage } from '../../pages/SignInPage/SignInPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { CreateArticlePage } from '../../pages/CreateArticlePage/CreateArticlePage';
import { EditArticlePage } from '../../pages/EditArticlePage/EditArticlePage';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { useAppSelector } from '../../store/hooks';
import { selectIsAuth } from '../../store/slices/user-slice';

export const App = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<ArticlesPage />}></Route>
          <Route path={'articles/'} element={<ArticlesPage />}></Route>
          <Route path={'articles/:id'} element={<Article />}></Route>
          <Route
            path={'articles/:id/edit'}
            element={
              <ProtectedRoute isAllowed={isAuth} redirectPath={'/sign-in'}>
                <EditArticlePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={'new-article'}
            element={
              <ProtectedRoute isAllowed={isAuth} redirectPath={'/sign-in'}>
                <CreateArticlePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={'profile'}
            element={
              <ProtectedRoute isAllowed={isAuth} redirectPath={'/sign-in'}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={'sign-in'}
            element={
              <ProtectedRoute isAllowed={!isAuth} redirectPath={'/'}>
                <SignInPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={'sign-up'}
            element={
              <ProtectedRoute isAllowed={!isAuth} redirectPath={'/'}>
                <SignUpPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
