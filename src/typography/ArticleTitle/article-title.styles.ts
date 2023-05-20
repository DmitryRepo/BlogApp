import styled from 'styled-components';

export type ArticleTitleStyles = object;

export const StyledArticleTitle = styled.div`
  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.primary};
    margin: 0;
  }
`;
