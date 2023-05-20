import styled from 'styled-components';
import { Link } from 'react-router-dom';

export type LogoStyles = object;

export const StyledLogo = styled(Link)`
  font-size: 18px;
  line-height: 28px;
  text-decoration: none;
  cursor: pointer;

  color: ${({ theme }) => theme.heading};
`;
