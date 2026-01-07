import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app";

export const goalService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/goals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    });
    
    // Cek jika data ada dan tidak kosong
    if (response.data.data && response.data.data.length > 0) {
      return response.data.data[0];
    } else {
      // Return default data jika tidak ada data
      return {
        target_amount: 0,
        present_amount: 0,
      };
    }
  } catch (error: any) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};
