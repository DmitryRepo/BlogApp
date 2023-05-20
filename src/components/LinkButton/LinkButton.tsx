import React from 'react';

import { LinkButtonStyles, StyledLinkButton } from './linkButton.styles';
import { Link } from 'react-router-dom';

type Props = LinkButtonStyles & {
  to: string;
  label: string;
};

export const LinkButton = (props: Props) => {
  const { to, label, ...otherProps } = props;

  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <StyledLinkButton {...otherProps}>{label}</StyledLinkButton>
    </Link>
  );
};
