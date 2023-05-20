import styled, { css } from 'styled-components';

export type LinkButtonStyles = {
  success?: boolean;
};

export const StyledLinkButton = styled.span<LinkButtonStyles>`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.heading};
  text-decoration: none;

  ${({ success }) =>
    success &&
    css`
      padding: 8px 18px;
      color: ${({ theme }) => theme.success};
      border: 1px solid ${({ theme }) => theme.success};
      border-radius: 5px;

      &:hover {
        background: ${({ theme }) => theme.success};
        color: ${({ theme }) => theme.baseBg};
      }
    `}
`;

StyledLinkButton.defaultProps = {
  success: false,
};
