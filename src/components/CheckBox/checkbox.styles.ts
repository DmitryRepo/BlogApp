import styled from 'styled-components';

export type CheckboxStyles = {
  isError: boolean;
};

export const StyledCheckbox = styled.div<CheckboxStyles>`
  .label {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: ${({ theme }) => theme.text};
    }

    input {
      margin-top: 5px;
    }
  }

  .error {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${({ theme }) => theme.error};
  }
`;
