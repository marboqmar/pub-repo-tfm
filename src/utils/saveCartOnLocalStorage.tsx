import { JSONCartModel } from "../models/cartModel.ts";
const LOCAL_STORAGE_CART_KEY = "Cart";
import useLocalStorage from "use-local-storage";

export const saveCartOnLocalStorage = (cart: JSONCartModel[]) => {
  // localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));

  const options = {
    serializer: (object) => {
      return JSON.stringify(object);
    },
  };

  const [cartItems, setCartItems] = useLocalStorage<string>(
    LOCAL_STORAGE_CART_KEY,
    "",
    options,
  );

  console.log(options.serializer(cart));

  setCartItems(options.serializer(cart));

  return {
    cartItems,
    setCartItems,
    options,
  };
};
