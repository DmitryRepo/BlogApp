import styled from 'styled-components';

export type LoginFormStyles = object;

export const StyledLoginForm = styled.div<LoginFormStyles>`
  background: ${({ theme }) => theme.baseBg};
  border: 1px solid ${({ theme }) => theme.normal};
  box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07), 0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198),
    0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275), 0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035),
    0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725), 0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
  border-radius: 6px;

  width: 384px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 36px 32px;

  .form-title {
    margin: 0 0 21px;

    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: ${({ theme }) => theme.text};
  }

  .form-submit {
    width: 100%;
    box-sizing: border-box;
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    padding: 8px 12px;

    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.baseBg};

    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background: ${({ theme }) => theme.baseBg};
      color: ${({ theme }) => theme.primary};
    }
  }

  .help-text {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    margin: 8px 0 0;

    color: ${({ theme }) => theme.lightText};

    a {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
