import axios from "axios";

const config = environment.api;

let token = "";

const generateHeader = (userHeader: any) => {
  return {
    Authorization: token,
    ACCEPT: "application/json",
    "CONTENT-TYPE": "application/json",
    ...userHeader,
  };
};

const generatePath = (path: string = "") => {
  return `${config.baseUrl}/${path}`;
};

export const get = <TParams, TResponse>(
  path: string,
  params?: TParams,
  header: any = {}
) => {
  return axios.get<TParams, TResponse>(generatePath(path), {
    headers: generateHeader(header),
    params: params,
  });
};

export const post = <TSend, TResponse>(
  path: string,
  data: TSend,
  header: any = {}
) => {
  return axios.post<TResponse>(generatePath(path), data, {
    headers: generateHeader(header),
  });
};

export const put = <TSend, TResponse>(
  path: string,
  data: TSend,
  header: any = {}
) => {
  return axios.put<TResponse>(generatePath(path), data, {
    headers: generateHeader(header),
  });
};

export const deleteRequest = <ID = string>(
  path: string,
  params?: any,
  headers: any = {}
) => {
  return axios.delete<ID>(generatePath(path), {
    headers: generateHeader(headers),
    params: params,
  });
};

const apiService = {
  get,
  post,
  put,
  deleteRequest,
};

export default apiService;
