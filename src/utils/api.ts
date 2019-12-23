export const API_URL = '';

let refreshToken: string = '';
let accessToken: string = '';

const getHeaders = (headers: Map<string,string>|{} = {}): Headers => {
  const allHeaders = new Headers();
  allHeaders.append('Accept', 'application/json');
  allHeaders.append('Authorization', '');
  allHeaders.append('Content-Type', 'application/json');
  allHeaders.append('token', accessToken);
  Object.entries(headers).forEach(([key,value]) => allHeaders.append(key,value));
  // const allHeaders = {
  //   Accept: 'application/json',
  //   Authorization: 'obh
  //   'Content-Type': 'application/json',
  //   token: accessToken,
  //   ...headers,
  // };

  if (accessToken) {
    allHeaders.append('Authorization', accessToken);
  }

  return allHeaders;
};

interface IFetchAsyncParams {
  headers?: Map<string,string>,
  method: string,
  body?: object,
}


interface IFetchParams {
  headers: Headers,
  method: string,
  body?: string,
}

const fetchAsync = async(url: string, { method = 'GET', body, headers } : IFetchAsyncParams) => {
  // await response of fetch call
  const params: IFetchParams = {
    headers: new Headers(),
    method: '',
  };

  params.headers = getHeaders(headers);
  params.method = method;

  if (body && (method !== 'GET' && method !== 'HEAD')) {
    params.body = JSON.stringify(body);
  }

  let response = await fetch(url, params);

  if (response && response.status === 403) {
    params.headers.append('token',refreshToken);
    response = await fetch(url, params);
  }

  // only proceed once promise is resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
};

export const setAuthToken = (token: string) => {
  accessToken = token;
};

export const resetAuthToken = () => {
  accessToken = '';
};

export const setRefreshToken = (token: string) => {
  refreshToken = token;
};

export const resetRefreshToken = () => {
  refreshToken = '';
};

const parseQuery = (query?: object) => {
  let queryString = '';

  if (query && typeof query === 'object') {
    const entries = Object.entries(query);

    queryString += entries.reduce((acc, [key, val]) => {
      return `${acc}&${encodeURI(key)}=${encodeURI(val)}`;
    }, '?');
  }

  return queryString;
};

export const get = async(endpoint: string, query?: object) => {
  let url = `${API_URL}/${endpoint}`;

  url += parseQuery(query);

  const data = await fetchAsync(url, { method: 'GET' });

  return data;
};

export const post = async(endpoint: string, data?: object, query?: object) => {
  let url = `${API_URL}/${endpoint}`;
  url += parseQuery(query);
  const res = await fetchAsync(url, { method: 'POST', body: data });

  return res;
};

export const put = async(endpoint: string, data: object, query?: object) => {
  let url = `${API_URL}/${endpoint}`;
  url += parseQuery(query);
  const res = await fetchAsync(url, { method: 'PUT', body: data });

  return res;
};

export const deleteRequest = async(endpoint: string, query?: object) => {
  let url = `${API_URL}/${endpoint}`;

  url += parseQuery(query);

  const res = await fetchAsync(url, { method: 'DELETE' });

  return res;
};
