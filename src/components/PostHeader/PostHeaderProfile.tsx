import React from 'react';
import { format } from 'date-fns';

import { StyledPostHeaderProfile } from './post-header.styles';
import { PostAuthorType } from '../../types/post';
import { Profile } from '../Profile/Profile';

export type PostHeaderProfileProps = {
  author: PostAuthorType;
  createdAt: string;
};
export const PostHeaderProfile = (props: PostHeaderProfileProps) => {
  const { author, createdAt } = props;
  const createDate = new Date(createdAt);

  return (
    <StyledPostHeaderProfile>
      <Profile author={author} subtitle={format(createDate, 'PP')} />
    </StyledPostHeaderProfile>
  );
};
