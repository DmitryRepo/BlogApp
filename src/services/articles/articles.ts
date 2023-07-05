import { getResource } from '../core';
import { GetArticle, GetArticles } from './types';

export const getArticles: GetArticles = async (limit, offset, token) => {
  const response = await getResource(`/articles?limit=${limit}&offset=${offset}`, { method: 'GET' }, token);

  return response.data;
};

export const getArticle: GetArticle = async (slug, token) => {
  const response = await getResource(`/articles/${slug}`, { method: 'GET' }, token);

  return response.data;
};
