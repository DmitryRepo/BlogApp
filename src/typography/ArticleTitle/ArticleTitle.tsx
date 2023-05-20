import React from 'react';
import { ArticleTitleStyles, StyledArticleTitle } from './article-title.styles';
import { Link } from 'react-router-dom';

type TitleLevel = 1 | 3;
type Props = ArticleTitleStyles & {
  level: TitleLevel;
  children: React.ReactNode;
  to?: string | null;
};

const Title = (props: Props) => {
  const { level, children } = props;

  switch (level) {
    case 1:
      return <h1 className={'title'}>{children}</h1>;
    case 3:
      return <h3 className={'title'}>{children}</h3>;
  }
};

export const ArticleTitle = (props: Props) => {
  const { level, children, to } = props;

  const StyledTitle = (
    <StyledArticleTitle>
      <Title level={level}>{children}</Title>
    </StyledArticleTitle>
  );

  return to ? (
    <Link to={to} style={{ textDecoration: 'none' }}>
      {StyledTitle}
    </Link>
  ) : (
    StyledTitle
  );
};
