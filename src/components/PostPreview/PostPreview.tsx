import React from 'react';
import { PostHeader } from '../PostHeader/PostHeader';
import { Paragraph } from '../../typography/Paragraph/Paragraph';
import { PostPreviewStyles, StyledPostPreview } from './post-preview.styles';
import { PostType } from '../../types/post';

type Props = PostPreviewStyles & PostType;

export const PostPreview = (props: Props) => {
  const { title, favorited, favoritesCount, tagList, author, createdAt, description, slug } = props;

  return (
    <StyledPostPreview>
      <PostHeader
        titleContent={title}
        favorited={favorited}
        favoritesCount={favoritesCount}
        tagList={tagList}
        author={author}
        createdAt={createdAt}
        slug={slug}
      />
      <div className="post-description">
        <Paragraph>{description}</Paragraph>
      </div>
    </StyledPostPreview>
  );
};
