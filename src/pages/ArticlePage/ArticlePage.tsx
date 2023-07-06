import React, { useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { PostPreview } from '../../components/PostPreview/PostPreview';
import { StyledArticle } from './article.styles';
import { useArticle } from '../../services/articles/hooks';
import { deleteArticle } from '../../services/articles/articles';
import { useAppSelector } from '../../store/hooks';
import { selectToken, selectUserData } from '../../store/slices/user-slice';

export const Article = () => {
  const { id } = useParams();
  const article = useArticle(id || '');
  const token = useAppSelector(selectToken);
  const userData = useAppSelector(selectUserData);

  const [redirected, setRedirected] = useState<boolean>(false);
  const isMyPost = useMemo(() => {
    return userData.username === article?.author.username;
  }, [article]);

  const deleteHandler = async () => {
    if (token && id) {
      const response = await deleteArticle(id, token);

      if (response.status === 204) {
        setRedirected(true);
      }
    }
  };

  if (article) {
    return (
      <>
        {redirected && <Navigate to={'/'} />}
        <StyledArticle>
          <PostPreview {...article} postControl={isMyPost} onDelete={deleteHandler} />
          <div>
            <ReactMarkdown children={article.body} remarkPlugins={[remarkGfm]} />
          </div>
        </StyledArticle>
      </>
    );
  }

  return <StyledArticle>Пост не найден</StyledArticle>;
};
