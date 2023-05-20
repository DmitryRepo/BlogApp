import React from 'react';
import { ReactSVG } from 'react-svg';

import like from './like.svg';
import { StyledLike } from './like.styles';

export type LikeProps = {
  favorited: boolean;
  favoritesCount: number;
};

export const Like = (props: LikeProps) => {
  const { favorited, favoritesCount } = props;

  const likeHandler = () => {
    console.log('liked');
  };

  return (
    <StyledLike onClick={likeHandler} active={favorited}>
      <ReactSVG src={like} wrapper={'span'} />
      <span className="likes-count">{favoritesCount}</span>
    </StyledLike>
  );
};
