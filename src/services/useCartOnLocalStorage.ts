const LOCAL_STORAGE_CART_KEY = "Cart";
import useLocalStorage from "use-local-storage";
import { cartModel } from "../models/cartModel.ts";

export const useCartOnLocalStorage = () => {
  // Dictionary itemKey: quantity
  const [localStorageCartInfo, setLocalStorageCartInfo] = useLocalStorage<
    Record<number, number>
  >(LOCAL_STORAGE_CART_KEY, []);

  const addItemToCart = (key: number) => {
    const currentItem: number =
      // If the item exists on the cart it gets its quantity, otherwise sets it as 0
      key in localStorageCartInfo ? localStorageCartInfo[key] : 0;

    // Pushes the new item adding 1 to its quantity
    const newCart: cartModel = { ...localStorageCartInfo };
    newCart[key] = currentItem + 1;
    setLocalStorageCartInfo(newCart);
  };

  const removeItemFromCart = (key: number, isDelete: boolean) => {
    const newCart: cartModel = { ...localStorageCartInfo };
    if (newCart[key] !== 1) {
      newCart[key] -= 1;
      setLocalStorageCartInfo(newCart);
    }
    if (newCart[key] === 1 || isDelete) {
      delete newCart[key];
      setLocalStorageCartInfo(newCart);
    }
  };

  return {
    localStorageCartInfo,
    addItemToCart: (key: number) => addItemToCart(key),
    removeItemFromCart: (key: number, isDelete: boolean) =>
      removeItemFromCart(key, isDelete),
  };
};
