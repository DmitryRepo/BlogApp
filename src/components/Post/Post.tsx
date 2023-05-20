import React from 'react';

import { PostStyles, StyledPost } from './post.styles';
import { PostType } from '../../types/post';
import { PostPreview } from '../PostPreview/PostPreview';

type Props = PostStyles & PostType;
export const Post = (props: Props) => {
  return (
    <StyledPost>
      <PostPreview {...props} />
    </StyledPost>
  );
};
