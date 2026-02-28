import api from "./api";
import axios from "axios";

const API_HOST = "http://localhost/wordpress/wp-json";

// --- Get JWT Token ---
async function getToken() {
  try {
    const res = await axios.post(
      `${API_HOST}/jwt-auth/v1/token`,
      {
        username: "admin",
        password: "admin",
      },
      { headers: { "Content-Type": "application/json" } },
    );
    return res.data.token;
  } catch (err) {
    console.error("JWT Token Error:", err.response?.data || err.message);
    throw err;
  }
}

export const productService = {
  async getAll() {
    const token = await getToken();

    const res = await api.get("/product", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        _embed: true,
        per_page: 100, // adjust if needed
      },
    });
    return res.data;
  },
};
