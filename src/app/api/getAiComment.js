import api from './api';

export const getAiComment = async (articleId) => {
  const res = await api.get(`/articles/${articleId}`);
  return res.data.result; // 배열 반환
};