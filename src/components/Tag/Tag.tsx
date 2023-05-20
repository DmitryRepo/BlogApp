import React from 'react';
import { StyledTag, TagStyles } from './tag.styles';

export type TagProps = TagStyles & {
  tag: string;
};

export const Tag = (props: TagProps) => {
  const { tag, ...otherProps } = props;

  return <StyledTag {...otherProps}>{tag}</StyledTag>;
};
