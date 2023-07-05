import React from 'react';
import { useParams } from 'react-router-dom';

export const EditArticlePage = () => {
  const { id } = useParams();

  return <div>Edit Article {id}</div>;
};
