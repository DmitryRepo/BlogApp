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
import { pathes } from '../../consts/consts'

export const App = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <>
      <Routes>
        <Route path={pathes.HOME} element={<Layout />}>
          <Route index element={<ArticlesPage />}></Route>
          <Route path={pathes.ARTICLES} element={<ArticlesPage />}></Route>
          <Route path={pathes.ARTICLE} element={<Article />}></Route>
          <Route
            path={pathes.ARTICLE_EDIT}
            element={
              <ProtectedRoute isAllowed={isAuth} redirectPath={'/sign-in'}>
                <EditArticlePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={pathes.NEW_ARTICLE}
            element={
              <ProtectedRoute isAllowed={isAuth} redirectPath={'/sign-in'}>
                <CreateArticlePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={pathes.PROFILE}
            element={
              <ProtectedRoute isAllowed={isAuth} redirectPath={'/sign-in'}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={pathes.SIGN_IN}
            element={
              <ProtectedRoute isAllowed={!isAuth} redirectPath='/'>
                <SignInPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={pathes.SIGN_UP}
            element={
              <ProtectedRoute isAllowed={!isAuth} redirectPath='/'>
                <SignUpPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
