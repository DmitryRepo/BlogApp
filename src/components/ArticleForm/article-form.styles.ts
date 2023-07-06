import styled, { css } from 'styled-components';

export type ArticleFormStyles = {
  hasTags?: boolean;
};

export const StyledArticleForm = styled.div<ArticleFormStyles>`
  background: ${({ theme }) => theme.baseBg};
  border: 1px solid ${({ theme }) => theme.normal};
  box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07), 0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198),
    0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275), 0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035),
    0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725), 0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
  border-radius: 6px;
  padding: 48px 32px;
  width: 100%;
  box-sizing: border-box;

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: ${({ theme }) => theme.text};

    margin: 0;
  }

  .form-submit {
    width: 320px;
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
`;

export const StyledArticleFormTags = styled.div<ArticleFormStyles>`
  .tag-container {
    position: relative;
  }

  .tag-wrapper {
    display: grid;
    grid-template-columns: 300px 120px;
    align-items: start;
    gap: 10px;
  }

  .label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    color: ${({ theme }) => theme.text};
  }

  .tags {
    margin-top: 10px;
  }

  .add-btn-wrapper {
    ${({ hasTags }) =>
      hasTags &&
      css`
        position: absolute;
        bottom: 18px;
        left: 450px;
      `}
  }

  .error {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${({ theme }) => theme.error};
  }
`;
