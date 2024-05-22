import { JSONCartModel } from "../models/cartModel.ts";
const LOCAL_STORAGE_CART_KEY = "Cart";
import useLocalStorage from "use-local-storage";
import { getCartFromLocalStorage } from "./getCartFromLocalStorage.tsx";

export const useSaveCartOnLocalStorage = () => {
  const [cartItems, setCartItems] = useLocalStorage<
    JSONCartModel[] | undefined
  >(LOCAL_STORAGE_CART_KEY, []);

  const addNewItemToCart = (key: number) => {
    // Adds a default quantity of one as quantities will be dealt with in the cart site
    const JSONCart: JSONCartModel = {
      itemId: key,
      quantity: 1,
    };

    // Gets previous cart, pushes new element to cart (JSONCart), and saves new cart on local storage
    const cart: JSONCartModel[] = getCartFromLocalStorage();

    cart.push(JSONCart);

    setCartItems(cart);
  };

  return {
    cartItems,
    saveItemToCart: (key: number) => addNewItemToCart(key),
  };
};
