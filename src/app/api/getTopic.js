// src/api/categoryApi.js
import api from './api'; // (이미 axios 인스턴스가 있으면 import)

export const getTopicList = async () => {
  const res = await api.get('/topics');
  return res.data.result; // 배열 반환
};

export const getWeeklyTopic = async () => {
  const res = await api.get('/topics/trends/weekly');
  return res.dataresult; // 배열 반환
};

export const getPopularTopic = async () => {
  const res = await api.get('/topics/popular');
  return res.dataresult; // 배열 반환
};
