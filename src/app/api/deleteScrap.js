export const deleteScrap = async ({scrapId}) => {
  try {
    const res = await api.delete(`/scraps/${scrapId}`);
    return res.data.result;
  } catch (err) {
    console.error("❌ deleteScrap Unknown error:", err);
    throw err; // 그대로
  }
}