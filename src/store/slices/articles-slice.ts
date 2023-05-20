import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PostsResponse, PostType } from '../../types/post';
import { getArticles } from '../../services/articles/articles';

type ArticlesState = {
  posts: PostType[];
  pageSize: number;
  activePage: number;
  articlesCount: number;
};

const initialState: ArticlesState = {
  posts: [],
  pageSize: 5,
  activePage: 1,
  articlesCount: 0,
};

export const getArticlesByOffset = createAsyncThunk(
  'articles/getArticlesByPage',
  async ({ limit, offset }: { limit: number; offset: number }): Promise<PostsResponse> => {
    const response = await getArticles(limit, offset);
    return response;
  }
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArticlesByOffset.fulfilled, (state, action: PayloadAction<PostsResponse>) => {
      state.posts = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
    });
  },
});

export const { setActivePage } = articlesSlice.actions;

export const selectArticles = (state: RootState) => state.articles.posts;
export const selectActivePage = (state: RootState) => state.articles.activePage;
export const selectArticlesCount = (state: RootState) => state.articles.articlesCount;
export const selectPageSize = (state: RootState) => state.articles.pageSize;

export const articlesReducer = articlesSlice.reducer;
