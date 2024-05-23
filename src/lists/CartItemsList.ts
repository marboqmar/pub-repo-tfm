import { ItemDetailsModel } from "../models";
import ITEM_LIST from "./ITEM_LIST.ts";
import { JSONCartModel } from "../models/cartModel.ts";
import { useCartOnLocalStorage } from "../utils/useCartOnLocalStorage.tsx";

export const useCartItemsList = () => {
  const { cartItemsIdAndQuantity } = useCartOnLocalStorage();
  const cartItemsIdList: number[] = [];
  let cartItems: ItemDetailsModel[] = [];

  cartItemsIdAndQuantity.forEach((cartItemFromLocalStorage: JSONCartModel) => {
    cartItemsIdList.push(cartItemFromLocalStorage.itemId);

    cartItems = ITEM_LIST.filter((item: ItemDetailsModel) => {
      return cartItemsIdList.includes(item.key);
    });
  });

  return cartItems;
};
