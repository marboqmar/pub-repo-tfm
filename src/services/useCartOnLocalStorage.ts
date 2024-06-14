const LOCAL_STORAGE_CART_KEY = "Cart";
import useLocalStorage from "use-local-storage";
import { cartModel } from "../models/cartModel.ts";

export const useCartOnLocalStorage = () => {
  // Dictionary itemKey: quantity
  const [localStorageMap_itemKey_quantity, setLocalStorageCartInfo] =
    useLocalStorage<Record<number, number>>(LOCAL_STORAGE_CART_KEY, {});

  const addItemToCart = (key: number) => {
    const currentItem: number =
      // If the item exists on the cart it gets its quantity, otherwise sets it as 0
      key in localStorageMap_itemKey_quantity
        ? localStorageMap_itemKey_quantity[key]
        : 0;

    // Pushes the new item adding 1 to its quantity
    const newCart: cartModel = { ...localStorageMap_itemKey_quantity };
    newCart[key] = currentItem + 1;
    setLocalStorageCartInfo(newCart);
  };

  const removeItemFromCart = (key: number, isDelete: boolean) => {
    const newCart: cartModel = { ...localStorageMap_itemKey_quantity };
    if (newCart[key] !== 0) {
      newCart[key] -= 1;
      setLocalStorageCartInfo(newCart);
    }
    if (newCart[key] === 0 || isDelete) {
      delete newCart[key];
      setLocalStorageCartInfo(newCart);
    }
  };

  const deleteCart = () => {
    setLocalStorageCartInfo({});
    console.log("me he ejecutado");
  };

  return {
    localStorageCartInfo: localStorageMap_itemKey_quantity,
    addItemToCart: (key: number) => addItemToCart(key),
    removeItemFromCart: (key: number, isDelete: boolean) =>
      removeItemFromCart(key, isDelete),
    deleteCart,
  };
};
