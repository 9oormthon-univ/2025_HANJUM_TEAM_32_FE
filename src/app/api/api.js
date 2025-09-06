import axios from "axios";

const api = axios.create({
  baseURL: 'http://newshanjum.ddnsking.com:8080/api', // 모든 API의 기본 주소
});

// 인터셉터: 토큰 자동 첨부
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  const fullUrl = (config.baseURL || "") + (config.url || "");
  console.log('[REQ]', config.method?.toUpperCase(), fullUrl, 'token?', !!token, token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    const fullUrl = (res.config.baseURL || "") + (res.config.url || "");
    console.log("[RES]", res.status, fullUrl, "responseURL:", res.request?.responseURL);
    return res;
  },
  (err) => {
    if (axios.isAxiosError(err)) {
      const fullUrl = (err.config?.baseURL || "") + (err.config?.url || "");
      console.log("[ERR]", err.code, fullUrl, "status:", err.response?.status, "responseURL:", err.request?.responseURL);
    }
    return Promise.reject(err);
  }
);


export default api;