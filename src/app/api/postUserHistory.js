import api from "./api";

export const postUserHistory = async ({ articleId, readTimeSeconds }) => {
  try {
    const res = await api.post("/history/read", { articleId, readTimeSeconds });
    console.log("데이터", res.data);
    return res.data.result;
  } catch (err) {
    console.error("❌ postTopic Unknown error:", err);
    throw err; // 그대로
  }
};