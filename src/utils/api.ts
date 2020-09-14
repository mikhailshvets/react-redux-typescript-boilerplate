export const API_URL = '';

interface FetchAsyncParams {
  headers?: Map<string, string>;
  method: string;
  body?: object;
}

interface FetchParams {
  headers: Headers;
  method: string;
  body?: string;
}

export class Api {
  private refreshToken = '';
  private accessToken = '';

  private getHeaders = (
    headers: Map<string, string> | object = {}
  ): Headers => {
    const allHeaders = new Headers();

    allHeaders.append('Accept', 'application/json');
    allHeaders.append('Authorization', '');
    allHeaders.append('Content-Type', 'application/json');
    allHeaders.append('token', this.accessToken);

    Object.entries(headers).forEach(([key, value]) =>
      allHeaders.append(key, value)
    );

    if (this.accessToken) {
      allHeaders.append('Authorization', this.accessToken);
    }

    return allHeaders;
  };

  private fetchAsync = async (
    url: string,
    { method = 'GET', body, headers }: FetchAsyncParams
  ) => {
    // await response of fetch call
    const params: FetchParams = {
      headers: new Headers(),
      method: '',
    };

    params.headers = this.getHeaders(headers);
    params.method = method;

    if (body && method !== 'GET' && method !== 'HEAD') {
      params.body = JSON.stringify(body);
    }

    let response = await fetch(url, params);

    if (response && response.status === 403) {
      params.headers.append('token', this.refreshToken);
      response = await fetch(url, params);
    }

    const data = await response.json();

    return data;
  };

  private parseQuery = (query?: object) => {
    let queryString = '';

    if (query && typeof query === 'object') {
      const entries = Object.entries(query);

      queryString += entries.reduce((acc, [key, val]) => {
        return `${acc}&${encodeURI(key)}=${encodeURI(val)}`;
      }, '?');
    }

    return queryString;
  };

  setAuthToken = (token: string) => {
    this.accessToken = token;
  };

  resetAuthToken = () => {
    this.accessToken = '';
  };

  setRefreshToken = (token: string) => {
    this.refreshToken = token;
  };

  resetRefreshToken = () => {
    this.refreshToken = '';
  };

  get = async <T = any>(endpoint: string, query?: object) => {
    let url = `${API_URL}/${endpoint}`;
    url += this.parseQuery(query);
    const response: T = await this.fetchAsync(url, { method: 'GET' });

    return response;
  };

  post = async <T = any>(endpoint: string, data?: object, query?: object) => {
    let url = `${API_URL}/${endpoint}`;
    url += this.parseQuery(query);
    const response: T = await this.fetchAsync(url, {
      method: 'POST',
      body: data,
    });

    return response;
  };

  put = async <T = any>(endpoint: string, data: object, query?: object) => {
    let url = `${API_URL}/${endpoint}`;
    url += this.parseQuery(query);
    const response: T = await this.fetchAsync(url, {
      method: 'PUT',
      body: data,
    });

    return response;
  };

  delete = async <T = any>(endpoint: string, query?: object) => {
    let url = `${API_URL}/${endpoint}`;
    url += this.parseQuery(query);
    const response: T = await this.fetchAsync(url, { method: 'DELETE' });

    return response;
  };
}

const api = new Api();

export default api;
