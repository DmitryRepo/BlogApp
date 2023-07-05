import React, { ReactElement } from 'react';
import { ButtonStyles, StyledButton } from './button.styles';

type Props = ButtonStyles & {
  children: ReactElement | string;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  const { children, ...otherProps } = props;

  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
