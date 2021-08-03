import { AxiosResponse } from 'axios';

import agent from 'src/agent';

import { AuthResponse, LoginRequest, RegisterRequest } from './auth.types';

const TOKEN_NAME = 'token';

export const setToken = (token?: string) => {
  if (token) {
    localStorage.setItem(TOKEN_NAME, token);
  }
};

export const removeToken = () => localStorage.removeItem(TOKEN_NAME);

export const getToken = () => localStorage.getItem(TOKEN_NAME);

export const login = async (data: LoginRequest): Promise<AxiosResponse<AuthResponse>> => {
  const res = await agent.post('/auth/login', data);
  setToken(res?.data?.token);

  return res;
};

export const register = async (data: RegisterRequest): Promise<AxiosResponse<AuthResponse>> => {
  const res = await agent.post('/auth/register', data);
  setToken(res?.data?.token);

  return res;
};
