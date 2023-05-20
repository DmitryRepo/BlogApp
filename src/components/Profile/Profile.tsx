import React from 'react';
import { PostAuthorType } from '../../types/post';
import { StyledProfile, StyledProfileImage, StyledProfileInfo } from './profile.styles';

type ProfleProps = {
  author: PostAuthorType;
  subtitle?: string;
};

export const Profile = (props: ProfleProps) => {
  const { author, subtitle } = props;

  return (
    <StyledProfile>
      <StyledProfileInfo>
        <h4 className="name">{author.username}</h4>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </StyledProfileInfo>
      <StyledProfileImage>
        <img src={author.image} alt="" />
      </StyledProfileImage>
    </StyledProfile>
  );
};
