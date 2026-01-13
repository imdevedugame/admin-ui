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

export const expensesService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/expenses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    });
    
    console.log("Raw expenses response:", response);
    console.log("Response data:", response.data);
    
    // Cek apakah response.data sudah array atau masih dibungkus object
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (response.data.data && Array.isArray(response.data.data)) {
      return response.data.data;
    } else {
      return [];
    }
  } catch (error: any) {
    console.error("Error fetching expenses:", error);
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg || "Failed to fetch expenses",
    };
  }
};
