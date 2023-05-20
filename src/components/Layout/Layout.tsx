import React from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { StyledLayoutContainer } from './layout.styles';

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledLayoutContainer>
        <Outlet />
      </StyledLayoutContainer>
    </>
  );
};
