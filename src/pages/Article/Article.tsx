import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { PostPreview } from '../../components/PostPreview/PostPreview';
import { StyledArticle } from './article.styles';
import { useArticle } from '../../services/articles/hooks';

export const Article = () => {
  const { id } = useParams();
  const article = useArticle(id || '');

  if (article) {
    return (
      <StyledArticle>
        <PostPreview {...article} />
        <div>
          <ReactMarkdown children={article.body} remarkPlugins={[remarkGfm]} />
        </div>
      </StyledArticle>
    );
  }

  return <StyledArticle>Пост не найден</StyledArticle>;
};
