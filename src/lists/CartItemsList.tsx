import { ItemDetailsModel } from "../models";
import ITEM_LIST from "./ITEM_LIST.tsx";
import { getCartFromLocalStorage } from "../utils/cartOnLocalStorage.tsx";
import { JSONCartModel } from "../models/cartModel.ts";

export const cartItemsList = () => {
  const cartItemsIdList: number[] = [];
  let cartItems: ItemDetailsModel[] = [];

  getCartFromLocalStorage().forEach(
    (cartItemFromLocalStorage: JSONCartModel) => {
      cartItemsIdList.push(cartItemFromLocalStorage.itemId);

      cartItems = ITEM_LIST.filter((item: ItemDetailsModel) => {
        return cartItemsIdList.includes(item.key);
      });
    },
  );

  return cartItems;
};
