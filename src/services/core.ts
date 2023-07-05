import axios from 'axios';

import { RequestOptions } from '../types/request-options';

const baseUrl = 'https://blog.kata.academy/api/';

type GetResource = (path: string, options: RequestOptions, token?: string) => Promise<any>;

export const getResource: GetResource = async (path, options, token) => {
  return axios({
    ...options,
    url: `${baseUrl}${path}`,
    headers: {
      Authorization: token && `Token ${token}`,
    },
  });
};
