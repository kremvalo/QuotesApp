import { create, type ApiResponse } from 'apisauce';
import Config from './config';

const api = create({
  baseURL: Config.api.host,
  headers: {
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVkIjoiVFZSWk5VNTZRVEZOVkdkNFRuYzlQUT09IiwiZXhwaXJlIjoiVFZSWk5VNTZSWHBQUkVsNFRuYzlQUT09IiwidXNlcklkIjoiVFZFOVBRPT0ifQ.eiimMh6QyqokrSH9yBJS8AV1UVC16TYamRERiiBAu5c',
  },
});

export const getProducts = async (): Promise<any> => {
  try {
    const response: ApiResponse<any> = await api.get('/products');
    return response;
  } catch (error) {}
};
