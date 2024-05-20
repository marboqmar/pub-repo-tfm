import { JSONCartModel } from "../models/cartModel.ts";

const LOCAL_STORAGE_CART_KEY = "Cart";

export const getCartFromLocalStorage = (): JSONCartModel[] => {
  const cartJson = localStorage.getItem(LOCAL_STORAGE_CART_KEY);

  return cartJson ? JSON.parse(cartJson) : [];
};

export const saveCartOnLocalStorage = (cart: JSONCartModel[]) => {
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
};
