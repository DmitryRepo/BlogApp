import { PostResponse, PostsResponse } from '../../types/post';

export type GetArticles = (limit: number, offset: number, token?: string) => Promise<PostsResponse>;

export type GetArticle = (slug: string, token?: string) => Promise<PostResponse>;

export type CreateArticleData = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export type CreateArticle = (data: CreateArticleData, token: string) => Promise<PostResponse>;

export type DeleteArticle = (slug: string, token: string) => Promise<any>;

export type UpdateArticle = (slug: string, token: string, article: CreateArticleData) => Promise<PostResponse>;
