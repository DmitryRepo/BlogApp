import { getResource } from '../core';
import { CreateArticle, DeleteArticle, GetArticle, GetArticles, UpdateArticle } from './types';

export const getArticles: GetArticles = async (limit, offset, token) => {
  const response = await getResource(`articles?limit=${limit}&offset=${offset}`, { method: 'GET' }, token);

  return response.data;
};

export const getArticle: GetArticle = async (slug, token) => {
  const response = await getResource(`articles/${slug}`, { method: 'GET' }, token);

  return response.data;
};

export const createArticle: CreateArticle = async (data, token) => {
  const response = await getResource(
    `articles/`,
    {
      method: 'POST',
      data: {
        article: data,
      },
    },
    token
  );

  return response.data;
};

export const deleteArticle: DeleteArticle = async (slug, token) => {
  return await getResource(
    `articles/${slug}`,
    {
      method: 'DELETE',
    },
    token
  );
};

export const updateArticle: UpdateArticle = async (slug, token, data) => {
  const response = await getResource(
    `articles/${slug}`,
    {
      method: 'PUT',
      data: { article: data },
    },
    token
  );

  return response.data;
};
