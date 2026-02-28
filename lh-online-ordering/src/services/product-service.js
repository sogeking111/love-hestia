import api from "./api";

export const productService = {
  async getAll() {
    const res = await api.get("/product", {
      params: {
        _embed: true,
        per_page: 100, // adjust if needed
      },
    });
    return res.data;
  },
};
