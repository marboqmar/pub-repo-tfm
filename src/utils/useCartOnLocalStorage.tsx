import { JSONCartModel } from "../models/cartModel.ts";
const LOCAL_STORAGE_CART_KEY = "Cart";
import useLocalStorage from "use-local-storage";

export const useCartOnLocalStorage = () => {
  const [cartItemsIdAndQuantity, setCartItems] = useLocalStorage<
    JSONCartModel[]
  >(LOCAL_STORAGE_CART_KEY, []);

  const addNewItemToCart = (key: number) => {
    // Adds a default quantity of one as quantities will be dealt with in the cart site
    const JSONCart: JSONCartModel = {
      itemId: key,
      quantity: 1,
    };

    // Pushes new element to cart (JSONCart) and saves new cart on local storage
    cartItemsIdAndQuantity.push(JSONCart);

    setCartItems([...cartItemsIdAndQuantity]);
  };

  return {
    cartItemsIdAndQuantity: cartItemsIdAndQuantity,
    saveItemToCart: (key: number) => addNewItemToCart(key),
  };
};
