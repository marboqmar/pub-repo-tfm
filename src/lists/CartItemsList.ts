import { ItemDetailsModel } from "../models";
import { useShopItemsList } from "../services/useShopItemsList.ts";
import { useMemo } from "react";
import { JSONCartModel } from "../models/cartModel.ts";
import { useCartOnLocalStorage } from "../services/useCartOnLocalStorage.ts";

export const useCartItemsList = () => {
  const { cartItemsIdAndQuantity } = useCartOnLocalStorage();
  const { shopItemsList } = useShopItemsList();

  // Create cart items list from IDs in local storage cart
  return useMemo(() => {
    let cartItems: ItemDetailsModel[] = [];
    const cartItemsIdList: number[] = [];

    cartItemsIdAndQuantity.forEach(
      (cartItemFromLocalStorage: JSONCartModel) => {
        // Creates a list with the IDs in the local storage cart
        cartItemsIdList.push(cartItemFromLocalStorage.itemId);

        // Creates a list of the shop items that match the previous ID list
        cartItems = shopItemsList.filter((item: ItemDetailsModel) => {
          return cartItemsIdList.includes(item.key);
        });
      },
    );

    return cartItems;
  }, [cartItemsIdAndQuantity, shopItemsList]);
};
