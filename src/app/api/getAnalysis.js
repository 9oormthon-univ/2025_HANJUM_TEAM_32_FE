import api from './api';

export const GetAnalysis = async () => {
  const res = await api.get('/analysis/me');
  return res.data.result; // 배열 반환
};