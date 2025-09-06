import api from './api'; // (이미 axios 인스턴스가 있으면 import)

export const GetScraps = async () => {
  const res = await api.get('/scraps');
  return res.data; // 배열 반환
};
