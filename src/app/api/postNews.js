import api from "./api";

export const PostNews = async ({ articleId }) => {
  try {
    const res = await api.post("/topics/me", { articleId});
    return res.data;
  } catch (err) {
    console.error("❌ postTopic Unknown error:", err);
    throw err; // 그대로
  }
};

