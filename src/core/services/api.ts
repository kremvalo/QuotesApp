import { create, type ApiResponse } from 'apisauce';
import Config from './config';

const api = create({
  baseURL: Config.api.host,
});

export const getProducts = async (): Promise<any> => {
  try {
    const response: ApiResponse<any> = await api.get('/products');

    return response;
  } catch (error) {}
};
