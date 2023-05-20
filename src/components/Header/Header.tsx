import React from 'react';
import { LinkButton } from '../LinkButton/LinkButton';
import { StyledHeader } from './header.styles';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <div className="btns">
        <LinkButton to={'sign-in'} label={'Sign in'} />
        <LinkButton to={'sign-up'} label={'Sign up'} success />
      </div>
    </StyledHeader>
  );
};
