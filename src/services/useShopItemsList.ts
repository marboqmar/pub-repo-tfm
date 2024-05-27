import { useEffect, useState } from "react";
import { ItemDetailsModel, ItemsFromAPIModel } from "../models";
import axios from "axios";

export const useShopItemsList = () => {
  const [shopItemsList, setShopItemsList] = useState<ItemDetailsModel[]>([]);
  const [error, setError] = useState<string>("");

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
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setShopItemsList(mapItemsFromAPIToItemDetails(response.data));
      } catch (error) {
        setError("API did not provide any items");
      }
    };

    fetchShopItemsList();
  }, []);

  if (error) {
    return error.toString();
  }

  console.log("test");
  return shopItemsList;
};
