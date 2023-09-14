import api from "../api";

export const getAllCarts = async () => {
  const res = await api.get(`/carts`);
  return res.data;
};

//
