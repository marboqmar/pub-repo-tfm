import { useMemo } from "react";
import { useCartOnLocalStorage } from "../services/useCartOnLocalStorage.ts";
import { ItemDetailsModel } from "../models";
import { useShopItemsList } from "../services/useShopItemsList.ts";

export const useCartItemsList = () => {
  const { localStorageCartInfo } = useCartOnLocalStorage();
  const { shopItemsList } = useShopItemsList();

  // Create cart items list from IDs in local storage cart
  return useMemo(() => {
    const cartItemsIdList: string[] = Object.keys(localStorageCartInfo);
    let cartItems: ItemDetailsModel[] = [];

    // Creates a list of the shop items that match the previous ID list
    cartItems = shopItemsList.filter((item: ItemDetailsModel) => {
      return cartItemsIdList.includes(item.key.toString());
    });
    return cartItems;
  }, [localStorageCartInfo, shopItemsList]);
};
