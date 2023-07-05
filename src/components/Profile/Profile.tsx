import React from 'react';
import { PostAuthorType } from '../../types/post';
import { StyledProfile, StyledProfileImage, StyledProfileInfo } from './profile.styles';
import { Link } from 'react-router-dom';

type ProfleProps = {
  author: PostAuthorType;
  subtitle?: string;
  to?: string;
};

export const Profile = (props: ProfleProps) => {
  const { author, subtitle, to } = props;

  const profileContent = (
    <div className={'wrapper'}>
      <StyledProfileInfo>
        <h4 className="name">{author.username}</h4>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </StyledProfileInfo>
      <StyledProfileImage>{author.image && <img src={author.image} alt="" />}</StyledProfileImage>
    </div>
  );

  return <StyledProfile>{to ? <Link to={to}>{profileContent}</Link> : profileContent}</StyledProfile>;
};
