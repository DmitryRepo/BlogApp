import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ArticlesPage } from '../../pages/ArticlesPage/ArticlesPage';
import { Layout } from '../Layout/Layout';
import { Article } from '../../pages/Article/Article';
import { SignUp } from '../../pages/sign-up/SignUp';
import { SignIn } from '../../pages/SignIn/SignIn';
import { Profile } from '../../pages/Profile/P{rofile';
import { CreateArticle } from '../../pages/CreateArticle/CreateArticle';
import { EditArticle } from '../../pages/EditArticle/EditArticle';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<ArticlesPage />}></Route>
          <Route path={'articles/'} element={<ArticlesPage />}></Route>
          <Route path={'articles/:id'} element={<Article />}></Route>
          <Route path={'articles/:id/edit'} element={<EditArticle />}></Route>
          <Route path={'new-article'} element={<CreateArticle />} />
          <Route path={'profile'} element={<Profile />} />
          <Route path={'sign-in'} element={<SignIn />} />
          <Route path={'sign-up'} element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};
