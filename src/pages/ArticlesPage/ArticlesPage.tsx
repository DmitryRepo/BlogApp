import React from 'react';
import { StyledArticlesPage } from './articles-page.styles';
import { Post } from '../../components/Post/Post';
import { Pagination } from 'antd';
import { useArticlesGetter } from '../../services/articles/hooks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectActivePage,
  selectArticlesCount,
  selectPageSize,
  setActivePage,
} from '../../store/slices/articles-slice';

export const ArticlesPage = () => {
  const posts = useArticlesGetter();

  const dispatch = useAppDispatch();
  const postsCount = useAppSelector(selectArticlesCount);
  const activePage = useAppSelector(selectActivePage);
  const pageSize = useAppSelector(selectPageSize);

  const postsElems = posts.map((post) => <Post key={`slug_${post.slug}`} {...post} />);

  const onPageChange = (page: number) => {
    dispatch(setActivePage(page));
  };

  return (
    <StyledArticlesPage>
      <div className="posts">{postsElems}</div>
      <div className="pagination">
        <Pagination
          total={postsCount}
          current={activePage}
          defaultPageSize={pageSize}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>
    </StyledArticlesPage>
  );
};
