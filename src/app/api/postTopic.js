import api from "./api";

export const postTopic = async ({ topicIds }) => {
  try {
    const res = await api.post("/topics/me", { topicIds});
    console.log("데이터", res.data);
    return res.data.result;
  } catch (err) {
    console.error("❌ postTopic Unknown error:", err);
    throw err; // 그대로
  }
};

