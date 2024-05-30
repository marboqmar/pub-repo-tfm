import { useEffect, useState } from "react";
import { ItemDetailsModel, ItemsFromAPIModel } from "../models";
import axios from "axios";

export const useShopItemsList = () => {
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
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setShopItemsList(mapItemsFromAPIToItemDetails(response.data));
      } catch (error) {
        setError("API did not provide any items");
      }
      setIsLoading(false);
    };

    fetchShopItemsList();
  }, []);

  return { error, loading: isLoading, shopItemsList };
};
