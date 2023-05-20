import React from 'react';
import { StyledParagraph } from './paragraph.styles';

type Props = {
  children: string;
};
export const Paragraph = (props: Props) => {
  const { children, ...otherProps } = props;

  return <StyledParagraph {...otherProps}>{children}</StyledParagraph>;
};
