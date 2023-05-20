import styled from 'styled-components';

export type PostHeaderStyles = object;

export const StyledPostHeader = styled.div<PostHeaderStyles>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .title-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .tag-list {
    display: flex;
    gap: 8px;
    margin-top: 5px;
  }
`;

export const StyledPostHeaderProfile = styled.div<PostHeaderStyles>``;
export const StyledPostHeaderInfo = styled.div<PostHeaderStyles>``;
