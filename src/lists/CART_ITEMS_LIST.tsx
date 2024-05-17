import { ItemDetailsModel } from "../models";
import ITEM_LIST from "./ITEM_LIST.tsx";

export const CART_ITEMS_LIST = () => {
  const cartString: string | null = localStorage.getItem("Cart");
  let cartItemsList: ItemDetailsModel[] = [];

  if (cartString) {
    const cartItemsIds: string[] = cartString.split(", ");

    cartItemsList = ITEM_LIST.filter((item: ItemDetailsModel) => {
      return cartItemsIds.includes(item.key.toString());
    });
  }
  return cartItemsList;
};
