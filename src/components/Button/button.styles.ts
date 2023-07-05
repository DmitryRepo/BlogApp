import styled, { css } from 'styled-components';

export type ButtonStyles = {
  success?: boolean;
  bordered?: boolean;
};

export const StyledButton = styled.button<ButtonStyles>`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.heading};
  text-decoration: none;
  background: unset;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px 18px;

  ${({ success }) =>
    success &&
    css`
      color: ${({ theme }) => theme.success};
      border: 1px solid ${({ theme }) => theme.success};

      &:hover {
        background: ${({ theme }) => theme.success};
        color: ${({ theme }) => theme.baseBg};
      }
    `}

  ${({ bordered }) =>
    bordered &&
    css`
      color: ${({ theme }) => theme.text};
      border: 1px solid ${({ theme }) => theme.text};

      &:hover {
        color: ${({ theme }) => theme.baseBg};
        background: ${({ theme }) => theme.text};
      }
    `}
`;

StyledButton.defaultProps = {
  success: false,
};
