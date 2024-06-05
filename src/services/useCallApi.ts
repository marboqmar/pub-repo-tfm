import { useEffect, useState } from "react";
import { ItemDetailsModel, ItemsFromAPIModel } from "../models";
import axios from "axios";

// To avoid doing more than one call to API, the return of this hook is returned as well by useApiResultsAndFilteredItems
// and are used throughout the project from the latter
export const useCallApi = () => {
  const [shopItemsList, setShopItemsList] = useState<ItemDetailsModel[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch items from API and map them
  const mapItemsFromAPIToItemDetails = (
    items: ItemsFromAPIModel[],
  ): ItemDetailsModel[] => {
    return items.map((individualItem: ItemDetailsModel) => {
      return {
        key: individualItem.key,
        name: individualItem.name,
        img: individualItem.img,
        price: individualItem.price,
        description: individualItem.description,
        origin: individualItem.origin,
      };
    });
  };

  useEffect(() => {
    const fetchShopItemsList = async () => {
      try {
        setError("");
        setIsLoading(true);
        const response = await axios.get(
          "https://fantasy-forge-back.netlify.app/.netlify/functions/api",
        );
        setShopItemsList(mapItemsFromAPIToItemDetails(response.data));
      } catch (error) {
        setError("API did not provide any items");
      }
      setIsLoading(false);
    };

    fetchShopItemsList();
  }, []);

  return { error, isLoading, shopItemsList };
};
