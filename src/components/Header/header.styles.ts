import styled from 'styled-components';

export type HeaderStyles = object;

export const StyledHeader = styled.header<HeaderStyles>`
  background: ${({ theme }) => theme.baseBg};
  padding: 15px 22px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .btns {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
