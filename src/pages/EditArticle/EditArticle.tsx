import React from 'react';
import { useParams } from 'react-router-dom';

export const EditArticle = () => {
  const { id } = useParams();

  return <div>Edit Article {id}</div>;
};
