import api from "../api";

export const getAllCarts = async () => {
  const res = await api.get(`/carts`);
  return res.data;
};

export const getCartById = async (id) => {
  const res = await api.get(`carts/${id}`);
  return res.data;
};

export const deleteCartById = async (id) => {
  const res = await api.delete(`carts/${id}`);
  return res.data;
};

export const updateCartById = async (id) => {
  const res = await api.patch(`carts/${id}`);
  return res.data;
};
