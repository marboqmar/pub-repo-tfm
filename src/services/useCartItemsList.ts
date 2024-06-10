import { useContext, useMemo } from "react";
import { useCartOnLocalStorage } from "./useCartOnLocalStorage.ts";
import { ItemDetailsModel } from "../models";
import { ItemsFromApiContext } from "../contexts/ItemsFromApiContextProvider.tsx";

// Maps ID-quantity dictionary from local storage into list of items as per ItemDetailsModel
export const useCartItemsList = () => {
  const { localStorageCartInfo } = useCartOnLocalStorage();
  const { itemsFromApi } = useContext(ItemsFromApiContext);

  // Creates a list of the shop items that match the previous ID list
  return useMemo(() => {
    const cartItemsIdList: string[] = Object.keys(localStorageCartInfo);
    return itemsFromApi.filter((item: ItemDetailsModel) => {
      return cartItemsIdList.includes(item.key.toString());
    });
  }, [localStorageCartInfo, itemsFromApi]);
};
