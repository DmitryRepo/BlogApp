import axios from 'axios';

import { RequestOptions } from '../types/request-options';

const baseUrl = 'https://blog.kata.academy/api/';

type GetResource = <T>(path: string, options: RequestOptions) => Promise<{ data: T }>;

export const getResource: GetResource = async (path) => {
  return axios.get(`${baseUrl}${path}`);
};
