import axios from "axios";

const API_BASE_URL = "https://api.nuansasolution.id/api"; 

export const getFeatures = async () => {
  try {
    // gunakan endpoint yang benar
    const res = await axios.get(`${API_BASE_URL}/feature`);
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching features:", error);
    return [];
  }
};
