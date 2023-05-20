import styled from 'styled-components';

export type TagStyles = object;

export const StyledTag = styled.div<TagStyles>`
  display: inline-block;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.textSecondary};
  padding: 3px 5px;
  border: 1px solid ${({ theme }) => theme.textSecondary};
  border-radius: 2px;
`;
