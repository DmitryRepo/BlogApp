import { PostResponse, PostsResponse } from '../../types/post';

export type GetArticles = (limit: number, offset: number) => Promise<PostsResponse>;

export type GetArticle = (slug: string) => Promise<PostResponse>;
