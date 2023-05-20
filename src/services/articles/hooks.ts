import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getArticlesByOffset,
  selectActivePage,
  selectArticles,
  selectPageSize,
} from '../../store/slices/articles-slice';
import { useEffect, useState } from 'react';
import { PostType } from '../../types/post';
import { getArticle } from './articles';

export const useArticlesGetter = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(selectArticles);
  const activePage = useAppSelector(selectActivePage);
  const pageSize = useAppSelector(selectPageSize);

  useEffect(() => {
    const offset = pageSize * (activePage - 1);

    dispatch(getArticlesByOffset({ limit: pageSize, offset }));
  }, [activePage, pageSize]);

  return posts;
};

export const useArticle = (slug: string) => {
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    getArticle(slug).then(({ article }) => setPost(article));
  }, [slug]);

  return post;
};
