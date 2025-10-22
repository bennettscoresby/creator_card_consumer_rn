import axios, { AxiosRequestConfig } from 'axios';
import { resilience } from './axios';

// Create axios instance with your existing retry logic
const axiosWithRetry = axios.create();
resilience(axiosWithRetry);

// Convert fetch RequestInit to axios config
const fetchToAxiosConfig = (url: string, init?: RequestInit): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {
    url,
    method: (init?.method || 'GET') as any,
    timeout: 10000,
  };

  if (init?.body) {
    if (typeof init.body === 'string') {
      try {
        config.data = JSON.parse(init.body);
      } catch {
        config.data = init.body;
      }
    } else {
      config.data = init.body;
    }
  }

  if (init?.headers) {
    config.headers = init.headers as any;
  }

  return config;
};

// Convert axios response to fetch Response
const axiosToFetchResponse = (axiosResponse: any): Response => {
  const body = typeof axiosResponse.data === 'string' 
    ? axiosResponse.data 
    : JSON.stringify(axiosResponse.data);

  return new Response(body, {
    status: axiosResponse.status,
    statusText: axiosResponse.statusText,
    headers: axiosResponse.headers,
  });
};

// Your custom fetch that uses axios with retry logic
export const fetchWithRetry: typeof fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input.toString();
  
  try {
    const axiosConfig = fetchToAxiosConfig(url, init);
    const axiosResponse = await axiosWithRetry.request(axiosConfig);
    return axiosToFetchResponse(axiosResponse);
  } catch (error: any) {
    // Convert axios error to fetch error
    if (error.response) {
      return axiosToFetchResponse(error.response);
    }
    throw error;
  }
};
