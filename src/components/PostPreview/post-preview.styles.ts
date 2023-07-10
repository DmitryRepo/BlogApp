import styled from 'styled-components';

export type PostPreviewStyles = object;

export const StyledPostPreview = styled.div<PostPreviewStyles>`
  .post-description {
    margin-right: 0px;
    margin-top: 10px;
    display:flex;
    justify-content:space-between;
  }
  .post-btns {
    display:flex;
    gap:10px;
  }
`;
