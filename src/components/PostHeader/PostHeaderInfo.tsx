import React from 'react';
import { ArticleTitle } from '../../typography/ArticleTitle/ArticleTitle';
import { Like, LikeProps } from '../Like/Like';
import { StyledPostHeaderInfo } from './post-header.styles';
import { Tag } from '../Tag/Tag';

export type PostHeaderInfoProps = LikeProps & {
  titleContent: string;
  tagList: string[];
  slug?: string;
};

export const PostHeaderInfo = (props: PostHeaderInfoProps) => {
  const { titleContent, favoritesCount, favorited, tagList, slug } = props;
  const tags = tagList.map((tag, i) => <Tag key={`tag_${i}`} tag={tag} />);

  return (
    <StyledPostHeaderInfo>
      <div className={'title-wrapper'}>
        <ArticleTitle level={3} to={slug ? `articles/${slug}` : null}>
          {titleContent}
        </ArticleTitle>
        <Like favorited={favorited} favoritesCount={favoritesCount} />
      </div>
      <div className="tag-list">{tags}</div>
    </StyledPostHeaderInfo>
  );
};
