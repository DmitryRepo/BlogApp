import styled from 'styled-components';

export type ArticleStyles = object;

export const StyledArticle = styled.div`
  background: ${({ theme }) => theme.baseBg};
  padding: 15px;
`;
