import styled, { css } from 'styled-components';

export type LikeStyles = {
  active?: boolean;
};

export const StyledLike = styled.div<LikeStyles>`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    fill: transparent;
    stroke: ${({ theme }) => theme.textSecondary};
    cursor: pointer;

    ${({ active }) =>
      active &&
      css`
        fill: ${({ theme }) => theme.error};
        stroke: ${({ theme }) => theme.error};
      `}
  }

  span {
    display: flex;
    align-items: center;
  }

  .likes-count {
    font-size: 12px;
    line-height: 22px;
    color: ${({ theme }) => theme.text};
  }
`;

StyledLike.defaultProps = {
  active: false,
};
