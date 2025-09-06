import api from './api';

export const getNews = async () => {
  const res = await api.get('/articles');
  return res.data.result; // 배열 반환
};