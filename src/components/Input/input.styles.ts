import styled, { css } from 'styled-components';

export type InputStyles = {
  isError?: boolean;
};

export const StyledInput = styled.div<InputStyles>`
  margin-bottom: 12px;

  .input-label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${({ theme }) => theme.text};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .input {
    background: ${({ theme }) => theme.baseBg};
    border: 1px solid ${({ theme }) => theme.normal};
    border-radius: 4px;
    color: ${({ theme }) => theme.text};

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;

    &::placeholder {
      color: ${({ theme }) => theme.normal};
    }

    ${({ isError }) =>
      isError &&
      css`
        border-color: ${({ theme }) => theme.error};
      `}
  }

  .input-error {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${({ theme }) => theme.error};
  }
`;

StyledInput.defaultProps = {
  isError: false,
};
