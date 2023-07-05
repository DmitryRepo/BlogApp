import { PostResponse, PostsResponse } from '../../types/post';

export type GetArticles = (limit: number, offset: number, token?: string) => Promise<PostsResponse>;

export type GetArticle = (slug: string, token?: string) => Promise<PostResponse>;