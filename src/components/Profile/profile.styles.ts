import styled from 'styled-components';

export type ProfileStyles = object;

export const StyledProfile = styled.div<ProfileStyles>`
  .wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledProfileInfo = styled.div<ProfileStyles>`
  text-align: right;

  .name {
    font-size: 18px;
    line-height: 28px;
    color: ${({ theme }) => theme.heading};
    margin: 0;
  }

  .subtitle {
    font-size: 12px;
    line-height: 22px;
    color: ${({ theme }) => theme.textSecondary};
    margin: 0;
  }
`;

export const StyledProfileImage = styled.div<ProfileStyles>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ theme }) => theme.text};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
