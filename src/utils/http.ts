import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const buildPath = (path: string | null) => {
    return baseURL + path;
}

const http: AxiosInstance = axios.create({
  baseURL
});

http.defaults.headers.post['Content-Type'] = 'application/json';

http.interceptors.response.use(async (response: AxiosResponse) => {
    return response;
  },
(error: AxiosError) => {const { response, request }: {
    response?: AxiosResponse;
    request?: XMLHttpRequest;
  } = error;
    if (response) {
      if (response?.status === 401 && response?.data?.error === "Token expired") {
        console.log("Session Expired")
      }
    } else if (request) {
      console.log('Request failed. Please try again.');
    }
    return Promise.reject(error);
  }
);

export default http;
