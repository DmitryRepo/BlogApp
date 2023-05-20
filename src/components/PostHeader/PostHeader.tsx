import React from 'react';

import { PostHeaderStyles, StyledPostHeader } from './post-header.styles';
import { PostHeaderInfo, PostHeaderInfoProps } from './PostHeaderInfo';
import { PostHeaderProfile, PostHeaderProfileProps } from './PostHeaderProfile';

type Props = PostHeaderStyles & PostHeaderInfoProps & PostHeaderProfileProps;

export const PostHeader = (props: Props) => {
  const { titleContent, favoritesCount, favorited, tagList, createdAt, author, slug } = props;

  return (
    <StyledPostHeader {...props}>
      <PostHeaderInfo
        titleContent={titleContent}
        favoritesCount={favoritesCount}
        favorited={favorited}
        tagList={tagList}
        slug={slug}
      />
      <PostHeaderProfile createdAt={createdAt} author={author} />
    </StyledPostHeader>
  );
};
