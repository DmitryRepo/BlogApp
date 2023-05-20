import styled from 'styled-components';

export type ArticlesPageStyles = object;

export const StyledArticlesPage = styled.div<ArticlesPageStyles>`
  .posts {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
`;
